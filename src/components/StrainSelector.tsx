// === StrainSelector.tsx ===
// Created: 2025-06-14
// Purpose: Allows user to select a strain and plant seeds
// Key Exports:
//   - StrainSelector
// Interactions:
//   - Used by: CultivationLab.tsx
// Notes:
//   - Modular, accessible, and ready for props/data injection

import React, { useState } from 'react';
import { Button } from './Button';

/**
 * StrainSelector - Selects strain and plants seeds
 * @returns React element
 */
export const StrainSelector: React.FC = () => {
  const [selected, setSelected] = useState('OG Kush');
  const canPlant = false; // Replace with logic for inventory/cash

  return (
    <section className="strain-selector" aria-label="Select Strain">
      <h3 className="strain-selector__title">Select Strain</h3>
      <select
        className="strain-selector__dropdown"
        value={selected}
        onChange={e => setSelected(e.target.value)}
        aria-label="Select strain"
      >
        <option value="OG Kush">OG Kush (~6% THC, 55 days)</option>
        {/* Add more strains as needed */}
      </select>
      <Button
        label="PLANT SEED ($20)"
        icon="fa-solid fa-seedling"
        onClick={() => {}}
        disabled={!canPlant}
        ariaLabel="Plant seed"
      />
      {!canPlant && (
        <div className="strain-selector__error" role="alert">
          Not enough cash or inventory full for seeds ($20)
        </div>
      )}
    </section>
  );
};

/**
 * Usage Example:
 * <StrainSelector />
 */

/**
 * OVERVIEW
 *
 * This file defines the StrainSelector component for selecting and planting strains.
 * It is modular, accessible, and ready for future data injection.
 *
 * Edge Cases:
 * - If canPlant is false, disables button and shows error
 *
 * Future Improvements:
 * - Accept props for dynamic strains and state
 * - Add loading/feedback for planting
 */

/*
 * === StrainSelector.tsx ===
 * Updated: 2025-06-14
 * Summary: Strain selection and seed planting panel
 * Key Components:
 *   - StrainSelector: Main export
 * Dependencies:
 *   - Button
 * Version History:
 *   v1.0 - Initial release
 * Notes:
 *   - Extend for more strains as needed
 */
