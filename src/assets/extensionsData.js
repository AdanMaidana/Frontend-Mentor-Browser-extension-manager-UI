const base = import.meta.env.BASE_URL; 
const extensionsData = [
  {
    id: 1,
    name: 'DevLens',
    img: `${base}images/logo-devlens.svg`, 
    description: 'Quickly inspect page layouts and visualize element boundaries.',
    active: true
  },
  {
    id: 2,
    name: 'StyleSpy',
    img: `${base}images/logo-style-spy.svg`,
    description: 'Instantly analyze and copy CSS from any webpage element.',
    active: true
  },
  {
    id: 3,
    name: 'SpeedBoost',
    img: `${base}images/logo-speed-boost.svg`,
    description: 'Optimizes browser resource usage to accelerate page loading.',
    active: false
  },
  {
    id: 4,
    name: 'JSONWizard',
    img: `${base}images/logo-json-wizard.svg`,
    description: 'Formats, validates, and prettifies JSON responses in-browser.',
    active: true
  },
  {
    id: 5,
    name: 'TabMaster Pro',
    img: `${base}images/logo-tab-master-pro.svg`,
    description: 'Organizes browser tabs into groups and sessions.',
    active: true
  },
  {
    id: 6,
    name: 'ViewportBuddy',
    img: `${base}images/logo-viewport-buddy.svg`,
    description: 'Simulates various screen resolutions directly within the browser.',
    active: false
  },
  {
    id: 7,
    name: 'Markup Notes',
    img: `${base}images/logo-markup-notes.svg`,
    description: 'Enables annotation and notes directly onto webpages for collaborative debugging.',
    active: true
  },
  {
    id: 8,
    name: 'GridGuides',
    img: `${base}images/logo-grid-guides.svg`,
    description: 'Overlay customizable grids and alignment guides on any webpage.',
    active: false
  },
  {
    id: 9,
    name: 'Palette Picker',
    img: `${base}images/logo-palette-picker.svg`,
    description: 'Instantly extracts color palettes from any webpage.',
    active: true
  },
  {
    id: 10,
    name: 'LinkChecker',
    img: `${base}images/logo-link-checker.svg`,
    description: 'Scans and highlights broken links on any page.',
    active: true
  },
  {
    id: 11,
    name: 'DOM Snapshot',
    img: `${base}images/logo-dom-snapshot.svg`,
    description: 'Capture and export DOM structures quickly.',
    active: false
  },
  {
    id: 12,
    name: 'ConsolePlus',
    img: `${base}images/logo-console-plus.svg`,
    description: 'Enhanced developer console with advanced filtering and logging.',
    active: true
  }
];

export default extensionsData;
