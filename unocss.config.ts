import { presetAttributify, presetIcons, presetUno, presetTypography, defineConfig } from 'unocss';

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno(),
    presetIcons(),
    presetTypography({
      cssExtend: {
        'h1,h2,h3': {
          'font-family': "'Inter', sans-serif",
          'font-weight': '800',
        },
        h1: { margin: '0 0 0.5em', 'font-weight': '800' },
        h2: {
          'font-weight': '500',
          'font-size': '1.5em',
          margin: '0 0 0.5em',
        },
        h3: {
          'font-weight': '500',
          'font-size': '1.2em',
          margin: '0 0 0.5em',
        },
        '.table-of-contents': {
          'margin-bottom': '2em',
          'margin-left': '-1em',
        },
        '.table-of-contents ul': {
          margin: '0',
          'list-style-type': 'none',
        },
        '.table-of-contents a': {
          'font-weight': '400',
          'font-size': '0.8em',
        },
        p: {
          'font-family': "'Inter', sans-serif",
          'line-height': '1.75',
          'font-size': '0.875rem',
        },
        ul: {
          'font-family': "'Inter', sans-serif",
          'line-height': '1.75',
          'font-size': '0.875rem',
        },
        blockquote: {
          'font-style': 'normal',
          color: '#bbb',
          'border-left': '0.25em solid #7d7d7d4d',
        },
        pre: {
          'font-family': "'Ubuntu Mono', monospace",
          margin: '0',
          padding: '0',
          'border-radius': '0.5rem',
        },
        a: {
          'text-decoration-style': 'dotted',
          cursor: 'pointer',
        },
        code: {
          'font-family': "'Ubuntu Mono', monospace",
          'margin-bottom': '2em',
        },
        figure: {
          display: 'flex',
          'flex-direction': 'column',
          'align-items': 'center',
        },
        'figure > img': {
          'margin-bottom': '0.5em',
        },
        figcaption: {
          color: '#ddd',
          'font-size': '0.8em',
        },
        article: {
          'font-family': "'Inter'",
        },
      },
    }),
  ],
  rules: [['font-header', { 'font-family': "'Inter', sans-serif" }]],
  shortcuts: {
    'nav-button': 'transition transition-ease-out hover:text-teal-500 dark:hover:text-teal-300',
    'nav-button-active': 'text-teal-500 dark:text-teal-300',
  },
  theme: {
    animation: {
      keyframes: {
        wiggle: '{0%, 100% { transform: rotate(-2deg) } 50% { transform: rotate(2deg) }}',
      },
      duration: {
        wiggle: '1s',
      },
      timingFns: {
        wiggle: 'ease-in-out',
      },
    },
  },
  include: [/\.ts$/, /\.vue$/, /\.vue\?vue/],
  exclude: [/unocss\.config\.ts$/],
});
