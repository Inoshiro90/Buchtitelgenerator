/**
 * declension-table.js
 *
 * Complete German noun declension logic as a single data table.
 * Replaces 144 individual leaf files spread across
 * declination/singular/ and declination/plural/.
 *
 * Public API (global functions, backward-compatible):
 *   declineNounSingular(kasus, attribute, noun, genus, rule, pattern)
 *   declineNounPlural(kasus, attribute, noun, genus, rule, pattern)
 *
 * Patterns used:
 *   Strong:  S1–S6
 *   Weak:    W1–W2
 *   Mixed:   W3–W4
 *   Special: fremdWort, eigenname
 *
 * Rule values:
 *   starkeDeklination | schwacheDeklination | gemischteDeklination
 *   substantiviertesAdjektiv | fremdWort | eigenname
 */

// ─── Helpers ────────────────────────────────────────────────────────────────

function _endsWithE(n)   { return n.endsWith('e'); }
function _endsWithN(n)   { return n.endsWith('n'); }
function _endsWithSXZ(n) { return /[sxzß]$/.test(n); }

function _weakSuffix(n)  { return _endsWithE(n) ? n + 'n' : n + 'en'; }

// ─── Declension Table ────────────────────────────────────────────────────────
//
// Structure: TABLE[numerus][kasus][genus][rule][pattern] → transform(noun)
//
// 'IDENTITY' means return noun unchanged (most common case)
// Functions are stored for the non-trivial cases

const _IDENTITY = n => n;
const _IDENTITY_TABLE = {
  S1: _IDENTITY, S2: _IDENTITY, S3: _IDENTITY,
  S4: _IDENTITY, S5: _IDENTITY, S6: _IDENTITY,
  W1: _IDENTITY, W2: _IDENTITY,
  W3: _IDENTITY, W4: _IDENTITY,
  fremdWort: _IDENTITY, eigenname: _IDENTITY,
};

// All entries default to identity; we only override where different.
const DECLENSION_TABLE = {

  singular: {

    nominativ: {
      maskulinum: {
        starkeDeklination:        { S1:_IDENTITY, S2:_IDENTITY, S4:_IDENTITY, S5:_IDENTITY, S6:_IDENTITY },
        schwacheDeklination:      { W1:_IDENTITY },
        gemischteDeklination:     { W3:_IDENTITY, W4:_IDENTITY },
        fremdWort:                { fremdWort:_IDENTITY },
        eigenname:                { eigenname:_IDENTITY },
      },
      femininum: {
        starkeDeklination:        { S1:_IDENTITY, S2:_IDENTITY, S3:_IDENTITY, S4:_IDENTITY, S5:_IDENTITY, S6:_IDENTITY },
        schwacheDeklination:      { W1:_IDENTITY, W2:_IDENTITY },
        fremdWort:                { fremdWort:_IDENTITY },
        eigenname:                { eigenname:_IDENTITY },
      },
      neutrum: {
        starkeDeklination:        { S1:_IDENTITY, S2:_IDENTITY, S4:_IDENTITY, S5:_IDENTITY, S6:_IDENTITY },
        gemischteDeklination:     { W3:_IDENTITY, W4:_IDENTITY },
        fremdWort:                { fremdWort:_IDENTITY },
        eigenname:                { eigenname:_IDENTITY },
      },
    },

    genitiv: {
      maskulinum: {
        starkeDeklination:        { S1:n=>n+'s', S2:n=>n+'s', S4:n=>n+'s', S5:n=>n+'s', S6:n=>n+'s' },
        schwacheDeklination:      { W1:_weakSuffix },
        gemischteDeklination:     {
          W3: n => _endsWithE(n) ? n+'s' : n+'es',
          W4: n => _endsWithE(n) ? n+'ns' : _endsWithN(n) ? n+'s' : n+'ens',
        },
        fremdWort:                { fremdWort: n => _endsWithSXZ(n) ? n : n+'s' },
        eigenname:                { eigenname: n => _endsWithSXZ(n) ? n+"'" : n+'s' },
      },
      femininum: {
        starkeDeklination:        { S3:_IDENTITY, S5:n=>n+'s' },
        schwacheDeklination:      { W1:_IDENTITY, W2:_IDENTITY },
        fremdWort:                { fremdWort:_IDENTITY },
        eigenname:                { eigenname: n => _endsWithSXZ(n) ? n+"'" : n+'s' },
      },
      neutrum: {
        starkeDeklination:        { S1:n=>n+'s', S2:n=>n+'s', S4:n=>n+'s', S5:n=>n+'s', S6:n=>n+'s' },
        schwacheDeklination:      { W1:_weakSuffix },
        gemischteDeklination:     {
          W3: n => _endsWithE(n) ? n+'s' : n+'es',
          W4: n => _endsWithE(n) ? n+'ns' : _endsWithN(n) ? n+'s' : n+'ens',
        },
        fremdWort:                { fremdWort: n => _endsWithSXZ(n) ? n : n+'s' },
        eigenname:                { eigenname: n => _endsWithSXZ(n) ? n+"'" : n+'s' },
      },
    },

    dativ: {
      maskulinum: {
        starkeDeklination:        { S1:_IDENTITY, S2:_IDENTITY, S4:_IDENTITY, S5:_IDENTITY, S6:_IDENTITY },
        schwacheDeklination:      { W1:_weakSuffix },
        gemischteDeklination:     {
          W3: _IDENTITY,
          W4: n => _endsWithE(n) ? n+'n' : _endsWithN(n) ? n : n+'en',
        },
        fremdWort:                { fremdWort:_IDENTITY },
        eigenname:                { eigenname:_IDENTITY },
      },
      femininum: {
        starkeDeklination:        { S1:_IDENTITY, S2:_IDENTITY, S3:_IDENTITY, S4:_IDENTITY, S5:_IDENTITY, S6:_IDENTITY },
        schwacheDeklination:      { W1:_IDENTITY, W2:_IDENTITY },
        fremdWort:                { fremdWort:_IDENTITY },
        eigenname:                { eigenname:_IDENTITY },
      },
      neutrum: {
        starkeDeklination:        { S1:_IDENTITY, S2:_IDENTITY, S4:_IDENTITY, S5:_IDENTITY, S6:_IDENTITY },
        schwacheDeklination:      { W1:_IDENTITY, W2:_IDENTITY },
        gemischteDeklination:     {
          W3: _IDENTITY,
          W4: n => _endsWithE(n) ? n+'n' : _endsWithN(n) ? n : n+'en',
        },
        fremdWort:                { fremdWort:_IDENTITY },
        eigenname:                { eigenname:_IDENTITY },
      },
    },

    akkusativ: {
      maskulinum: {
        starkeDeklination:        { S1:_IDENTITY, S2:_IDENTITY, S4:_IDENTITY, S5:_IDENTITY, S6:_IDENTITY },
        schwacheDeklination:      { W1:_weakSuffix },
        gemischteDeklination:     {
          W3: _IDENTITY,
          W4: n => _endsWithN(n) ? n : n+'n',
        },
        fremdWort:                { fremdWort:_IDENTITY },
        eigenname:                { eigenname:_IDENTITY },
      },
      femininum: {
        starkeDeklination:        { S1:_IDENTITY, S2:_IDENTITY, S3:_IDENTITY, S4:_IDENTITY, S5:_IDENTITY, S6:_IDENTITY },
        schwacheDeklination:      { W1:_IDENTITY, W2:_IDENTITY },
        fremdWort:                { fremdWort:_IDENTITY },
        eigenname:                { eigenname:_IDENTITY },
      },
      neutrum: {
        starkeDeklination:        { S1:_IDENTITY, S2:_IDENTITY, S4:_IDENTITY, S5:_IDENTITY, S6:_IDENTITY },
        schwacheDeklination:      { W1:_IDENTITY, W2:_IDENTITY },
        gemischteDeklination:     {
          W3: _IDENTITY,
          W4: n => _endsWithN(n) ? n : n+'n',
        },
        fremdWort:                { fremdWort:_IDENTITY },
        eigenname:                { eigenname:_IDENTITY },
      },
    },
  },

  plural: {

    nominativ: {
      maskulinum: {
        starkeDeklination:        { S1:_IDENTITY, S2:_IDENTITY, S4:_IDENTITY, S5:_IDENTITY, S6:_IDENTITY },
        schwacheDeklination:      { W1:_IDENTITY },
        gemischteDeklination:     { W3:_IDENTITY, W4:_IDENTITY },
        fremdWort:                { fremdWort:_IDENTITY },
        eigenname:                { eigenname:_IDENTITY },
      },
      femininum: {
        starkeDeklination:        { S1:_IDENTITY, S2:_IDENTITY, S3:_IDENTITY, S4:_IDENTITY, S5:_IDENTITY, S6:_IDENTITY },
        schwacheDeklination:      { W1:_IDENTITY, W2:_IDENTITY },
        fremdWort:                { fremdWort:_IDENTITY },
        eigenname:                { eigenname:_IDENTITY },
      },
      neutrum: {
        starkeDeklination:        { S1:_IDENTITY, S2:_IDENTITY, S4:_IDENTITY, S5:_IDENTITY, S6:_IDENTITY },
        gemischteDeklination:     { W3:_IDENTITY, W4:_IDENTITY },
        fremdWort:                { fremdWort:_IDENTITY },
        eigenname:                { eigenname:_IDENTITY },
      },
    },

    genitiv: {
      maskulinum: {
        starkeDeklination:        { S1:_IDENTITY, S2:_IDENTITY, S4:_IDENTITY, S5:_IDENTITY, S6:_IDENTITY },
        schwacheDeklination:      { W1:_IDENTITY, W2:_IDENTITY },
        gemischteDeklination:     { W3:_IDENTITY, W4:_IDENTITY },
        fremdWort:                { fremdWort:_IDENTITY },
        eigenname:                { eigenname:_IDENTITY },
      },
      femininum: {
        starkeDeklination:        { S1:_IDENTITY, S2:_IDENTITY, S3:_IDENTITY, S4:_IDENTITY, S5:_IDENTITY, S6:_IDENTITY },
        schwacheDeklination:      { W1:_IDENTITY, W2:_IDENTITY },
        fremdWort:                { fremdWort:_IDENTITY },
        eigenname:                { eigenname:_IDENTITY },
      },
      neutrum: {
        starkeDeklination:        { S1:_IDENTITY, S2:_IDENTITY, S4:_IDENTITY, S5:_IDENTITY, S6:_IDENTITY },
        gemischteDeklination:     { W3:_IDENTITY, W4:_IDENTITY },
        fremdWort:                { fremdWort:_IDENTITY },
        eigenname:                { eigenname:_IDENTITY },
      },
    },

    dativ: {
      maskulinum: {
        starkeDeklination:        { S1:n=>n+'n', S2:n=>n+'n', S4:n=>n+'n', S5:n=>n+'n', S6:n=>n+'n' },
        schwacheDeklination:      { W1:_IDENTITY, W2:_IDENTITY },
        gemischteDeklination:     { W3:_IDENTITY, W4:_IDENTITY },
        fremdWort:                { fremdWort:_IDENTITY },
        eigenname:                { eigenname:_IDENTITY },
      },
      femininum: {
        starkeDeklination:        { S3:n=>n+'n', S5:n=>n+'n' },
        schwacheDeklination:      { W1:_IDENTITY, W2:_IDENTITY },
        fremdWort:                { fremdWort:_IDENTITY },
        eigenname:                { eigenname:_IDENTITY },
      },
      neutrum: {
        starkeDeklination:        { S1:n=>n+'n', S2:n=>n+'n', S4:n=>n+'n', S5:n=>n+'n', S6:n=>n+'n' },
        schwacheDeklination:      { W1:_IDENTITY, W2:_IDENTITY },
        gemischteDeklination:     { W3:_IDENTITY, W4:_IDENTITY },
        fremdWort:                { fremdWort:_IDENTITY },
        eigenname:                { eigenname:_IDENTITY },
      },
    },

    akkusativ: {
      maskulinum: {
        starkeDeklination:        { S1:_IDENTITY, S2:_IDENTITY, S4:_IDENTITY, S5:_IDENTITY, S6:_IDENTITY },
        schwacheDeklination:      { W1:_IDENTITY, W2:_IDENTITY },
        gemischteDeklination:     { W3:_IDENTITY, W4:_IDENTITY },
        fremdWort:                { fremdWort:_IDENTITY },
        eigenname:                { eigenname:_IDENTITY },
      },
      femininum: {
        starkeDeklination:        { S1:_IDENTITY, S2:_IDENTITY, S3:_IDENTITY, S4:_IDENTITY, S5:_IDENTITY, S6:_IDENTITY },
        schwacheDeklination:      { W1:_IDENTITY, W2:_IDENTITY },
        fremdWort:                { fremdWort:_IDENTITY },
        eigenname:                { eigenname:_IDENTITY },
      },
      neutrum: {
        starkeDeklination:        { S1:_IDENTITY, S2:_IDENTITY, S3:_IDENTITY, S4:_IDENTITY, S5:_IDENTITY, S6:_IDENTITY },
        schwacheDeklination:      { W1:_IDENTITY, W2:_IDENTITY },
        gemischteDeklination:     { W3:_IDENTITY, W4:_IDENTITY },
        fremdWort:                { fremdWort:_IDENTITY },
        eigenname:                { eigenname:_IDENTITY },
      },
    },
  },
};

// ─── Public API ──────────────────────────────────────────────────────────────

/**
 * Declines a noun in singular.
 * Drop-in replacement for the entire singular/ subtree.
 */
function declineNounSingular(kasus, attribute, noun, genus, rule, pattern) {
    return _applyTable('singular', kasus, genus, rule, pattern, noun, attribute);
}

/**
 * Declines a noun in plural.
 * Drop-in replacement for the entire plural/ subtree.
 */
function declineNounPlural(kasus, attribute, noun, genus, rule, pattern) {
    return _applyTable('plural', kasus, genus, rule, pattern, noun, attribute);
}

function _applyTable(numerus, kasus, genus, rule, pattern, noun, attribute) {
    // substantiviertesAdjektiv delegates to declineAdjective (still defined elsewhere)
    if (rule === 'substantiviertesAdjektiv') {
        return declineAdjective(numerus, kasus, 'positiv', attribute, genus, noun);
    }

    const byKasus  = DECLENSION_TABLE[numerus]?.[kasus];
    const byGenus  = byKasus?.[genus];
    const byRule   = byGenus?.[rule];
    const transform = byRule?.[pattern];

    if (typeof transform === 'function') {
        return transform(noun);
    }

    console.error(`[declineNoun] Unbekannte Kombination: ${numerus} ${kasus} ${genus} ${rule} ${pattern}`);
    return noun;
}
