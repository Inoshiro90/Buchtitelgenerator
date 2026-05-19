'use strict';

/**
 * slot-schema.js — Slot-basiertes Validierungssystem für ART/PRO-Token (Phase 2)
 *
 * HERKUNFT: Portiert aus editor/scripts/services/slot-schema.js
 *
 * GENERATOR-ANPASSUNGEN gegenüber Editor-Original:
 *   - Keine Editor-spezifischen Importe (AppStore, db, etc.)
 *   - Keine IndexedDB-Abhängigkeiten
 *   - Reine Daten- und Logik-Schicht; keine UI-Abhängigkeiten
 *   - Alle Exports bleiben identisch zum Editor → zukünftige dsl-core-Extraktion trivial
 *
 * WARUM DIESES SYSTEM (statt dem alten Set-Validator in engine.js):
 *
 *   Das alte System prüfte Flags gegen ein flaches Set aller erlaubten Werte
 *   für einen Token-Typ. Strukturelle Probleme:
 *
 *   (1) Positionsblindheit: {ART:poss|p1|fem|sgl|nom|msk|sgl} wurde akzeptiert,
 *       obwohl 'fem' (P3_GENUS) bei Person p1 semantisch unmöglich ist.
 *
 *   (2) Keine var:/def:-Unterstützung: Variablen-Referenzen fielen als
 *       "Ungültiger Flag" durch.
 *
 *   (3) Reihenfolge egal: {ART:poss|msk|p1|sgl|nom} und
 *       {ART:poss|p1|sgl|nom|msk|sgl} wurden gleich behandelt, obwohl
 *       das erste Format falsch ist.
 *
 *   Das neue System ist schema-gesteuert und positions-bewusst.
 *
 * @module slot-schema
 */

// ── SlotType-Enum ──────────────────────────────────────────────────────────────
/**
 * Semantische Typen für einzelne Slots.
 * Jeder Typ hat einen eigenen Validator (SLOT_TYPE_VALIDATORS).
 */
export const SlotType = Object.freeze({
  KASUS:       'KASUS',        // nom | gen | dat | akk
  GENUS:       'GENUS',        // msk | fem | neu
  GENUS_EXT:   'GENUS_EXT',   // msk | fem | neu | var:<Variable>
  GENUS_ANT:   'GENUS_ANT',   // Antezedent-Genus: msk | fem | neu
  NUMERUS:     'NUMERUS',     // sgl | plu
  NUMERUS_EXT: 'NUMERUS_EXT', // sgl | plu | def:<Variable>
  NUMERUS_ANT: 'NUMERUS_ANT', // Antezedent-Numerus: sgl | plu
  PERSON:      'PERSON',      // p1 | p2 | p3 | p2form
  P3_GENUS:    'P3_GENUS',    // Possessor-Genus bei p3: msk | fem | neu | var:<Variable>
  DEM_STEM:    'DEM_STEM',    // dieser | jener | jeder | mancher | solcher | derjenige | derselbe
  QUANT_STEM:  'QUANT_STEM',  // alle | beide | einige | manche | viele | wenige
  INDEF_FORM:  'INDEF_FORM',  // man | jemand | niemand | irgendjemand
  INT_FORM:    'INT_FORM',    // wer | was | welch
  REZ_KASUS:   'REZ_KASUS',   // dat | akk (einander)
  POSS_MODE:   'POSS_MODE',   // attr | pron
});

// ── Variablen-Muster ───────────────────────────────────────────────────────────
/**
 * VAR_PATTERN: var:Tier1, var:Held2 — Genus-Variable (GENUS_EXT, P3_GENUS)
 * DEF_PATTERN: def:Gebirge1, def:Ort3 — Defektiva-Numerus (NUMERUS_EXT)
 *
 * Diese Variablen werden erst zur Render-Zeit aus dem RuntimeContext aufgelöst.
 * Validator: syntaktisch akzeptieren. Runtime: semantisch auflösen.
 *
 * WICHTIG: Beide sind exportiert, damit engine.js sie für die Validierung
 * von NOM-Inline-Variablen verwenden kann (auch wenn die vollständige
 * Runtime-Auflösung noch aussteht).
 */
export const VAR_PATTERN = /^var:[A-ZÄÖÜ]\p{L}+[0-9]+$/u;
export const DEF_PATTERN = /^def:[A-ZÄÖÜ]\p{L}+[0-9]+$/u;

// ── SlotType-Validatoren ───────────────────────────────────────────────────────
/**
 * test()-Funktion für jeden SlotType: syntaktische Validierung eines Werts.
 * label: menschenlesbare Fehlermeldung.
 *
 * WICHTIG: Die Werte-Mengen verschiedener SlotTypes sind DISJUNKT.
 * Das ermöglicht dem SlotBinder, Flags an falschen Positionen zu erkennen.
 * Beispiel: GENUS_EXT {msk,fem,neu,var:X} ∩ NUMERUS_EXT {sgl,plu,def:X} = ∅
 */
export const SLOT_TYPE_VALIDATORS = new Map([

  [SlotType.KASUS, {
    test:  v => ['nom', 'gen', 'dat', 'akk'].includes(v),
    label: 'nom | gen | dat | akk',
  }],

  [SlotType.GENUS, {
    test:  v => ['msk', 'fem', 'neu'].includes(v),
    label: 'msk | fem | neu',
  }],

  [SlotType.GENUS_EXT, {
    // Genus + var:X Variablenreferenz.
    // var:Tier1 → Genus wird zur Render-Zeit aus dem Variablen-Kontext aufgelöst.
    test:  v => ['msk', 'fem', 'neu'].includes(v) || VAR_PATTERN.test(v),
    label: 'msk | fem | neu | var:<Variable>',
  }],

  [SlotType.GENUS_ANT, {
    // Antezedent-Genus für genposs (dessen/deren).
    // Kein var: — Antezedent muss zur Parsing-Zeit bekannt sein.
    test:  v => ['msk', 'fem', 'neu'].includes(v),
    label: 'msk | fem | neu',
  }],

  [SlotType.NUMERUS, {
    test:  v => ['sgl', 'plu'].includes(v),
    label: 'sgl | plu',
  }],

  [SlotType.NUMERUS_EXT, {
    // Numerus + def:X Defektiva-Variablenreferenz.
    // def:Gebirge1 → Numerus wird zur Render-Zeit aus dem Defektiva-Kontext aufgelöst.
    test:  v => ['sgl', 'plu'].includes(v) || DEF_PATTERN.test(v),
    label: 'sgl | plu | def:<Variable>',
  }],

  [SlotType.NUMERUS_ANT, {
    test:  v => ['sgl', 'plu'].includes(v),
    label: 'sgl | plu',
  }],

  [SlotType.PERSON, {
    test:  v => ['p1', 'p2', 'p3', 'p2form'].includes(v),
    label: 'p1 | p2 | p3 | p2form',
  }],

  [SlotType.P3_GENUS, {
    /**
     * Possessor-Genus bei p3: msk/neu → "sein-", fem → "ihr-".
     * Nur bei person=p3, verboten bei p1/p2.
     * DISJUNKT zu NUMERUS_EXT → Binder erkennt Fehler eindeutig.
     */
    test:  v => ['msk', 'fem', 'neu'].includes(v) || VAR_PATTERN.test(v),
    label: 'msk | fem | neu | var:<Variable>',
  }],

  [SlotType.DEM_STEM, {
    test:  v => [
      'dieser', 'jener', 'jeder', 'mancher', 'solcher', 'derjenige', 'derselbe',
    ].includes(v),
    label: 'dieser | jener | jeder | mancher | solcher | derjenige | derselbe',
  }],

  [SlotType.QUANT_STEM, {
    test:  v => ['alle', 'beide', 'einige', 'manche', 'viele', 'wenige'].includes(v),
    label: 'alle | beide | einige | manche | viele | wenige',
  }],

  [SlotType.INDEF_FORM, {
    test:  v => ['man', 'jemand', 'niemand', 'irgendjemand'].includes(v),
    label: 'man | jemand | niemand | irgendjemand',
  }],

  [SlotType.INT_FORM, {
    test:  v => ['wer', 'was', 'welch'].includes(v),
    label: 'wer | was | welch',
  }],

  [SlotType.REZ_KASUS, {
    // "einander" existiert nur in Dativ und Akkusativ.
    test:  v => ['dat', 'akk'].includes(v),
    label: 'dat | akk',
  }],

  [SlotType.POSS_MODE, {
    // attr (default) | pron (pronominale Form: meiner/meins statt mein)
    test:  v => ['attr', 'pron'].includes(v),
    label: 'attr | pron',
  }],
]);

// ── Hilfsfunktion ──────────────────────────────────────────────────────────────
function matchesSlotType(value, slotType) {
  const validator = SLOT_TYPE_VALIDATORS.get(slotType);
  return validator ? validator.test(value) : false;
}

// ── SlotBinder ─────────────────────────────────────────────────────────────────
/**
 * Bindet eine positionelle Folge von rawFlags an die SlotDefs eines Schemas.
 *
 * Algorithmus:
 *   Für jeden SlotDef (in Reihenfolge):
 *     1. required(ctx) / forbidden(ctx) evaluieren
 *     2. FORBIDDEN → Peek (nicht konsumieren), Fehlplatzierungs-Check
 *     3. REQUIRED  → konsumieren, Typ-Match erzwingen
 *     4. OPTIONAL  → konsumieren nur bei Typ-Match
 *
 * @param {string[]} rawFlags   - Flags nach dem Subtype (positional)
 * @param {object[]} slotDefs   - Schema-Slot-Definitionen
 * @returns {{ resolved: Map<string,string>, errors: string[], warnings: string[] }}
 */
export function bindSlots(rawFlags, slotDefs) {
  let rawIdx      = 0;
  const resolved  = new Map();
  const errors    = [];
  const warnings  = [];

  for (const slot of slotDefs) {
    const context = { byName: resolved, rawRemaining: rawFlags.slice(rawIdx) };

    const isRequired  = typeof slot.required  === 'function' ? slot.required(context)  : (slot.required  ?? false);
    const isForbidden = typeof slot.forbidden === 'function' ? slot.forbidden(context) : (slot.forbidden ?? false);

    if (isForbidden) {
      // Slot verboten: nicht konsumieren, aber Fehlplatzierung erkennen
      const candidate = rawFlags[rawIdx];
      if (candidate !== undefined && slot.type && matchesSlotType(candidate, slot.type)) {
        const msg = slot.forbiddenMessage
          ? slot.forbiddenMessage(context)
          : `Slot "${slot.name}" ist bei dieser Konfiguration verboten.`;
        errors.push(`Flag "${candidate}" an Position ${rawIdx + 1}: ${msg}`);
        // rawIdx NICHT erhöhen — Flag bleibt unkonsumiert
      }
      continue;
    }

    if (rawIdx >= rawFlags.length) {
      if (isRequired) {
        const typeLabel = SLOT_TYPE_VALIDATORS.get(slot.type)?.label ?? slot.type;
        errors.push(
          `Pflicht-Slot "${slot.name}" fehlt (erwartet an Position ${rawIdx + 1}). ` +
          `Erwartet: ${typeLabel}`,
        );
      }
      continue;
    }

    const value = rawFlags[rawIdx];

    if (!matchesSlotType(value, slot.type)) {
      if (isRequired) {
        const typeLabel = SLOT_TYPE_VALIDATORS.get(slot.type)?.label ?? slot.type;
        errors.push(
          `Slot "${slot.name}" (Position ${rawIdx + 1}): ` +
          `Ungültiger Wert "${value}". Erwartet: ${typeLabel}`,
        );
        rawIdx++; // Fehler-Flag konsumieren, um Parse fortzusetzen
      }
      // Optional + Typ-Mismatch → nicht konsumieren
      continue;
    }

    resolved.set(slot.name, value);
    rawIdx++;
  }

  // Übrig gebliebene Flags: zu viele Flags
  if (rawIdx < rawFlags.length) {
    const extra = rawFlags.slice(rawIdx);
    warnings.push(
      `${extra.length} unerwartete Flag(s) nach vollständiger Slot-Bindung: ` +
      extra.map(f => `"${f}"`).join(', '),
    );
  }

  return { resolved, errors, warnings };
}

// ── ConstraintChecker ──────────────────────────────────────────────────────────
/**
 * Cross-Slot-Constraints auf einem aufgelösten Slot-Set.
 *
 * Trennung von SlotBinder:
 *   SlotBinder  → syntaktisch korrekt pro Slot?
 *   Constraints → semantisch kompatibel über Slots hinweg?
 *
 * Beispiel: ART:quant|sgl|nom|msk|beide
 *   - Binder: 'sgl' ∈ NUMERUS_EXT ✓, 'beide' ∈ QUANT_STEM ✓
 *   - Constraint: 'beide' + 'sgl' → FEHLER (beide ist grammatikalisch nur Plural)
 *
 * @param {Map<string,string>} resolved
 * @param {ConstraintRule[]} constraints
 * @returns {{ errors: string[], warnings: string[] }}
 */
export function runConstraints(resolved, constraints) {
  const errors   = [];
  const warnings = [];

  for (const rule of constraints) {
    let result;
    try {
      result = rule.check(resolved);
    } catch (e) {
      warnings.push(`Constraint "${rule.name}" Ausführungsfehler: ${e.message}`);
      continue;
    }
    if (result == null) continue; // null = Constraint nicht anwendbar (z.B. def:X)
    if (!result.ok) {
      const msg = rule.message(resolved);
      if (rule.severity === 'error')   errors.push(msg);
      if (rule.severity === 'warning') warnings.push(msg);
    }
  }

  return { errors, warnings };
}

// ── Numerus-Klassifikations-Helpers ───────────────────────────────────────────
/**
 * Drei Klassen von NUMERUS_EXT-Werten:
 *
 *   isGuaranteedSingular('sgl')       → true  (sicher Singular → Plural-Only-Constraint greift)
 *   isGuaranteedPlural('plu')         → true  (sicher Plural   → Plural-Only-Constraint passt)
 *   isDeferredNumerus('def:Gebirge1') → true  (Runtime-abhängig → KEIN Fehler, zurückstellen)
 *
 * WARUM NOTWENDIG:
 *   Constraint `num !== 'plu'` schlägt bei `def:Gebirge1` fälschlicherweise fehl,
 *   obwohl Defektiva oft Pluraliatantum sind (z.B. "die Alpen"). Der Numerus
 *   ist erst zur Runtime auflösbar. Constraints dürfen nur bei isGuaranteedSingular()
 *   hart fehlschlagen.
 */
const isGuaranteedSingular = v => v === 'sgl';
const isDeferredNumerus    = v => typeof v === 'string' && v.startsWith('def:');

// ── Wiederverwendbare Constraint-Definitionen ──────────────────────────────────

/** beide/einige/viele/wenige/manche → grammatikalisch nur Plural. */
const QUANT_PLURAL_ONLY = new Set(['beide', 'einige', 'viele', 'wenige', 'manche']);
const quantPluralConstraint = {
  name:     'quant-plural-only',
  check:    s => {
    const stem = s.get('stem');
    const num  = s.get('numerus');
    if (!stem || !num) return null;
    if (!QUANT_PLURAL_ONLY.has(stem)) return { ok: true };
    if (isDeferredNumerus(num)) return null; // def:X → Runtime-Entscheidung
    if (isGuaranteedSingular(num)) return { ok: false };
    return { ok: true };
  },
  severity: 'error',
  message:  s =>
    `"${s.get('stem')}" ist grammatikalisch nur im Plural möglich. ` +
    `Verwende numerus=plu statt "${s.get('numerus')}".`,
};

/** 'jeder' ist distributiv-singular. Plural-Verwendung (*jede Bücher) ist falsch. */
const jederSingularConstraint = {
  name:     'jeder-singular-only',
  check:    s => {
    const stem = s.get('stem');
    const num  = s.get('numerus');
    if (stem !== 'jeder' || !num) return null;
    if (isDeferredNumerus(num)) return null;
    return { ok: num === 'sgl' };
  },
  severity: 'error',
  message:  () =>
    '"jeder" ist ein distributiver Singular. ' +
    'Pluralbildung ("jede Bücher") ist grammatikalisch unmöglich. ' +
    'Für Plural: verwende "alle" oder "manche".',
};

/** ART:ind ("ein-") existiert nicht im Plural. */
const indNoPluralConstraint = {
  name:     'ind-no-plural',
  check:    s => {
    const num = s.get('numerus');
    if (!num) return null;
    if (isDeferredNumerus(num)) return null;
    if (num === 'plu') return { ok: false };
    return { ok: true };
  },
  severity: 'error',
  message:  () =>
    'ART:ind (unbestimmter Artikel "ein-") existiert nicht im Plural. ' +
    'Im Plural gibt es den Null-Artikel. Verwende {ART:zero|plu|...}.',
};

/** PRO:refl existiert nur in Dativ und Akkusativ. */
const reflNoNomGenConstraint = {
  name:     'refl-no-nom-gen',
  check:    s => {
    const kasus = s.get('kasus');
    if (!kasus) return null;
    return { ok: !['nom', 'gen'].includes(kasus) };
  },
  severity: 'error',
  message:  s => {
    const k = s.get('kasus');
    return `PRO:refl existiert nicht im ${k === 'nom' ? 'Nominativ' : 'Genitiv'}. ` +
           'Reflexivpronomen (mich, mir, sich, uns, euch) sind nur in Dativ und Akkusativ möglich.';
  },
};

/** 'man' hat nur Nominativform. Andere Kasus sind nicht standardisiert. */
const manNomOnlyConstraint = {
  name:     'man-nom-only',
  check:    s => {
    const form  = s.get('indef_form');
    const kasus = s.get('kasus');
    if (form !== 'man' || !kasus) return null;
    return { ok: kasus === 'nom' };
  },
  severity: 'error',
  message:  () =>
    '"man" ist nur im Nominativ möglich (unvollständiges Paradigma). ' +
    'Für Dativ/Akkusativ-Äquivalente gibt es keine Standardform.',
};

/** 'welch' (Interrogativartikel) benötigt ein Genus-Flag. */
const welchRequiresGenusConstraint = {
  name:     'welch-requires-genus',
  check:    s => {
    const form  = s.get('int_form');
    const genus = s.get('genus');
    if (form !== 'welch') return null;
    return { ok: !!genus };
  },
  severity: 'error',
  message:  () =>
    'PRO:int mit "welch" benötigt ein Genus-Flag für die Flexion ' +
    '(welcher/welche/welches). Beispiel: {PRO:int|welch|nom|msk}',
};

// ── Schema-Factories ───────────────────────────────────────────────────────────

/**
 * Possessiv-Slots (gemeinsam für ART:poss und PRO:poss).
 *
 * Slot-Reihenfolge:
 *   [person] [p3genus?] [poss_num] [kasus] [ziel_genus] [ziel_num] [mode?]
 *
 * @param {boolean} withMode - true für PRO:poss (attr|pron), false für ART:poss
 */
function makePossSlots(withMode) {
  const slots = [
    {
      name:     'person',
      type:     SlotType.PERSON,
      required: true,
    },
    {
      /**
       * P3_GENUS: Konditionaler Slot.
       * required  wenn person='p3' (msk/neu → sein-, fem → ihr-)
       * forbidden wenn person≠'p3'
       *
       * WARUM POSITIONAL NOTWENDIG:
       *   Nur die 3. Person unterscheidet zwischen "sein-" und "ihr-" je nach
       *   Possessor-Genus. Ein Set-Validator kann diese semantische Bedingung
       *   nicht ausdrücken — er sähe nur 'fem ∈ F_GENUS'.
       */
      name:             'p3genus',
      type:             SlotType.P3_GENUS,
      required:         ctx => ctx.byName.get('person') === 'p3',
      forbidden:        ctx => ctx.byName.get('person') !== 'p3',
      forbiddenMessage: ctx =>
        `Possessor-Genus (P3_GENUS) ist bei Person "${ctx.byName.get('person')}" verboten. ` +
        'P3_GENUS (msk | fem | neu) darf nur bei Person p3 angegeben werden.',
    },
    {
      name:     'poss_num',
      type:     SlotType.NUMERUS_EXT,
      required: true,
    },
    {
      name:     'kasus',
      type:     SlotType.KASUS,
      required: true,
    },
    {
      name:     'ziel_genus',
      type:     SlotType.GENUS_EXT,
      required: true,
    },
    {
      name:     'ziel_num',
      type:     SlotType.NUMERUS_EXT,
      required: true,
    },
  ];

  if (withMode) {
    slots.push({
      name:     'mode',
      type:     SlotType.POSS_MODE,
      required: false, // default: attr (rückwärtskompatibel)
    });
  }

  return slots;
}

/** Antezedent-Slots für genposs (dessen/deren). Identisch für ART:genposs und PRO:genposs. */
function makeGenPossSlots() {
  return [
    { name: 'ant_genus', type: SlotType.GENUS_ANT,   required: true },
    { name: 'ant_num',   type: SlotType.NUMERUS_ANT,  required: true },
  ];
}

// ── ART-Schemas ────────────────────────────────────────────────────────────────
/**
 * Schema-Registry für alle ART-Subtypen.
 * Schlüssel = Subtyp-String (nach "ART:")
 */
export const ART_SCHEMAS = new Map([

  // ART:def — Bestimmter Artikel (der/die/das)
  ['def', {
    subtype:     'def',
    slots:       [
      { name: 'numerus', type: SlotType.NUMERUS_EXT, required: true },
      { name: 'kasus',   type: SlotType.KASUS,        required: true },
      { name: 'genus',   type: SlotType.GENUS_EXT,    required: true },
    ],
    constraints: [],
  }],

  // ART:ind — Unbestimmter Artikel (ein/eine)
  ['ind', {
    subtype:     'ind',
    slots:       [
      { name: 'numerus', type: SlotType.NUMERUS_EXT, required: true },
      { name: 'kasus',   type: SlotType.KASUS,        required: true },
      { name: 'genus',   type: SlotType.GENUS_EXT,    required: true },
    ],
    constraints: [indNoPluralConstraint],
  }],

  // ART:zero — Null-Artikel (∅) [NEU ggü. Generator]
  // Repräsentiert fehlenden Artikel: "Schwerter glänzen", "Mut zeigen"
  ['zero', {
    subtype:     'zero',
    slots:       [
      { name: 'numerus', type: SlotType.NUMERUS_EXT, required: true },
      { name: 'kasus',   type: SlotType.KASUS,        required: true },
      { name: 'genus',   type: SlotType.GENUS_EXT,    required: true },
    ],
    constraints: [],
  }],

  // ART:neg — Negativartikel (kein/keine)
  ['neg', {
    subtype:     'neg',
    slots:       [
      { name: 'numerus', type: SlotType.NUMERUS_EXT, required: true },
      { name: 'kasus',   type: SlotType.KASUS,        required: true },
      { name: 'genus',   type: SlotType.GENUS_EXT,    required: true },
    ],
    constraints: [],
  }],

  // ART:poss — Possessivartikel (mein/dein/sein/ihr)
  // Format: ART:poss | PERSON | [P3_GENUS] | NUMERUS_EXT | KASUS | GENUS_EXT | NUMERUS_EXT
  ['poss', {
    subtype:     'poss',
    slots:       makePossSlots(false), // kein POSS_MODE (ART = immer attributiv)
    constraints: [],
  }],

  // ART:genposs — Genitivischer Possessivdeterminator [NEU ggü. Generator]
  // Format: ART:genposs | GENUS_ANT | NUMERUS_ANT
  // msk|sgl → dessen, fem|sgl → deren, *|plu → deren
  ['genposs', {
    subtype:     'genposs',
    slots:       makeGenPossSlots(),
    constraints: [],
  }],

  // ART:dem — Demonstrativartikel (dieser/jener/jeder/...)
  // Format: ART:dem | NUMERUS_EXT | KASUS | GENUS_EXT | DEM_STEM
  ['dem', {
    subtype:     'dem',
    slots:       [
      { name: 'numerus', type: SlotType.NUMERUS_EXT, required: true },
      { name: 'kasus',   type: SlotType.KASUS,        required: true },
      { name: 'genus',   type: SlotType.GENUS_EXT,    required: true },
      { name: 'stem',    type: SlotType.DEM_STEM,      required: true },
    ],
    constraints: [jederSingularConstraint],
  }],

  // ART:w — Interrogativartikel (welch-)
  ['w', {
    subtype:     'w',
    slots:       [
      { name: 'numerus', type: SlotType.NUMERUS_EXT, required: true },
      { name: 'kasus',   type: SlotType.KASUS,        required: true },
      { name: 'genus',   type: SlotType.GENUS_EXT,    required: true },
    ],
    constraints: [],
  }],

  // ART:quant — Quantifikationsartikel (alle/beide/einige/...)
  // Format: ART:quant | NUMERUS_EXT | KASUS | GENUS_EXT | QUANT_STEM
  ['quant', {
    subtype:     'quant',
    slots:       [
      { name: 'numerus', type: SlotType.NUMERUS_EXT, required: true },
      { name: 'kasus',   type: SlotType.KASUS,        required: true },
      { name: 'genus',   type: SlotType.GENUS_EXT,    required: true },
      { name: 'stem',    type: SlotType.QUANT_STEM,    required: true },
    ],
    constraints: [quantPluralConstraint],
  }],

]);

// ── PRO-Schemas ────────────────────────────────────────────────────────────────
export const PRO_SCHEMAS = new Map([

  // PRO:pers — Personalpronomen (ich/du/er/sie/es/wir/...)
  // Format: PRO:pers | PERSON | NUMERUS_EXT | KASUS | [GENUS_EXT bei p3+sgl]
  ['pers', {
    subtype:     'pers',
    slots:       [
      { name: 'person',  type: SlotType.PERSON,      required: true },
      { name: 'numerus', type: SlotType.NUMERUS_EXT, required: true },
      { name: 'kasus',   type: SlotType.KASUS,        required: true },
      {
        name:             'genus',
        type:             SlotType.GENUS_EXT,
        required:         ctx => ctx.byName.get('person') === 'p3' && ctx.byName.get('numerus') === 'sgl',
        forbidden:        ctx => {
          const p = ctx.byName.get('person');
          return p === 'p1' || p === 'p2' || p === 'p2form';
        },
        forbiddenMessage: ctx =>
          `Genus ist bei Person "${ctx.byName.get('person')}" verboten. ` +
          'Nur bei p3+sgl ist Genus relevant (er/sie/es-Unterscheidung).',
      },
    ],
    constraints: [],
  }],

  // PRO:refl — Reflexivpronomen (mich/mir/sich/uns/euch)
  ['refl', {
    subtype:     'refl',
    slots:       [
      { name: 'person',  type: SlotType.PERSON,      required: true },
      { name: 'numerus', type: SlotType.NUMERUS_EXT, required: true },
      { name: 'kasus',   type: SlotType.KASUS,        required: true },
    ],
    constraints: [reflNoNomGenConstraint],
  }],

  // PRO:poss — Possessivpronomen (mein/dein/sein/ihr — attr oder pronominal)
  ['poss', {
    subtype:     'poss',
    slots:       makePossSlots(true), // mit POSS_MODE (attr|pron)
    constraints: [],
  }],

  // PRO:dem — Demonstrativpronomen (dieser/jener/... pronominal)
  ['dem', {
    subtype:     'dem',
    slots:       [
      { name: 'numerus', type: SlotType.NUMERUS_EXT, required: true },
      { name: 'kasus',   type: SlotType.KASUS,        required: true },
      { name: 'genus',   type: SlotType.GENUS_EXT,    required: true },
      { name: 'stem',    type: SlotType.DEM_STEM,      required: false }, // optional bei PRO
    ],
    constraints: [],
  }],

  // PRO:rel — Relativpronomen (der/die/das, dessen/deren, denen)
  ['rel', {
    subtype:     'rel',
    slots:       [
      { name: 'numerus', type: SlotType.NUMERUS_EXT, required: true },
      { name: 'kasus',   type: SlotType.KASUS,        required: true },
      { name: 'genus',   type: SlotType.GENUS_EXT,    required: true },
    ],
    constraints: [],
  }],

  // PRO:quant — Quantorpronomen (alle/beide/einige/... pronominal)
  ['quant', {
    subtype:     'quant',
    slots:       [
      { name: 'numerus', type: SlotType.NUMERUS_EXT, required: true },
      { name: 'kasus',   type: SlotType.KASUS,        required: true },
      { name: 'genus',   type: SlotType.GENUS_EXT,    required: true },
      { name: 'stem',    type: SlotType.QUANT_STEM,    required: true },
    ],
    constraints: [quantPluralConstraint],
  }],

  // PRO:genposs — Genitivisch pronominal (dessen/deren) [NEU ggü. Generator]
  ['genposs', {
    subtype:     'genposs',
    slots:       makeGenPossSlots(),
    constraints: [],
  }],

  // PRO:indef — Indefinitpronomen (man/jemand/niemand) [NEU ggü. Generator]
  ['indef', {
    subtype:     'indef',
    slots:       [
      { name: 'indef_form', type: SlotType.INDEF_FORM, required: true },
      { name: 'kasus',      type: SlotType.KASUS,       required: true },
    ],
    constraints: [manNomOnlyConstraint],
  }],

  // PRO:int — Interrogativpronomen (wer/was/welch) [NEU ggü. Generator]
  ['int', {
    subtype:     'int',
    slots:       [
      { name: 'int_form', type: SlotType.INT_FORM,  required: true },
      { name: 'kasus',    type: SlotType.KASUS,      required: true },
      {
        name:             'genus',
        type:             SlotType.GENUS_EXT,
        required:         ctx => ctx.byName.get('int_form') === 'welch',
        forbidden:        ctx => {
          const f = ctx.byName.get('int_form');
          return f === 'wer' || f === 'was';
        },
        forbiddenMessage: ctx =>
          `Genus ist bei Interrogativform "${ctx.byName.get('int_form')}" verboten ` +
          '("wer" und "was" sind genuslos).',
      },
    ],
    constraints: [welchRequiresGenusConstraint],
  }],

  // PRO:rez — Reziprokes Pronomen (einander) [NEU ggü. Generator]
  // Format: PRO:rez | REZ_KASUS (dat|akk)
  ['rez', {
    subtype:     'rez',
    slots:       [
      { name: 'kasus', type: SlotType.REZ_KASUS, required: true },
    ],
    constraints: [],
  }],

]);

// ── Öffentliche API ────────────────────────────────────────────────────────────

/** Schema-Lookup für ART-Subtypen. Gibt null zurück wenn Subtyp unbekannt. */
export function lookupArtSchema(subtype) {
  return ART_SCHEMAS.get(subtype) ?? null;
}

/** Schema-Lookup für PRO-Subtypen. Gibt null zurück wenn Subtyp unbekannt. */
export function lookupProSchema(subtype) {
  return PRO_SCHEMAS.get(subtype) ?? null;
}

/** Set aller validen ART-Subtypen. */
export const VALID_ART_SUBTYPES = new Set(ART_SCHEMAS.keys());

/** Set aller validen PRO-Subtypen. */
export const VALID_PRO_SUBTYPES = new Set(PRO_SCHEMAS.keys());

/**
 * Vollständige Slot-Validierung für ein einzelnes Token.
 * SchemaLookup → SlotBinder → ConstraintChecker
 *
 * @param {'ART'|'PRO'} type
 * @param {string}       subtype
 * @param {string[]}     rawFlags
 * @returns {{ errors: string[], warnings: string[], resolvedSlots: Map|null }}
 */
export function validateTokenSlots(type, subtype, rawFlags) {
  const schema = type === 'ART'
    ? lookupArtSchema(subtype)
    : lookupProSchema(subtype);

  if (!schema) {
    return {
      errors:        [`Unbekannter ${type}-Subtyp "${subtype}".`],
      warnings:      [],
      resolvedSlots: null,
    };
  }

  const bindResult       = bindSlots(rawFlags, schema.slots);
  const constraintResult = runConstraints(bindResult.resolved, schema.constraints);

  return {
    errors:        [...bindResult.errors, ...constraintResult.errors],
    warnings:      [...bindResult.warnings, ...constraintResult.warnings],
    resolvedSlots: bindResult.resolved,
  };
}
