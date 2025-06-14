// === .storybook/main.js ===
// Created: 2025-06-14
// Purpose: Storybook configuration for React + Vite + SWC + TypeScript
// Key Exports:
//   - Storybook config
// Interactions:
//   - Used by: Storybook CLI
// Notes:
//   - Adjust stories glob as needed

module.exports = {
  stories: [
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/stories/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  docs: {
    autodocs: true
  }
};

/**
 * OVERVIEW
 *
 * This file configures Storybook for the project, enabling component isolation and documentation.
 *
 * Edge Cases:
 * - If new component folders are added, update the stories glob.
 *
 * Future Improvements:
 * - Add custom webpack/vite config for advanced use cases
 */

/*
 * === .storybook/main.js ===
 * Updated: 2025-06-14
 * Summary: Storybook config for modular UI
 * Key Components:
 *   - Storybook config
 * Dependencies:
 *   - Storybook, Vite, React
 * Version History:
 *   v1.0 - Initial release
 * Notes:
 *   - Extend for more addons as needed
 */
