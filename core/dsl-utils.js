'use strict';

/**
 * dsl-utils.js — Geteilte DSL-Hilfsfunktionen (Phase 8)
 *
 * HERKUNFT: Extrahiert aus core/engine.js.
 *
 * INHALT:
 *   - norm()            — Unicode-NFC-Normalisierung
 *   - normalizeGenus()  — CSV-Genus → internes 3-Buchstaben-Format
 *   - normalizeFlag()   — Tipp-Fehler-tolerante Flag-Normalisierung
 *   - _isVariable()     — Erkennt Legacy-Variablen-Schlüssel (Tier1, Held2)
 *   - VALID_FLAG_SETS   — Alle Flag-Mengen für Parser-Dispatching
 *
 * WARUM EIN EIGENES MODUL:
 *   norm() und normalizeGenus() werden von engine.js, noun-declension.js
 *   und potenziell von zukünftigen dsl-core-Paketen benötigt.
 *   Die Flag-Mengen (_NUM, _KAS, …) sind Parser-Konstanten — keine
 *   Rendering-Logik — und gehören nicht in die Render-Engine.
 *
 * EDITOR-KOMPATIBILITÄT:
 *   Alle Exports sind reine Daten und Funktionen ohne Seiteneffekte.
 *   Direkt importierbar im Editor ohne Anpassung.
 *
 * @module dsl-utils
 */

// ── Unicode-Normalisierung ─────────────────────────────────────────────────────

/**
 * Normalisiert einen String auf Unicode-NFC.
 * Gibt non-strings unverändert zurück.
 */
export function norm(str) {
  return typeof str === 'string' ? str.normalize('NFC') : str;
}

// ── Genus-Normalisierung ───────────────────────────────────────────────────────

/**
 * Normalisiert CSV-Genus-Strings auf das interne 3-Buchstaben-Format.
 *
 * Akzeptiert: 'maskulinum'|'msk'|'m' → 'msk'
 *             'femininum'|'fem'|'f'   → 'fem'
 *             'neutrum'|'neu'|'n'     → 'neu'
 * Fallback:   'msk' (mit implizitem console.warn in Entwicklungsumgebungen)
 */
export function normalizeGenus(genus) {
  if (!genus) return 'msk';
  switch (genus.toLowerCase()) {
    case 'maskulinum': case 'msk': case 'm': return 'msk';
    case 'femininum':  case 'fem': case 'f': return 'fem';
    case 'neutrum':    case 'neu': case 'n': return 'neu';
    default:                                 return 'msk';
  }
}

// ── Flag-Normalisierung ────────────────────────────────────────────────────────

/**
 * Tipp-Fehler-tolerante Flag-Normalisierung.
 *
 * Häufige Fehler in Template-Authoring ('slg' statt 'sgl', 'singular' statt 'sgl')
 * werden auf die kanonische Form abgebildet.
 * Variablen-Schlüssel (Tier1, Held2) werden unverändert durchgereicht.
 */
export const FLAG_MAP = Object.freeze({
  slg: 'sgl', sng: 'sgl', sing: 'sgl', singular: 'sgl',
  pl: 'plu', pull: 'plu', plural: 'plu', pluural: 'plu',
  nominativ: 'nom',
  genitiv:   'gen',
  dativ:     'dat',
  akkusativ: 'akk',
  m: 'msk', maskulin: 'msk', maskulinum: 'msk',
  f: 'fem', feminin:  'fem', femininum:  'fem',
  n: 'neu', neutrum:  'neu',
});

/**
 * Pattern für Legacy-Variablen-Schlüssel: Tier1, Held2, Gebirge3
 * (Großbuchstabe + 1+ Buchstaben + Ziffer)
 *
 * UNTERSCHIED zu VAR_PATTERN aus slot-schema.js ('var:Tier1'):
 *   _VARIABLE_PATTERN matcht den reinen Key (ohne 'var:'-Präfix).
 *   Wird für NOM/COM/NAM-Lemma-Lookup verwendet.
 */
export const VARIABLE_PATTERN = /^\p{Lu}\p{L}+[0-9]+$/u;

export function isVariable(f) {
  return VARIABLE_PATTERN.test(f);
}

export function normalizeFlag(flag) {
  if (isVariable(flag)) return flag;
  const mapped = FLAG_MAP[flag.toLowerCase()];
  return mapped !== undefined ? mapped : flag;
}

// ── Flag-Mengen für Parser-Dispatching ────────────────────────────────────────

/**
 * Alle Parser-relevanten Flag-Mengen.
 * Werden in parseNOMToken, parseCOMToken, parseADJToken etc. genutzt.
 */
export const NUM  = new Set(['sgl', 'plu']);
export const KAS  = new Set(['nom', 'gen', 'dat', 'akk']);
// Phase 9: 'indef' ergänzt — Editor F_ARTIKEL enthält ['def','ind','indef','neg','-']
// 'indef' ist ein veralteter Alias für 'ind' (unbestimmter Artikel), aber Editor-
// generierte Tokens mit 'indef' wurden vorher stumm ignoriert.
export const ART  = new Set(['def', 'ind', 'indef', 'neg', '-']);
export const GEN  = new Set(['msk', 'fem', 'neu']);
export const PER  = new Set(['p1', 'p2', 'p3', 'p2form']);
export const STE  = new Set(['pos', 'kom', 'sup']);
export const META = new Set(['tags', 'genus']);

export const DEM_PRO  = new Set(['dieser', 'jener', 'derjenige', 'derselbe']);
export const DEM_ART  = new Set(['dieser', 'jener', 'jeder', 'mancher', 'solcher']);
export const QUANT    = new Set([
  'alle', 'beide', 'einige', 'manche', 'viele', 'wenige',
  'jeder', 'jemand', 'niemand',
]);
