// === Sidebar.tsx ===
// Created: 2025-06-14
// Purpose: Sidebar navigation and stats panel, fully matching reference design
// Key Exports:
//   - Sidebar
// Interactions:
//   - Used by: App.tsx (main layout)
// Notes:
//   - Uses Font Awesome icons for navigation and stats

import React from 'react';
import './Sidebar.css';
import type { Stats } from '../types/Stats';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar as faStarRegular,
  faMoneyBill1 as faMoneyBillRegular,
  faBuilding as faBuildingRegular,
  faChartBar as faChartBarRegular,
  faMap as faMapRegular,
  faCircle as faCircleRegular
} from '@fortawesome/free-regular-svg-icons';
import {
  faCar,
  faBoxOpen,
  faMedal,
  faUserShield,
  faCrown,
  faBolt,
  faPiggyBank,
  faSeedling,
  faUsers,
  faCartShopping,
  faGear,
  faFlask,
  faVial,
  faHouse
} from '@fortawesome/free-solid-svg-icons';

export interface SidebarSection {
  label: string;
  icon: string;
  items: Array<{ label: string; icon: string; onClick: () => void; active?: boolean; }>;
}

export interface SidebarProps {
  sections?: SidebarSection[];
  stats?: Stats[];
  version?: string;
  developer?: string;
  activePage?: string;
  onNavigate?: (label: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  sections = [],
  stats = [],
  version = 'v1.0.0 - Beta',
  developer = 'Developed by FAME',
  activePage,
  onNavigate,
}) => {
  // Extract stats for new layout
  const timeStat = stats.find((s) => s.label === 'Time');
  const dateStat = stats.find((s) => s.label === 'Date');
  const now = new Date();
  const dateString = dateStat?.value || `${now.toLocaleString('en-US', { month: 'short' })} ${now.getDate()}, ${now.getFullYear()}`;
  const timeString = timeStat?.value || now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const levelStat = stats.find((s) => s.label === 'Level');
  const prestigeStat = stats.find((s) => s.label === 'Prestige');
  const reputationStat = stats.find((s) => s.label === 'Reputation');
  const xpStat = stats.find((s) => s.label === 'XP');
  const cashStat = stats.find((s) => s.label === 'Cash');
  const netWorthStat = stats.find((s) => s.label === 'Net Worth');
  const propertiesStat = stats.find((s) => s.label === 'Properties');
  const vehiclesStat = stats.find((s) => s.label === 'Vehicles');
  const inventoryStat = stats.find((s) => s.label === 'Inventory');

  // Group navigation sections for sidebar
  // Instead of filtering by label, flatten all items into their correct group
  const allItems = sections.flatMap(s => s.items.map(item => ({ ...item, section: s.label })));
  const groupedSections = [
    {
      label: 'Game',
      icon: 'fa-solid fa-gamepad',
      items: allItems.filter(item => ['Overview', 'City Map', 'Market', 'Inventory'].includes(item.label)),
    },
    {
      label: 'Business',
      icon: 'fa-solid fa-briefcase',
      items: allItems.filter(item => ['Properties', 'Vehicles', 'Lab', 'Research', 'Growing'].includes(item.label)),
    },
    {
      label: 'Social',
      icon: 'fa-solid fa-users',
      items: allItems.filter(item => ['Gang', 'Stats', 'Achievements'].includes(item.label)),
    },
    {
      label: 'System',
      icon: 'fa-solid fa-gear',
      items: allItems.filter(item => ['Admin Panel', 'Settings'].includes(item.label)),
    },
  ];

  // --- Render ---
  return (
    <>
      {/* Collapse/Expand button always at top right of sidebar, always visible */}
      <aside className="sidebar-2025 sidebar-2025--full sidebar-2025--bordered sidebar-2025--statsblock" style={{ position: 'relative' }}>
        {/* Restore the logo row at the top of the sidebar */}
        <div className="sidebar-2025__logo-block sidebar-2025__logo-block--fullwidth">
          <div className="sidebar-2025__logo-row" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <div className="sidebar-2025__logo sidebar-2025__logo--fullwidth" style={{ color: '#00e6ff', textAlign: 'center', fontFamily: 'Tahoma, Geneva, Verdana, sans-serif', fontWeight: 700, fontSize: 24, letterSpacing: 0.5, width: 'auto', padding: '0 0 0 0', display: 'inline-block' }}>LIFE OF PABLO</div>
          </div>
        </div>
        {/* Subtitle, time/date, and stats remain below the logo */}
        <div className="sidebar-2025__subtitle sidebar-2025__subtitle--centered sidebar-2025__subtitle--italic" style={{ marginTop: 2, marginBottom: 14, fontSize: 13, width: '100%', textAlign: 'center', color: '#fff' }}>
           <i>Plata o plomo.</i><span className="sidebar-2025__subtitle-escobar">-Escobar</span>
        </div>
        <div style={{ height: 8 }} />
        <div className="sidebar-2025__datetime-block sidebar-2025__datetime-block--underlined sidebar-2025__datetime-block--grouped" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
          <span className="sidebar-2025__datetime-value sidebar-2025__datetime-value--time" style={{ fontWeight: 'bold', fontSize: 14 }}>{timeString}</span>
          <span className="sidebar-2025__datetime-value sidebar-2025__datetime-value--date" style={{ fontWeight: 'bold', fontSize: 13 }}>{dateString}</span>
        </div>
        {/* Add horizontal padding container for stats to match nav menu spacing */}
        <div style={{ paddingLeft: 10, paddingRight: 10 }}>
          <div className="sidebar-2025__stats-panel sidebar-2025__stats-panel--small">
            <div className="sidebar-2025__stats-row-group">
              <div className="sidebar-2025__stats-row sidebar-2025__stats-row--underlined">
                <span className="sidebar-2025__stat"><FontAwesomeIcon icon={faChartBarRegular} className="sidebar-2025__stat-icon sidebar-2025__stat-icon--yellow" />Level</span>
                <span className="sidebar-2025__stat-value sidebar-2025__stat-value--level">{levelStat ? levelStat.value : '0'}</span>
              </div>
              <div className="sidebar-2025__stats-row sidebar-2025__stats-row--underlined">
                <span className="sidebar-2025__stat"><FontAwesomeIcon icon={faCrown} className="sidebar-2025__stat-icon sidebar-2025__stat-icon--red" />Prestige</span>
                <span className="sidebar-2025__stat-value sidebar-2025__stat-value--prestige">{prestigeStat ? prestigeStat.value : '0'}</span>
              </div>
              <div className="sidebar-2025__stats-row sidebar-2025__stats-row--underlined">
                <span className="sidebar-2025__stat"><FontAwesomeIcon icon={faStarRegular} className="sidebar-2025__stat-icon sidebar-2025__stat-icon--cyan" />Reputation</span>
                <span className="sidebar-2025__stat-value sidebar-2025__stat-value--reputation">{reputationStat ? reputationStat.value : 'Nobody'}</span>
              </div>
              <div className="sidebar-2025__stats-row sidebar-2025__stats-row--underlined">
                <span className="sidebar-2025__stat"><FontAwesomeIcon icon={faBolt} className="sidebar-2025__stat-icon sidebar-2025__stat-icon--cyan" />XP</span>
                <span className="sidebar-2025__stat-value sidebar-2025__stat-value--xp">{xpStat ? xpStat.value : '0'}</span>
              </div>
            </div>
            <div className="sidebar-2025__stats-group-space" />
            <div className="sidebar-2025__stats-row-group">
              <div className="sidebar-2025__stats-row sidebar-2025__stats-row--underlined">
                <span className="sidebar-2025__stat"><FontAwesomeIcon icon={faMoneyBillRegular} className="sidebar-2025__stat-icon sidebar-2025__stat-icon--green" />Cash</span>
                <span className="sidebar-2025__stat-value sidebar-2025__stat-value--cash">{cashStat ? cashStat.value : '$0'}</span>
              </div>
              <div className="sidebar-2025__stats-row sidebar-2025__stats-row--underlined">
                <span className="sidebar-2025__stat"><FontAwesomeIcon icon={faPiggyBank} className="sidebar-2025__stat-icon sidebar-2025__stat-icon--green" />Net Worth</span>
                <span className="sidebar-2025__stat-value sidebar-2025__stat-value--networth">{netWorthStat ? netWorthStat.value : '$0'}</span>
              </div>
            </div>
            <div className="sidebar-2025__stats-group-space" />
            <div className="sidebar-2025__stats-row-group">
              <div className="sidebar-2025__stats-row sidebar-2025__stats-row--underlined">
                <span className="sidebar-2025__stat"><FontAwesomeIcon icon={faBuildingRegular} className="sidebar-2025__stat-icon" />Properties</span>
                <span className="sidebar-2025__stat-value sidebar-2025__stat-value--properties">{propertiesStat ? propertiesStat.value : '0'}</span>
              </div>
              <div className="sidebar-2025__stats-row sidebar-2025__stats-row--underlined">
                <span className="sidebar-2025__stat"><FontAwesomeIcon icon={faCar} className="sidebar-2025__stat-icon" />Vehicles</span>
                <span className="sidebar-2025__stat-value sidebar-2025__stat-value--vehicles">{vehiclesStat ? vehiclesStat.value : '0'}</span>
              </div>
              <div className="sidebar-2025__stats-row sidebar-2025__stats-row--underlined">
                <span className="sidebar-2025__stat"><FontAwesomeIcon icon={faBoxOpen} className="sidebar-2025__stat-icon" />Inventory</span>
                <span className="sidebar-2025__stat-value sidebar-2025__stat-value--inventory">{inventoryStat ? inventoryStat.value : '0'}</span>
              </div>
            </div>
          </div>
        </div>
        {/* Navigation Sections - Tabs fill sidebar, grouped, no bullets, compact, correct icons */}
        <nav className="sidebar-2025__nav sidebar-2025__nav--fill">
          {groupedSections.map((section, idx) => (
            <div key={section.label} className="sidebar-2025__section sidebar-2025__section--no-border">
              <div className="sidebar-2025__section-label sidebar-2025__section-label--cyan">
                {section.label}
              </div>
              <ul className="sidebar-2025__section-items sidebar-2025__section-items--fill" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {section.items.map((item) => (
                  <li key={item.label} style={{ width: '100%' }}>
                    <button
                      className={`sidebar-2025__nav-btn sidebar-2025__nav-btn--fill${activePage === item.label ? ' sidebar-2025__nav-button--active' : ''}`}
                      onClick={() => onNavigate && onNavigate(item.label)}
                      aria-current={activePage === item.label ? 'page' : undefined}
                      style={{ paddingLeft: 16, paddingRight: 16, backgroundColor: 'transparent' }}
                    >
                      <FontAwesomeIcon icon={getNavIcon(item.label)} style={{ marginRight: 8, minWidth: 18, textAlign: 'center' }} />
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
              {/* Add space between groups except last */}
              {idx < groupedSections.length - 1 && <div className="sidebar-2025__nav-group-space" />}
            </div>
          ))}
        </nav>
        {/* Footer - Centered, smaller */}
        <footer className="sidebar-2025__footer sidebar-2025__footer--centered sidebar-2025__footer--bottom">
          <div className="sidebar-2025__version">{version}</div>
          <div className="sidebar-2025__developer">{developer}</div>
        </footer>
      </aside>
    </>
  );
};

/**
 * OVERVIEW
 *
 * Sidebar2025 component: fully re-implemented to match the intended design.
 * Features a top stats panel, navigation grouped by section, close button, and footer.
 * All layout, color, border, and alignment details are matched to the provided reference.
 *
 * Edge Cases:
 * - If stats are missing, shows fallback message.
 * - If no navigation sections, only stats and footer are shown.
 *
 * Future Improvements:
 * - Add animation for open/close.
 * - Make stats panel dynamic with live data.
 */

/*
 * === Sidebar.tsx ===
 * Updated: 2025-06-14
 * Summary: Sidebar component with optional stats prop and fallback UI for empty stats.
 * Key Components:
 *   - Sidebar: Main sidebar UI
 * Dependencies:
 *   - React
 * Version History:
 *   v1.0 - Initial release
 *   v1.1 - Made stats prop optional, added fallback UI
 * Notes:
 *   - Designed for Supabase data integration
 */

// Helper for nav icons
function getNavIcon(label: string) {
  switch (label) {
    case 'Overview': return faHouse;
    case 'City Map': return faMapRegular;
    case 'Market': return faCartShopping;
    case 'Inventory': return faBoxOpen;
    case 'Properties': return faBuildingRegular;
    case 'Vehicles': return faCar;
    case 'Lab': return faFlask;
    case 'Research': return faVial;
    case 'Growing': return faSeedling;
    case 'Gang': return faUsers;
    case 'Stats': return faChartBarRegular;
    case 'Achievements': return faMedal;
    case 'Admin Panel': return faUserShield;
    case 'Settings': return faGear;
    default: return faCircleRegular;
  }
}
