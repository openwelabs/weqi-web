export default {
  nav: {
    home: 'Home',
    download: 'Download',
  },
  hero: {
    kicker: 'MODERN · OPEN SOURCE · DESKTOP',
    title1: 'A modern, clean',
    title2: 'open-source desktop chess',
    sub: 'All chess rules are implemented in a local C++ engine. Supports human vs human, human vs AI, AI vs AI and review, with 7 interface languages switchable at runtime.',
    download: 'Download Now',
    repo: 'Repository ↗',
  },
  modes: {
    label: 'Four Game Modes',
    items: [
      { glyph: '♞', title: 'Human vs Human', desc: 'Two players on the same device, with the local engine validating every move in real time.' },
      { glyph: '♛', title: 'Human vs AI', desc: 'Connect your chosen AI provider and play against any model.' },
      { glyph: '♜', title: 'AI vs AI', desc: 'Two AIs play automatically — start / pause / resume / stop, not counted in your record.' },
      { glyph: '♝', title: 'Review', desc: 'Revisit past games and relive every move and outcome.' },
    ],
  },
  features: {
    label: 'Core Features',
    title: 'More than just chess',
    sub: 'From a complete rules engine to profiles, stats and game history, Weqi keeps the desktop chess experience clean and sharp.',
    items: [
      { title: 'Complete Rules', desc: 'Legal move validation, check, checkmate, stalemate, castling, en passant, promotion… all implemented in the local C++ engine.' },
      { title: 'Player Profile & Rating', desc: 'Track your Rating and best Rating, and edit your player name anytime.' },
      { title: 'Match Statistics', desc: 'Games, win rate, wins, draws, losses, best streak, current streak and best Rating at a glance.' },
      { title: 'Game History', desc: 'Browse past games with date, mode, opponent, result and Rating change.' },
      { title: 'Resume Unfinished Games', desc: 'Pick up an in-progress game anytime without losing a move.' },
      { title: 'AI Chat', desc: 'The AI gives brief commentary on its moves, in the language of the interface.' },
    ],
  },
  stack: {
    label: 'Tech Stack',
    title: 'A solid foundation',
    items: [
      { name: 'C++17', role: 'Core engine & rules' },
      { name: 'Qt 6', role: 'Desktop UI (Widgets)' },
      { name: 'CMake', role: 'Build system' },
      { name: 'Python 3', role: 'AI adapter' },
    ],
  },
  build: {
    label: 'Build',
    title: 'Run in three steps',
    sub: 'Dependencies: CMake ≥ 3.16, Qt 6 (≥ 6.2, with Widgets), a C++17-capable compiler, Python 3.',
    steps: [
      { cmd: 'cmake -S . -B build', note: 'Configure' },
      { cmd: 'cmake --build build -j', note: 'Compile' },
      { cmd: './build/Weqi', note: 'Run' },
    ],
  },
  data: {
    label: 'Data Storage',
    title: 'Privacy first',
    sub: 'Settings, profiles and game history are stored in the system user data directory. AI provider config is stored separately, and API keys are never written into the project.',
    items: [
      { label: 'Settings & profile', path: '~/.local/share/Weqi/' },
      { label: 'AI provider config', path: 'User data directory (separate)' },
      { label: 'Game history & saves', path: 'User data directory' },
    ],
  },
  i18n: {
    label: 'Internationalization',
    title: '7 languages, switchable at runtime',
    languages: ['简体中文', '繁體中文', 'English', '日本語', 'Español', 'Українська', '한국어'],
  },
  download: {
    label: 'Download',
    title: 'Choose your system',
    sub: 'Weqi v1.0.0 · Supports Linux and Windows. Pick the package that fits you.',
    button: 'Download',
    items: [
      { os: 'Linux', format: 'AppImage', note: 'Works on all Linux distributions' },
      { os: 'Debian / Ubuntu / Mint', format: '.deb', note: 'Debian-based distributions' },
      { os: 'Fedora / RHEL / Rocky', format: '.rpm', note: 'Red Hat-based distributions' },
      { os: 'Windows', format: 'Portable', note: 'No install, unzip and run' },
      { os: 'Windows', format: 'Installer', note: 'Standard installer' },
    ],
  },
  footer: {
    note: 'Open source · Modern · Clean desktop chess',
    license: 'Open Source',
  },
}
