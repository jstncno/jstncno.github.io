module.exports = {
  darkMode: 'class',
  purge: [],
  theme: {
    extend: {
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
      colors: {
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
    },
  },
  variants: {
    extend: {
      margin: ['first'],
      textColor: ['visited'],
      display: ['last'],
    }
  },
  plugins: [],
}
