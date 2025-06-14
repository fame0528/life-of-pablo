// === ActivePlants.tsx ===
// Created: 2025-06-14
// Purpose: Displays active plants and empty state message
// Key Exports:
//   - ActivePlants
// Interactions:
//   - Used by: CultivationLab.tsx
// Notes:
//   - Modular, accessible, and ready for props/data injection

import React from 'react';

/**
 * ActivePlants - Shows active plants or empty state
 * @returns React element
 */
export const ActivePlants: React.FC = () => (
  <section className="active-plants" aria-label="Active Plants">
    <h3 className="active-plants__title">Active Plants (0)</h3>
    <div className="active-plants__empty">
      <i className="fa-solid fa-seedling" style={{ color: '#00ff99', fontSize: 32 }} aria-hidden="true" />
      <div>No plants growing. Plant some seeds to get started!</div>
      <div className="active-plants__hint">Make sure you have pots, soil, and lights before planting.</div>
    </div>
  </section>
);

/**
 * Usage Example:
 * <ActivePlants />
 */

/**
 * OVERVIEW
 *
 * This file defines the ActivePlants component for displaying active plants or an empty state.
 * It is modular, accessible, and ready for future data injection.
 *
 * Edge Cases:
 * - If no plants, shows empty state
 *
 * Future Improvements:
 * - Accept props for dynamic plant data
 * - Add plant cards for each active plant
 */

/*
 * === ActivePlants.tsx ===
 * Updated: 2025-06-14
 * Summary: Active plants display and empty state
 * Key Components:
 *   - ActivePlants: Main export
 * Dependencies:
 *   - Font Awesome 6 Free (CSS)
 * Version History:
 *   v1.0 - Initial release
 * Notes:
 *   - Extend for more plant features as needed
 */
