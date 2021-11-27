module.exports = {
  darkMode: 'class',
  purge: [],
  theme: {
    extend: {
      colors: {
        background: {
          light: '#FFFFFF',
          DEFAULT: '#FFFFFF',
          dark: '#2A0A33',
        },
        primary: {
          light: '#4B4B4B',
          DEFAULT: '#4B4B4B',
          dark: '#FFFFFF',
        },
        secondary: {
          light: '#D64545',
          DEFAULT: '#D64545',
          dark: '#15FFE6',
        },
        tertiary: {
          light: '#2800FF',
          DEFAULT: '#2800FF',
          dark: '#D091FF',
        },
        chip: '#303030',
        hover: {
          light: '#1C01B0',
          DEFAULT: '#1C01B0',
          dark: '#8C0DE1',
        },
        visited: '#FFB400',
      },
      fontFamily: {
        'sans': [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Noto Sans"',
          'sans-serif',
          'Arial',
          'Roboto',
          '"Segoe UI"',
          'ui-sans-serif',
          'system-ui',
          '"Apple Color Emoji"',
          '"Noto Color Emoji"',
          '"Segoe UI Emoji"',
        ],
        'mono': [
          'Menlo',
          'ui-monospace',
          'SFMono-Regular',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      gridTemplateColumns: {
        'article-layout': '1fr min(65ch, 100%) 1fr',
        'navbar-layout': '1fr min(80ch, 100%) 1fr',
      },
      maxHeight: {
        '3/5': '60vh',
        '4/5': '80vh',
      },
      maxWidth: {
        '164px': '164px',
      },
    },
  },
  variants: {
    extend: {
      margin: ['first'],
      textColor: ['visited'],
      display: ['last'],
      border: ['last'],
    }
  },
  plugins: [],
}
