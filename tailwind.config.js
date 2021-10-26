module.exports = {
  darkMode: 'class',
  purge: [],
  theme: {
    extend: {
      fontFamily: {
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
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
