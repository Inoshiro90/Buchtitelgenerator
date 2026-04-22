/**
 * main.js — Application entry point.
 *
 * Load order:
 *   1. Traditional <script> tags in index.html load all leaf functions
 *      (declination, categories, name generators, description generators,
 *       title subsystem) into global scope.
 *   2. This module runs (deferred), imports from the architecture layer,
 *      and wires up the UI.
 *
 * The leaf functions are called as globals from within the module-layer files.
 * ES modules share the global lexical environment with traditional scripts,
 * so this is safe and standards-compliant.
 */

// State + UI infrastructure
import './ui/uiSetup.js';

// Filter checkbox bindings (side-effect imports — each file registers its own listeners)
import './book/getSelectedSetting.js';
import './book/getSelectedGenre.js';
import './book/getSelectedDescription.js';

// Action buttons (side-effect imports — each file registers its own listeners)
import './interface/buttonGenerate.js';
import './interface/buttonCopy.js';
import './interface/buttonClear.js';