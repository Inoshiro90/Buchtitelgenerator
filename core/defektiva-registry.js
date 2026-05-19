'use strict';

/**
 * defektiva-registry.js — Defektiva-Datenlader (Phase 3)
 *
 * Defektiva sind Nomen mit eingeschränktem Numerus-Paradigma:
 *
 *   Pluraliatantum: existieren nur im Plural
 *     → "die Alpen", "die Rauvinberge", "die Pyrenäen"
 *
 *   Singulariatantum: existieren nur im Singular
 *     → "der Mut", "das Gold", "die Stille"
 *
 * UNTERSCHIED ZU NORMALEN NOMEN:
 *   Normale Nomen in LEMMA_MAP haben separate singular/plural-Felder.
 *   Defektiva haben nur ein 'noun'-Feld (die kanonische Form) und
 *   ein 'number'-Feld ('singular'|'plural'), das ihren inhärenten Numerus festlegt.
 *
 * WIE DEF_MAP BEFÜLLT WIRD:
 *   Anders als LEMMA_MAP, die durch Lemma-Keys ("Tier", "Waffe") indexiert ist,
 *   wird DEF_MAP durch Variablen-Keys ("Gebirge1", "Ort2") befüllt.
 *
 *   WARUM VARIABLEN-KEYS:
 *     Defektiva-Einträge werden in Templates als {DEF:Gebirge1|nom} referenziert.
 *     Das DEF-Token braucht nach dem Rendering Zugriff auf denselben Datensatz,
 *     damit def:Gebirge1-Flags in ART/PRO-Tokens denselben Numerus lesen können.
 *
 * KATEGORIEN → SLOT-DEFINITIONEN:
 *   In title.js gibt es DEF_SLOT_DEFINITIONS (analog zu SLOT_DEFINITIONS für NOM),
 *   die jedem Variablen-Key eine Kategorie zuweisen:
 *     { key: 'Gebirge1', lemma: 'Gebirge' }
 *
 * @module defektiva-registry
 */

import { loadCsv }   from './csvLoader.js';
import { DEF_MAP }   from './engine.js';

// Kategorien mit ihren Datei-Pfaden
// Jede Kategorie entspricht einer CSV-Datei aus data/defektiva/
const DEF_CATEGORIES = [
  { lemma: 'Gebirge', file: 'defektiva/Gebirge.csv' },
  // Weitere Kategorien werden hier ergänzt sobald CSVs vorliegen:
  // { lemma: 'Ort',     file: 'defektiva/Orte.csv' },
  // { lemma: 'Stoff',   file: 'defektiva/Stoffe.csv' },
];

let _initialized = false;

/**
 * Lädt alle Defektiva-CSV-Dateien und befüllt DEF_MAP.
 *
 * DEF_MAP-Format:
 *   DEF_MAP['Gebirge'] = { type: 'defektiv', arrays: [{noun, gender, number, ...}, ...] }
 *
 * Die Kategorie-Keys ('Gebirge', 'Ort') entsprechen den lemma-Feldern in
 * DEF_SLOT_DEFINITIONS in title.js — so kann buildDefVariableMap() die richtigen
 * Einträge selektieren.
 *
 * Idempotent — mehrfache Aufrufe laden nur einmal.
 */
export async function initDefektivaRegistry(base = './data/') {
  if (_initialized) return;
  _initialized = true;

  const tasks = DEF_CATEGORIES.map(({ lemma, file }) =>
    loadCsv(base + file)
      .then(rows => {
        // CSV-Feldnamen normalisieren (robustheit gegen unterschiedliche Spaltennamen)
        const normalized = rows.map(row => ({
          noun:              row.noun   ?? row.nomen   ?? row.lemma ?? '',
          adjective:         row.adjective ?? row.adjektiv ?? '',
          prefix:            row.prefix  ?? row.präfix  ?? '',
          suffix:            row.suffix  ?? row.suffix  ?? '',
          gender:            row.gender  ?? row.genus   ?? 'maskulinum',
          number:            row.number  ?? row.numerus ?? 'singular',
          declinationRule:   row.declinationRule   ?? row.deklinationsregel ?? 'starkeDeklination',
          declinationPattern: row.declinationPattern ?? row.muster ?? 'S4',
          campaignSetting:   row.campaignSetting ?? row.setting ?? '',
          tags:              row.tags ?? '',
        })).filter(r => r.noun.trim() !== '');

        DEF_MAP[lemma] = { type: 'defektiv', arrays: normalized };
      })
      .catch(err => {
        console.warn(`[defektiva-registry] Fehler beim Laden von "${file}": ${err.message}`);
        DEF_MAP[lemma] = { type: 'defektiv', arrays: [] };
      })
  );

  await Promise.all(tasks);
}

/**
 * Gibt alle registrierten Defektiva-Kategorien zurück.
 * Nützlich für Tests und Debugging.
 */
export function getLoadedCategories() {
  return Object.keys(DEF_MAP).filter(k => DEF_MAP[k]?.type === 'defektiv');
}

/**
 * Selektiert einen zufälligen Defektiva-Eintrag für eine gegebene Kategorie.
 * Berücksichtigt Campaign-Settings (analog zu engine.selectRandom).
 *
 * @param {string}   category    - z.B. 'Gebirge'
 * @param {string[]} settings    - Aktive Campaign-Settings
 * @returns {{ noun, gender, number, ... } | null}
 */
export function selectDefektiv(category, settings) {
  const entry = DEF_MAP[category];
  if (!entry || entry.arrays.length === 0) return null;

  const s        = settings?.length > 0 ? settings : ['Universal'];
  const filtered = entry.arrays.filter(
    e => !e.campaignSetting || s.includes(e.campaignSetting),
  );
  const pool = filtered.length > 0 ? filtered : entry.arrays;
  return pool[Math.floor(Math.random() * pool.length)];
}
