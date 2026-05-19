'use strict';

/**
 * dsl-tokenizer.js — Vereinheitlichter DSL-Tokenizer (Phase 1)
 *
 * HERKUNFT: Portiert aus editor/scripts/services/dsl-validator.js (tokenize())
 *
 * WARUM EIN EIGENES MODUL (statt inline in engine.js):
 *   Der Tokenizer ist die einzige Komponente, die Generator und Editor 1:1
 *   teilen MÜSSEN. Eine Kopie wäre ein Wartungs-Albtraum: jede DSL-Syntax-
 *   erweiterung (z.B. neues Modifier-Zeichen) müsste in zwei Codebases
 *   synchron gehalten werden.
 *
 *   Durch Extraktion in dieses Modul kann der Generator es importieren, und
 *   sobald beide Projekte ein gemeinsames dsl-core-Paket haben (Phase 5+),
 *   ist dies die einzige Stelle, die bewegt werden muss.
 *
 * UNTERSCHIEDE ZUM ALTEN GENERATOR-TOKENIZER (core/engine.js, tokenize()):
 *
 *   ALT:  {type:'literal', text:'...'}
 *   NEU:  {type:'literal', text:'...', start:N, end:N}
 *
 *   ALT:  unclosed → stillschweigend als Literal behandelt
 *   NEU:  {type:'unclosed', text:'...', start:N, end:N}
 *
 *   ALT:  {type:'token', raw:'...', mod:null}
 *   NEU:  {type:'token', raw:'...', mod:null, start:N, end:N}
 *
 * WARUM start/end NOTWENDIG SIND:
 *   - Fehlermeldungen mit Positionsangaben (kommt in Phase 2-Validierung)
 *   - Syntaxhighlighting (Editor — wird nicht im Generator genutzt, aber
 *     die Architektur erfordert Kompatibilität)
 *   - Zukünftige token-migrator.js-Integration (Phase 3+)
 *
 * @module dsl-tokenizer
 */

/**
 * Tokenisiert einen DSL-Template-String in eine Sequenz von Token-Objekten.
 *
 * Token-Typen:
 *
 *   { type: 'literal', text: string, start: number, end: number }
 *     → Rohtext zwischen DSL-Token
 *
 *   { type: 'token', raw: string, mod: string|null, start: number, end: number }
 *     → DSL-Token: raw ist der Inhalt zwischen { und }, mod ist '^' oder '_'
 *
 *   { type: 'unclosed', text: string, start: number, end: number }
 *     → Nicht geschlossene Klammer ab Position start
 *     → Wird NICHT stillschweigend als Literal behandelt
 *     → Erzeugt einen diagnostizierbaren Fehler in der Validierungsschicht
 *
 * @param {string} template - DSL-Template-String
 * @returns {Array<{type: string, text?: string, raw?: string, mod?: string|null, start: number, end: number}>}
 */
export function tokenize(template) {
  const result = [];
  let i = 0;

  while (i < template.length) {
    if (template[i] === '{') {
      const start = i;
      const end   = template.indexOf('}', i);

      // Unclosed: kein schließendes } gefunden
      // KRITISCH: nicht als Literal durchlassen — explizite Diagnose ist Pflicht
      if (end === -1) {
        result.push({
          type:  'unclosed',
          text:  template.slice(i),
          start: i,
          end:   template.length,
        });
        break;
      }

      const raw  = template.slice(i + 1, end);
      let mod  = null;
      let next = end + 1;

      // Modifier: ^ (capitalize first letter) oder _ (lowercase)
      if (template[next] === '^' || template[next] === '_') {
        mod  = template[next];
        next++;
      }

      result.push({ type: 'token', raw, mod, start, end: next });
      i = next;

    } else {
      // Literal-Segment bis zum nächsten '{' (oder Ende)
      const nb     = template.indexOf('{', i);
      const endPos = nb === -1 ? template.length : nb;

      result.push({
        type:  'literal',
        text:  template.slice(i, endPos),
        start: i,
        end:   endPos,
      });
      i = endPos;
    }
  }

  return result;
}
