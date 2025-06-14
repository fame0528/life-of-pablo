// === EnvironmentPanel.tsx ===
// Created: 2025-06-14
// Purpose: Displays grow room environment stats (temp, humidity, CO2, capacity)
// Key Exports:
//   - EnvironmentPanel
// Interactions:
//   - Used by: CultivationLab.tsx
// Notes:
//   - Modular, accessible, and ready for props/data injection

import React from 'react';

/**
 * EnvironmentPanel - Shows grow room environment stats
 * @returns React element
 */
export const EnvironmentPanel: React.FC = () => (
  <section className="env-panel" aria-label="Grow Room Environment">
    <h3 className="env-panel__title">Grow Room Environment</h3>
    <div className="env-panel__stats">
      <div className="env-panel__stat">
        <span>Temperature</span>
        <span className="env-panel__value">22°C</span>
      </div>
      <div className="env-panel__stat">
        <span>Humidity</span>
        <span className="env-panel__value">60%</span>
      </div>
      <div className="env-panel__stat">
        <span>CO₂ Level</span>
        <span className="env-panel__value">400 ppm</span>
      </div>
      <div className="env-panel__stat">
        <span>Plant Capacity</span>
        <span className="env-panel__value">0/4</span>
      </div>
    </div>
  </section>
);

/**
 * Usage Example:
 * <EnvironmentPanel />
 */

/**
 * OVERVIEW
 *
 * This file defines the EnvironmentPanel component for displaying grow room stats.
 * It is modular, accessible, and ready for future data injection.
 *
 * Edge Cases:
 * - If no data, shows default values
 *
 * Future Improvements:
 * - Accept props for dynamic data
 * - Add warning indicators for out-of-range values
 */

/*
 * === EnvironmentPanel.tsx ===
 * Updated: 2025-06-14
 * Summary: Grow room environment stats panel
 * Key Components:
 *   - EnvironmentPanel: Main export
 * Dependencies:
 *   - None
 * Version History:
 *   v1.0 - Initial release
 * Notes:
 *   - Extend for more stats as needed
 */
