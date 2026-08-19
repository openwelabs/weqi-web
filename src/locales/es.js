export default {
  nav: {
    home: 'Inicio',
    download: 'Descargar',
  },
  hero: {
    kicker: 'MODERN · OPEN SOURCE · DESKTOP',
    title1: 'Un ajedrez de escritorio',
    title2: 'moderno, limpio y de código abierto',
    sub: 'Todas las reglas del ajedrez están implementadas en un motor C++ local. Admite humano contra humano, humano contra IA, IA contra IA y revisión, con 7 idiomas de interfaz conmutables en tiempo de ejecución.',
    download: 'Descargar ahora',
    repo: 'Repositorio ↗',
  },
  modes: {
    label: 'Cuatro modos de juego',
    items: [
      { glyph: '♞', title: 'Humano contra humano', desc: 'Dos jugadores en el mismo dispositivo, con el motor local validando cada movimiento en tiempo real.' },
      { glyph: '♛', title: 'Humano contra IA', desc: 'Conecta tu proveedor de IA elegido y juega contra cualquier modelo.' },
      { glyph: '♜', title: 'IA contra IA', desc: 'Dos IAs juegan automáticamente — iniciar / pausar / reanudar / detener, sin contar en tu récord.' },
      { glyph: '♝', title: 'Revisión', desc: 'Revive partidas pasadas y repasa cada movimiento y resultado.' },
    ],
  },
  features: {
    label: 'Características principales',
    title: 'Más que solo ajedrez',
    sub: 'Desde un motor de reglas completo hasta perfiles, estadísticas e historial de partidas, Weqi mantiene la experiencia de ajedrez de escritorio limpia y nítida.',
    items: [
      { title: 'Reglas completas', desc: 'Validación de movimientos legales, jaque, jaque mate, ahogado, enroque, captura al paso, promoción… todo implementado en el motor C++ local.' },
      { title: 'Perfil y Rating', desc: 'Sigue tu Rating y tu mejor Rating, y edita tu nombre de jugador en cualquier momento.' },
      { title: 'Estadísticas de partidas', desc: 'Partidas, porcentaje de victorias, victorias, tablas, derrotas, mejor racha, racha actual y mejor Rating de un vistazo.' },
      { title: 'Historial de partidas', desc: 'Explora partidas pasadas con fecha, modo, oponente, resultado y cambio de Rating.' },
      { title: 'Reanudar partidas sin terminar', desc: 'Retoma una partida en curso en cualquier momento sin perder un movimiento.' },
      { title: 'Chat con IA', desc: 'La IA comenta brevemente sus movimientos, en el idioma de la interfaz.' },
    ],
  },
  stack: {
    label: 'Stack tecnológico',
    title: 'Una base sólida',
    items: [
      { name: 'C++17', role: 'Motor central y reglas' },
      { name: 'Qt 6', role: 'Interfaz de escritorio (Widgets)' },
      { name: 'CMake', role: 'Sistema de compilación' },
      { name: 'Python 3', role: 'Adaptador de IA' },
    ],
  },
  build: {
    label: 'Compilación',
    title: 'Ejecutar en tres pasos',
    sub: 'Dependencias: CMake ≥ 3.16, Qt 6 (≥ 6.2, con Widgets), un compilador compatible con C++17, Python 3.',
    steps: [
      { cmd: 'cmake -S . -B build', note: 'Configurar' },
      { cmd: 'cmake --build build -j', note: 'Compilar' },
      { cmd: './build/Weqi', note: 'Ejecutar' },
    ],
  },
  data: {
    label: 'Almacenamiento de datos',
    title: 'Privacidad primero',
    sub: 'La configuración, los perfiles y el historial de partidas se guardan en el directorio de datos de usuario del sistema. La configuración del proveedor de IA se almacena por separado y las claves API nunca se escriben en el proyecto.',
    items: [
      { label: 'Configuración y perfil', path: '~/.local/share/Weqi/' },
      { label: 'Configuración del proveedor de IA', path: 'Directorio de datos de usuario (separado)' },
      { label: 'Historial y guardados', path: 'Directorio de datos de usuario' },
    ],
  },
  i18n: {
    label: 'Internacionalización',
    title: '7 idiomas, conmutables en tiempo de ejecución',
    languages: ['简体中文', '繁體中文', 'English', '日本語', 'Español', 'Українська', '한국어'],
  },
  download: {
    label: 'Descargar',
    title: 'Elige tu sistema',
    sub: 'Weqi v1.0.0 · Compatible con Linux y Windows. Elige el paquete que mejor te convenga.',
    button: 'Descargar',
    items: [
      { os: 'Linux', format: 'AppImage', note: 'Funciona en todas las distribuciones de Linux' },
      { os: 'Debian / Ubuntu / Mint', format: '.deb', note: 'Distribuciones basadas en Debian' },
      { os: 'Fedora / RHEL / Rocky', format: '.rpm', note: 'Distribuciones basadas en Red Hat' },
      { os: 'Windows', format: 'Portátil', note: 'Sin instalación, descomprimir y ejecutar' },
      { os: 'Windows', format: 'Instalador', note: 'Instalador estándar' },
    ],
  },
  footer: {
    note: 'Código abierto · Moderno · Ajedrez de escritorio limpio',
    license: 'Open Source',
  },
}
