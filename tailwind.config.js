module.exports = {
  purge: ['./src/**/*.tsx'],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Avenir Next Rounded Std'],
    },
    extend: {
      keyframes: {
        fadein: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        fadein: 'fadein 0.6s ease-in-out',
      },
      colors: {
        teal: {
          50: '#f0faf5',
          100: '#e4f7ee',
          200: '#c0eddb',
          300: '#84dcbf',
          400: '#36c9a0',
          500: '#29a389',
          600: '#1d8170',
          700: '#15655c',
          800: '#10514e',
          900: '#0d4a4a',
        },
        violet: {
          50: '#f7f6fd',
          100: '#efedfc',
          200: '#e1dbfa',
          300: '#c5b6f6',
          400: '#a98bf4',
          500: '#8950f1',
          600: '#600dde',
          700: '#3c0580',
          800: '#26024b',
          900: '#1c0033',
        },
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
    },
  },
  plugins: [],
};
