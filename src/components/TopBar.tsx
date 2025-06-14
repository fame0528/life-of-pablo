// === TopBar.tsx ===
// Created: 2025-06-14
// Purpose: Top navigation bar with user info, sign out, and app title
// Key Exports:
//   - TopBar
// Interactions:
//   - Used by: App.tsx (main layout)
// Notes:
//   - Uses Font Awesome icons for user and sign out

import React from 'react';
import './TopBar.css';
import { useTheme } from './ThemeContext';

export interface TopBarProps {
  userEmail: string;
  onSignOut: () => void;
}

/**
 * TopBar - Main app navigation bar
 * @param userEmail - User's email address
 * @param onSignOut - Sign out handler
 * @returns React element
 */
export const TopBar: React.FC<TopBarProps> = ({ userEmail, onSignOut }) => {
  const { theme, setTheme } = useTheme();
  return (
    <header className="topbar">
      {/* Remove the title/logo from the TopBar */}
      <div />
      <div className="topbar__right">
        <button
          className="topbar__theme-btn"
          aria-label="Toggle theme"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`} aria-hidden="true" />
        </button>
        <span className="topbar__user">
          <i className="fa-solid fa-user" aria-hidden="true" style={{ marginRight: 4 }} />
          {userEmail}
        </span>
        <button className="topbar__signout" onClick={onSignOut} aria-label="Sign Out">
          <i className="fa-solid fa-right-from-bracket" aria-hidden="true" /> Sign Out
        </button>
      </div>
    </header>
  );
};

/**
 * Usage Example:
 * <TopBar userEmail="user@example.com" onSignOut={handleSignOut} />
 */

/**
 * OVERVIEW
 *
 * This file defines the TopBar component for the app's main navigation.
 * It displays the app title, theme toggle, user info, and sign out button.
 * Uses Font Awesome icons and is fully accessible.
 *
 * Edge Cases:
 * - If userEmail is empty, only icon is shown
 *
 * Future Improvements:
 * - Add notifications or settings menu
 */

/*
 * === TopBar.tsx ===
 * Updated: 2025-06-14
 * Summary: Top navigation bar with theme toggle and user info
 * Key Components:
 *   - TopBar: Main export
 * Dependencies:
 *   - Font Awesome 6 Free (CSS), ThemeContext
 * Version History:
 *   v1.0 - Initial release
 * Notes:
 *   - Extend for more actions as needed
 */
