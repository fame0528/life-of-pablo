// === index.ts ===
// Created: 2025-06-14
// Purpose: Barrel file for all components in /components
// Key Exports:
//   - Button
//   - TopBar
//   - Sidebar
//   - ThemeProvider
//   - useTheme
// Interactions:
//   - Used by: App.tsx and other modules
// Notes:
//   - Add new components here for easy imports

export * from './Button';
export * from './TopBar';
export * from './Sidebar';
export * from './ThemeContext';

/**
 * OVERVIEW
 *
 * This file re-exports all components in the /components folder for easy importing.
 *
 * Edge Cases:
 * - If a new component is added, ensure it is exported here.
 *
 * Future Improvements:
 * - Automate barrel file generation
 */

/*
 * === index.ts ===
 * Updated: 2025-06-14
 * Summary: Barrel file for /components
 * Key Components:
 *   - All exports from /components
 * Dependencies:
 *   - All component files
 * Version History:
 *   v1.0 - Initial release
 * Notes:
 *   - Keep updated as new components are added
 */
