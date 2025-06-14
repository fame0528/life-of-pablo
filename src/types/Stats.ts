// === Stats.ts ===
// Created: 2025-06-14
// Purpose: Defines the Stats interface for sidebar and app-wide stat displays
// Key Exports:
//   - export interface Stats
// Interactions:
//   - Used by: Sidebar.tsx, App.tsx, and any component displaying stats
// Notes:
//   - Extend this interface as new stat fields are needed

/**
 * Stats
 *
 * Represents a single stat to be displayed in the sidebar or dashboard.
 * Extend this interface as needed for new stat types.
 *
 * @property label - The display label for the stat
 * @property value - The value to display (string or number)
 * @property unit - (Optional) Unit of measurement (e.g., 'ppm', '%')
 * @property highlight - (Optional) Whether to visually highlight this stat
 */
export interface Stats {
  label: string;
  value: string | number;
  unit?: string;
  highlight?: boolean;
}

/**
 * OVERVIEW
 *
 * This file defines the Stats interface for use throughout the application.
 * It is intended to provide a single source of truth for stat objects passed
 * to the Sidebar and other stat display components. The interface is designed
 * to be extensible and type-safe, supporting future stat types and UI needs.
 *
 * Edge Cases:
 * - If a stat is missing a label or value, it should not be rendered.
 * - The 'unit' and 'highlight' fields are optional for flexibility.
 *
 * Future Improvements:
 * - Add enums for stat categories or types if needed.
 * - Add runtime type guards for dynamic data sources.
 */

/*
 * === Stats.ts ===
 * Updated: 2025-06-14
 * Summary: Defines the Stats interface for sidebar and stat displays.
 * Key Components:
 *   - Stats: TypeScript interface for stat objects
 * Dependencies:
 *   - None
 * Version History:
 *   v1.0 - Initial release
 * Notes:
 *   - Extend as new stat fields are required
 */
