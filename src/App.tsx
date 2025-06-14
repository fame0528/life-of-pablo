// === App.tsx ===
// Created: 2025-06-14
// Purpose: Main app entry, composes layout using modular components
// Key Exports:
//   - App (default)
// Interactions:
//   - Used by: main.tsx
// Notes:
//   - Wraps app in ThemeProvider for theming

import './App.css';
import './components/theme.css';
import { ThemeProvider } from './components/ThemeContext';
import { TopBar, Sidebar } from './components';
import React from 'react';
import * as Pages from './pages';
import type { Stats } from './types/Stats';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faBars } from '@fortawesome/free-solid-svg-icons';

const sidebarSections = [
	{
		label: 'Game',
		icon: 'fa-solid fa-gamepad',
		items: [
			{ label: 'Overview', icon: 'fa-solid fa-table-cells-large', onClick: () => {}, active: true },
			{ label: 'City Map', icon: 'fa-solid fa-map', onClick: () => {} },
			{ label: 'Market', icon: 'fa-solid fa-store', onClick: () => {} },
			{ label: 'Inventory', icon: 'fa-solid fa-boxes-stacked', onClick: () => {} },
		],
	},
	{
		label: 'Business',
		icon: 'fa-solid fa-briefcase',
		items: [
			{ label: 'Properties', icon: 'fa-solid fa-building', onClick: () => {} },
			{ label: 'Vehicles', icon: 'fa-solid fa-car', onClick: () => {} },
			{ label: 'Lab', icon: 'fa-solid fa-flask', onClick: () => {} },
			{ label: 'Research', icon: 'fa-solid fa-microscope', onClick: () => {} },
			{ label: 'Growing', icon: 'fa-solid fa-seedling', onClick: () => {} },
		],
	},
	{
		label: 'Social',
		icon: 'fa-solid fa-users',
		items: [
			{ label: 'Gang', icon: 'fa-solid fa-people-group', onClick: () => {} },
			{ label: 'Stats', icon: 'fa-solid fa-chart-line', onClick: () => {} },
			{ label: 'Achievements', icon: 'fa-solid fa-trophy', onClick: () => {} },
		],
	},
	{
		label: 'System',
		icon: 'fa-solid fa-gear',
		items: [
			{ label: 'Admin Panel', icon: 'fa-solid fa-user-shield', onClick: () => {} },
			{ label: 'Settings', icon: 'fa-solid fa-sliders', onClick: () => {} },
		],
	},
];

// Provide stats in the new grouped format for Sidebar
const sidebarStats: Stats[] = [
	{ label: 'Time', value: '12:11 PM' },
	{ label: 'Level', value: 1 },
	{ label: 'Reputation', value: 'Nobody' },
	{ label: 'Cash', value: '$1,500.00', highlight: true },
	{ label: 'Net Worth', value: '$2,500.00', highlight: true },
	{ label: 'Properties', value: 0 },
	{ label: 'Vehicles', value: 0 },
];

function App() {
	const [activePage, setActivePage] = React.useState('Overview');
	const [collapsed, setCollapsed] = React.useState(false);

	const handleSidebarNav = (label: string) => {
		setActivePage(label);
	};

	const handleSignOut = () => {
		// TODO: Implement sign out logic
	};

	const PageComponent = Pages[activePage as keyof typeof Pages] || (() => <div>Page not found</div>);

	return (
		<ThemeProvider>
			<div className="app-layout">
				{!collapsed && (
					<Sidebar
						sections={sidebarSections}
						stats={sidebarStats}
						version="v1.0.0 - Beta"
						developer="Developed by FAME"
						activePage={activePage}
						onNavigate={handleSidebarNav}
					/>
				)}
				<main className="main-content">
					<div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 18, marginBottom: 18 }}>
						<button
							className="sidebar-2025__collapse-btn sidebar-2025__collapse-btn--inline"
							aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
							onClick={() => setCollapsed(c => !c)}
							style={{
								background: '#181f25',
								border: '1px solid #00e6ff',
								borderRadius: 6,
								color: '#00e6ff',
								fontSize: 18,
								width: 28,
								height: 28,
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								boxShadow: '0 1px 4px #000a',
								cursor: 'pointer',
							}}
						>
							<FontAwesomeIcon icon={collapsed ? faBars : faChevronLeft} />
						</button>
						<span style={{ fontSize: 22, fontWeight: 700, color: '#00e6ff', fontFamily: 'Tahoma, Geneva, Verdana, sans-serif', letterSpacing: 0.5 }}>{activePage}</span>
					</div>
					<TopBar userEmail="spencerhowell84@gmail.com" onSignOut={handleSignOut} />
					<PageComponent />
				</main>
			</div>
		</ThemeProvider>
	);
}

export default App;

/**
 * OVERVIEW
 *
 * App root component. Passes typed navigation sections and stats array to Sidebar for robust scaffolding.
 * Designed for future Supabase integration and strict type safety.
 *
 * Edge Cases:
 * - If stats or sections are empty, Sidebar displays fallback UI.
 *
 * Future Improvements:
 * - Replace placeholder stats and navigation with live Supabase data.
 */

/*
 * === App.tsx ===
 * Updated: 2025-06-14
 * Summary: App root with Sidebar receiving placeholder stats. Ready for Supabase integration.
 * Key Components:
 *   - App: Main application entry
 * Dependencies:
 *   - Sidebar
 * Version History:
 *   v1.0 - Initial release
 *   v1.1 - Passes placeholder stats to Sidebar
 * Notes:
 *   - All data will be Supabase-backed
 */
