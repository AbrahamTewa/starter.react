/* eslint-disable import/no-extraneous-dependencies */
/* eslint-env node */

// ============================================================
// Import packages
import { configure } from '@storybook/react';

// ============================================================
// Functions
function loadStories() {
    // eslint-disable-next-line global-require,import/no-internal-modules
    require('../src/__stories__');
}

configure(loadStories, module);
