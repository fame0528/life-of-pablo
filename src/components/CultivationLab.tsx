// === CultivationLab.tsx ===
// Created: 2025-06-14
// Purpose: Main panel for the Cultivation Lab, modular and accessible
// Key Exports:
//   - CultivationLab
// Interactions:
//   - Used by: App.tsx (main content)
// Notes:
//   - Composes EnvironmentPanel, EquipmentPanel, StrainSelector, ActivePlants

import React from 'react';
import { EnvironmentPanel } from './EnvironmentPanel';
import { EquipmentPanel } from './EquipmentPanel';
import { StrainSelector } from './StrainSelector';
import { ActivePlants } from './ActivePlants';
import './CultivationLab.css';

export interface CultivationLabProps {
  // Add props as needed for state management
}

/**
 * CultivationLab - Main cultivation lab panel
 * @returns React element
 */
export const CultivationLab: React.FC<CultivationLabProps> = () => (
  <section className="cultivation-lab" aria-label="Cultivation Lab">
    <h2 className="cultivation-lab__title">CULTIVATION LAB</h2>
    <EnvironmentPanel />
    <EquipmentPanel />
    <StrainSelector />
    <ActivePlants />
  </section>
);

/**
 * Usage Example:
 * <CultivationLab />
 */

/**
 * OVERVIEW
 *
 * This file defines the CultivationLab component, which composes the main lab UI.
 * It is modular, accessible, and uses subcomponents for each section.
 *
 * Edge Cases:
 * - If subcomponents have no data, they display empty states
 *
 * Future Improvements:
 * - Add props for state/data injection
 */

/*
 * === CultivationLab.tsx ===
 * Updated: 2025-06-14
 * Summary: Main panel for Cultivation Lab, modular and accessible
 * Key Components:
 *   - CultivationLab: Main export
 * Dependencies:
 *   - EnvironmentPanel, EquipmentPanel, StrainSelector, ActivePlants
 * Version History:
 *   v1.0 - Initial release
 * Notes:
 *   - Extend for more lab features as needed
 */
