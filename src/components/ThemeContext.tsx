// === ThemeContext.tsx ===
// Created: 2025-06-14
// Purpose: Provides a context for theme (dark/light) and CSS variable management
// Key Exports:
//   - ThemeProvider
//   - useTheme
// Interactions:
//   - Used by: All components for theme access
// Notes:
//   - Easily extendable for more themes

import React, { createContext, useContext, useState, ReactNode } from 'react';

/**
 * Theme type for supported themes
 */
export type Theme = 'dark' | 'light';

/**
 * Theme context value shape
 */
interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

/**
 * ThemeProvider wraps the app and provides theme state
 * @param children - React children
 */
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('dark');

  // Set CSS variables for theme
  React.useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.setAttribute('data-theme', 'light');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * useTheme hook for accessing theme context
 * @returns ThemeContextValue
 */
export const useTheme = (): ThemeContextValue => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
};

/**
 * OVERVIEW
 *
 * This file provides a React context for managing the application theme (dark/light).
 * It sets a data attribute on the root element for CSS variable theming.
 * All components can access and update the theme using the useTheme hook.
 *
 * Edge Cases:
 * - If used outside ThemeProvider, useTheme throws an error.
 *
 * Future Improvements:
 * - Add system theme detection
 * - Support more granular theme options
 */

/*
 * === ThemeContext.tsx ===
 * Updated: 2025-06-14
 * Summary: Provides theme context and hook for dark/light mode switching
 * Key Components:
 *   - ThemeProvider: Context provider
 *   - useTheme: Hook for theme access
 * Dependencies:
 *   - React
 * Version History:
 *   v1.0 - Initial release
 * Notes:
 *   - Extend for more themes as needed
 */
