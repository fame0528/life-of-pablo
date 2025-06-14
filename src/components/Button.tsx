// === Button.tsx ===
// Created: 2025-06-14
// Purpose: Reusable, accessible button component with theming and icon support
// Key Exports:
//   - Button
// Interactions:
//   - Used by: All UI for consistent button styles
// Notes:
//   - Supports Font Awesome icons and ARIA labels

import React from 'react';
import './Button.css';

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  icon?: string; // Font Awesome class, e.g. 'fa-solid fa-seedling'
  disabled?: boolean;
  ariaLabel?: string;
  type?: 'button' | 'submit' | 'reset';
}

/**
 * Button - A reusable, accessible button component
 * @param label - Button text
 * @param onClick - Click handler
 * @param icon - Font Awesome icon class
 * @param disabled - Disabled state
 * @param ariaLabel - ARIA label for accessibility
 * @param type - Button type
 * @returns React element
 */
export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  icon,
  disabled = false,
  ariaLabel,
  type = 'button',
}) => (
  <button
    className="custom-btn"
    onClick={onClick}
    disabled={disabled}
    aria-label={ariaLabel || label}
    type={type}
  >
    {icon && <i className={icon} aria-hidden="true" style={{ marginRight: 8 }} />}
    {label}
  </button>
);

/**
 * Usage Example:
 * <Button label="Plant Seed" icon="fa-solid fa-seedling" onClick={handlePlant} />
 */

/**
 * OVERVIEW
 *
 * This file defines a reusable Button component for consistent UI buttons.
 * It supports Font Awesome icons, ARIA accessibility, and theming.
 * Use this for all interactive button elements in the app.
 *
 * Edge Cases:
 * - If no label is provided, button will be empty (should always provide label)
 * - If icon is missing, only text is shown
 *
 * Future Improvements:
 * - Add loading state
 * - Add size/variant props
 */

/*
 * === Button.tsx ===
 * Updated: 2025-06-14
 * Summary: Reusable, accessible, themed button component
 * Key Components:
 *   - Button: Main export
 * Dependencies:
 *   - Font Awesome 6 Free (CSS)
 * Version History:
 *   v1.0 - Initial release
 * Notes:
 *   - Extend for more variants as needed
 */
