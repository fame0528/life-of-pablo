// === .storybook/preview.js ===
// Created: 2025-06-14
// Purpose: Storybook global decorators and parameters
// Key Exports:
//   - parameters
//   - decorators
// Interactions:
//   - Used by: Storybook runtime
// Notes:
//   - Imports global CSS for theming and icons

import '../src/index.css';
import '../src/components/theme.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  a11y: {
    // Accessibility config
    element: '#root',
    manual: false,
  },
};

/**
 * OVERVIEW
 *
 * This file sets up global styles and accessibility for Storybook.
 *
 * Edge Cases:
 * - If new global CSS is added, import here.
 *
 * Future Improvements:
 * - Add theme switching for stories
 */

/*
 * === .storybook/preview.js ===
 * Updated: 2025-06-14
 * Summary: Storybook global styles and a11y config
 * Key Components:
 *   - parameters
 * Dependencies:
 *   - Storybook, global CSS
 * Version History:
 *   v1.0 - Initial release
 * Notes:
 *   - Extend for more decorators as needed
 */
