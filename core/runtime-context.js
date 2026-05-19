'use strict';

/**
 * runtime-context.js — Laufzeitkontext für Variablen-Auflösung (Phase 3)
 *
 * HERKUNFT: Teilportierung aus editor/scripts/services/runtime-resolver.js.
 * Enthält nur den Kontext und die Variablen-Resolver — KEINE flex-tables-
 * oder MFB-Builder-Logik (die kommt in Phase 4).
 *
 * VERANTWORTLICHKEITEN:
 *
 *   1. RuntimeContext-Struktur: { vars, refs }
 *      vars: aufgelöste NOM/DEF-Variablen → { genus, numerus, lemma }
 *      refs: NAM-Referenzen → { genus, volk, region }
 *
 *   2. resolveGenusExt(value, ctx):
 *      'msk'|'fem'|'neu' → direkt
 *      'var:Tier1'        → ctx.vars.get('Tier1').genus
 *
 *   3. resolveNumerusExt(value, ctx):
 *      'sgl'|'plu'        → direkt
 *      'def:Gebirge1'     → ctx.vars.get('Gebirge1').numerus
 *
 * WICHTIG — Trennung Validator / Runtime:
 *   Der Validator (slot-schema.js) akzeptiert 'var:X' und 'def:X' syntaktisch.
 *   Dieser Kontext löst sie zur Render-Zeit semantisch auf.
 *   Fehler hier sind RuntimeErrors (Token nicht registriert), keine Syntax-Fehler.
 *
 * WICHTIG — Registrierungsreihenfolge:
 *   Variablen (Tier1, Gebirge1) müssen BEVOR auf sie verwiesen wird registriert
 *   sein. Dies wird durch sequenzielle Rendering-Pipeline in render() sichergestellt:
 *   ein DEF:Gebirge1-Token muss im Template VOR dem ersten def:Gebirge1-Verweis stehen.
 *
 * @module runtime-context
 */

/**
 * @typedef {Object} RuntimeContext
 * @property {Map<string,{genus:string, numerus:string, lemma:string}>} vars
 *   NOM/DEF-Variablen: z.B. 'Tier1' → { genus:'neu', numerus:'sgl', lemma:'Tiger' }
 * @property {Map<string,{genus:string, volk:string, region:string}>} refs
 *   NAM-Referenzen: z.B. 'Vorname1' → { genus:'msk', volk:'Mensch', region:'rnd' }
 */

/**
 * Erstellt einen leeren RuntimeContext.
 * Wird einmal pro render()-Aufruf erstellt.
 *
 * @returns {RuntimeContext}
 */
export function createRuntimeContext() {
  return {
    vars: new Map(),
    refs: new Map(),
  };
}

// ── Variablen-Resolver ─────────────────────────────────────────────────────────

/**
 * Löst einen GENUS_EXT-Wert auf.
 *
 * Werte:
 *   'msk'|'fem'|'neu'  → direkt (kein Kontext nötig)
 *   'var:Tier1'         → ctx.vars.get('Tier1').genus
 *
 * Fehler-Strategie (nach Zielmodell 7.4):
 *   Variable nicht registriert → { resolved: null, error: '...' }
 *   Caller entscheidet über Fallback (typisch: 'msk' + console.warn)
 *
 * @param {string} value
 * @param {RuntimeContext} ctx
 * @returns {{ resolved: string|null, error: string|null }}
 */
export function resolveGenusExt(value, ctx) {
  if (value === 'msk' || value === 'fem' || value === 'neu') {
    return { resolved: value, error: null };
  }

  if (value && value.startsWith('var:')) {
    const varName  = value.slice(4);
    const varEntry = ctx.vars.get(varName);
    if (!varEntry) {
      return {
        resolved: null,
        error: `Genus-Variable "${varName}" nicht im Laufzeitkontext. ` +
               `Stelle sicher, dass ein NOM:${varName}-Token VOR diesem Verweis steht.`,
      };
    }
    return { resolved: varEntry.genus, error: null };
  }

  return { resolved: null, error: `Unbekannter GENUS_EXT-Wert "${value}".` };
}

/**
 * Löst einen NUMERUS_EXT-Wert auf.
 *
 * Werte:
 *   'sgl'|'plu'         → direkt (kein Kontext nötig)
 *   'def:Gebirge1'      → ctx.vars.get('Gebirge1').numerus
 *
 * DEF-Variablen kommen aus Defektiva-Token (DEF:Gebirge1), die ihren inhärenten
 * Numerus beim Rendern im RuntimeContext registrieren.
 *
 * @param {string} value
 * @param {RuntimeContext} ctx
 * @returns {{ resolved: string|null, error: string|null }}
 */
export function resolveNumerusExt(value, ctx) {
  if (value === 'sgl' || value === 'plu') {
    return { resolved: value, error: null };
  }

  if (value && value.startsWith('def:')) {
    const varName  = value.slice(4);
    const varEntry = ctx.vars.get(varName);
    if (!varEntry) {
      return {
        resolved: null,
        error: `Defektiva-Variable "${varName}" nicht im Laufzeitkontext. ` +
               `Stelle sicher, dass ein DEF:${varName}-Token VOR diesem Verweis steht.`,
      };
    }
    return { resolved: varEntry.numerus, error: null };
  }

  return { resolved: null, error: `Unbekannter NUMERUS_EXT-Wert "${value}".` };
}

// ── Registrierungs-Helpers ─────────────────────────────────────────────────────

/**
 * Registriert eine aufgelöste NOM- oder DEF-Variable im RuntimeContext.
 *
 * Wird aufgerufen:
 *   - Von resolveNOM(): wenn ein NOM:Tier1-Token verarbeitet wird
 *   - Von resolveDEF(): wenn ein DEF:Gebirge1-Token verarbeitet wird
 *
 * @param {RuntimeContext} ctx
 * @param {string} varName    z.B. 'Tier1' oder 'Gebirge1'
 * @param {object} entry      { genus: string, numerus: string, lemma: string }
 */
export function registerVar(ctx, varName, entry) {
  ctx.vars.set(varName, {
    genus:   entry.genus   ?? 'msk',
    numerus: entry.numerus ?? 'sgl',
    lemma:   entry.lemma   ?? '',
  });
}

/**
 * Registriert eine NAM-Referenz im RuntimeContext.
 *
 * @param {RuntimeContext} ctx
 * @param {string} refName    z.B. 'Vorname1'
 * @param {object} entry      { genus: string, volk: string, region: string }
 */
export function registerRef(ctx, refName, entry) {
  ctx.refs.set(refName, entry);
}
