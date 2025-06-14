# Life of Pablo – Real-Time Multiplayer Simulation Game

Welcome to **Life of Pablo**, a real-time multiplayer browser-based simulation game where players start broke in a gritty urban environment and must climb their way up through cultivation, manufacturing, trading, and criminal enterprise. This project aims to deliver a deep, feature-rich, and highly interactive experience inspired by cyberpunk and urban underworld themes.

---

## 🎮 Game Vision & Overview

- **Start from nothing:** Players begin with $500, an empty inventory, and no access to advanced features.
- **Progress through realistic systems:** Cultivate, manufacture, and trade goods; own properties, vehicles, and labs; travel globally; join gangs; engage in PVP combat and alliances.
- **Persistent, real-time world:** All actions and economies are synced in real time, with offline progress and dynamic events.
- **No vague features:** Every system is fully defined, with no placeholders or missing information.

---

## 🚦 Project Status

- **Sidebar & Navigation:**
  - [x] Pixel-perfect sidebar layout, grouping, icons, colors, spacing, and stat formatting
  - [x] Sidebar collapse/expand functionality (button in content area)
  - [x] Page switching and active tab highlighting
  - [x] Logo only in sidebar
- **Page Components:**
  - [x] Placeholder components for all sidebar entries
  - [ ] Implement full content for each page
- **Styling:**
  - [x] Tahoma font, FontAwesome icons, compact sizing
  - [x] Footer placement and underlines
- **Repository:**
  - [x] GitHub repo initialized, code pushed (excluding node_modules)
  - [x] Status/dev plan page (this file)

---

## 🧩 Core Gameplay Features

- **Cultivation → Manufacturing → Trading:** Grow, process, and sell a variety of goods, from cannabis to synthetic drugs.
- **Asset Ownership:** Buy and upgrade properties, vehicles, and labs, each with unique stats and bonuses.
- **Global Travel:** Unlock and visit regions worldwide, each with unique laws, risks, and markets.
- **Gangs & Alliances:** Join or create gangs, rise through ranks, upgrade your crew, and form alliances or rivalries.
- **PVP Combat:** Ambush, heist, carjack, and battle other players or gangs.
- **Skill Trees & Reputation:** Progress through detailed skill trees and reputation tiers, unlocking perks and new content.
- **Inventory & Marketplace:** Manage a detailed inventory system with slots, weight, stackables, and trade in a dynamic, region-based marketplace.
- **Admin Panel:** Full control for game masters, including world events, player management, and economy tuning.
- **Player Stats & Achievements:** Track every stat, achievement, and milestone with rich analytics and leaderboards.
- **Dynamic Economy:** Real-time sync, regional pricing, NPC sellers, and offline progress.

---

## 🖥️ Technology Stack

- **Frontend:** React (Vite), CSS (vanilla or Tailwind), Font Awesome 6 (free)
- **Backend:** Node.js + Express + Supabase (initially), PostgreSQL + Redis (scaling)
- **Real-Time Sync:** WebSockets
- **Authentication:** JWT + Supabase
- **Analytics & Logging:** Winston + Sentry
- **Deployment:** GitHub Actions CI/CD, Vercel + Railway

---

## 🗄️ Data & Backend Structure

- **Supabase as primary DB:** All persistent data (items, properties, regions, achievements, etc.) is stored in Supabase tables, following strict schemas.
- **No JSON files:** All references to JSON are now Supabase tables.
- **Backend services:** Node.js/Express handles game logic, real-time sync, and API endpoints.
- **Migration path:** Future migration to PostgreSQL + Redis for scale and performance.

---

## 🖤 UI/UX Design

- **Theme:** Modern dark mode, cyberpunk meets gritty realism
- **Font:** Tahoma
- **Colors:** Background `#0A0A0A`, Text `#FFFFFF`, Accent Cyan `#00FFFF`
- **Layout:** Responsive grid, mobile-friendly
- **Icons:** SVG/FontAwesome with neon glow
- **Accessibility:** WCAG 2.1 AA compliant
- **Animations:** Smooth transitions, immersive feedback

---

## 📁 File & Component Structure

```
/src/
  /components/   # All UI components (see LOP.md for full list)
  /contexts/     # React context providers (GameState, Auth, Gang, Admin)
  /hooks/        # Custom React hooks (useGameLogic, useSocket, etc.)
  /services/     # API, socket, and data services
  /utils/        # Utility functions (price calc, event gen, etc.)
  /pages/        # Page-level components (Overview, City Map, etc.)
  /data/         # (Deprecated: all data now in Supabase)
  /stories/      # Storybook stories for components
  /assets/       # Images, icons, sounds
  index.html
  main.tsx
  App.tsx
  ...
```

All components are modular, focused, and reusable. Use React hooks and context for state management. Avoid global variables and side effects.

---

## 🧱 Major Game Systems (from LOP.md)

- **Cultivation & Manufacturing:** Realistic plant growth, drug synthesis, quality/yield mechanics, lab upgrades
- **Properties & Vehicles:** Tiered lists with stats, upgrades, unlocks, and risk levels
- **Inventory System:** Slot/weight-based, stackables, upgrades, specialty gear
- **Skill Trees & Reputation:** 6 skill categories, 10 tiers each, 7 reputation levels with unlocks
- **Achievements:** 100+ achievements across all gameplay areas
- **Gangs & Alliances:** Ranks, upgrades, missions, alliances, betrayals, turf wars
- **Social Systems:** Real-time chat, trading, alliances, leaderboards, public profiles
- **Law Enforcement:** Random events, penalties, jail, confiscation, risk management
- **Financial System:** Loans, banks, rental income, penalties, and rewards
- **NPC Sellers:** 30+ types, unique goods, regional/faction logic
- **PVP Combat:** Multiple combat types, stat-based outcomes, gang/team battles
- **Admin Panel:** Full world/game control, analytics, and moderation

---

## 🛠️ Development & Contribution

### Development Plan
1. **UI Polish:** Finalize sidebar/navigation, ensure pixel-perfect match
2. **Page Content:** Build out each main page (Overview, City Map, etc.), connect to backend
3. **Core Features:** Implement gameplay/stat logic, add interactivity
4. **Testing & QA:** Manual/automated tests, accessibility, performance
5. **Documentation:** Keep README and status page up to date, add usage/contribution guides

### Testing & Deployment
- **Testing:** Jest + RTL (unit), Supertest (integration), Cypress (E2E), ESLint + Prettier
- **CI/CD:** GitHub Actions for build, test, deploy
- **Deployment:** Vercel (frontend), Railway (backend), daily DB backups, auto-failover

### How to Contribute
- Fork the repo and create a feature branch
- Follow the file/component structure and code style
- Write clear, modular, and well-commented code
- Add/maintain tests for new features
- Submit a pull request with a clear description

---

## 🗺️ Roadmap & Milestones

### MVP
- [x] Pixel-perfect sidebar/navigation
- [x] Page switching logic
- [x] Sidebar collapse/expand (button in content area)
- [x] GitHub setup and push
- [ ] Implement core page content (Overview, City Map, Growing, etc.)
- [ ] Add real data/stat integration
- [ ] Responsive/mobile layout

### Future Features
- [ ] User authentication
- [ ] Admin panel functionality
- [ ] Achievements and stats tracking
- [ ] Market and inventory systems
- [ ] Research and lab mechanics
- [ ] Gang and property management
- [ ] Vehicle system
- [ ] Settings and customization

### Milestones
- **Sidebar/Navigation Complete:** June 2025
- **MVP Page Content:** July 2025
- **Core Gameplay Features:** August 2025
- **Beta Release:** September 2025

---

## 👨‍💻 Contributors
- [fame0528](https://github.com/fame0528)

---

## 📚 Additional Documentation
- See [`docs/LOP.md`](docs/LOP.md) for the full game design, schemas, and system definitions.
- See [`STATUS.md`](STATUS.md) for the current project status and dev plan.

_Last updated: June 14, 2025_
