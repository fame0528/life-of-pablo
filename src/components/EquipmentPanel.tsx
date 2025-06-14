// === EquipmentPanel.tsx ===
// Created: 2025-06-14
// Purpose: Displays growing equipment status (pots, soil, lights, etc.)
// Key Exports:
//   - EquipmentPanel
// Interactions:
//   - Used by: CultivationLab.tsx
// Notes:
//   - Modular, accessible, and ready for props/data injection

import React from 'react';

/**
 * EquipmentPanel - Shows growing equipment status
 * @returns React element
 */
export const EquipmentPanel: React.FC = () => (
  <section className="equipment-panel" aria-label="Growing Equipment">
    <h3 className="equipment-panel__title">Growing Equipment</h3>
    <div className="equipment-panel__grid">
      <div className="equipment-panel__item">Growing Pots<br /><span>$50</span> <span className="owned">✓ Owned</span></div>
      <div className="equipment-panel__item">Premium Soil<br /><span>$25</span> <span className="owned">✓ Owned</span></div>
      <div className="equipment-panel__item">LED Lights<br /><span>$200</span> <span className="owned">✓ Owned</span></div>
      <div className="equipment-panel__item">Nutrients<br /><span>$75</span> <span className="owned">✓ Owned</span></div>
      <div className="equipment-panel__item">Auto Water<br /><span>$150</span> <span className="owned">✓ Owned</span></div>
      <div className="equipment-panel__item">Ventilation<br /><span>$120</span> <span className="owned">✓ Owned</span></div>
      <div className="equipment-panel__item">Humidifier<br /><span>$80</span> <span className="owned">✓ Owned</span></div>
      <div className="equipment-panel__item">CO₂ Generator<br /><span>$300</span> <span className="owned">✓ Owned</span></div>
    </div>
  </section>
);

/**
 * Usage Example:
 * <EquipmentPanel />
 */

/**
 * OVERVIEW
 *
 * This file defines the EquipmentPanel component for displaying growing equipment status.
 * It is modular, accessible, and ready for future data injection.
 *
 * Edge Cases:
 * - If no data, shows default values
 *
 * Future Improvements:
 * - Accept props for dynamic data
 * - Add icons for each equipment type
 */

/*
 * === EquipmentPanel.tsx ===
 * Updated: 2025-06-14
 * Summary: Growing equipment status panel
 * Key Components:
 *   - EquipmentPanel: Main export
 * Dependencies:
 *   - None
 * Version History:
 *   v1.0 - Initial release
 * Notes:
 *   - Extend for more equipment as needed
 */
