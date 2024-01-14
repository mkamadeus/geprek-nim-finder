import { presetAttributify, presetIcons, presetUno, presetTypography, defineConfig, presetWebFonts } from 'unocss';

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno(),
    presetIcons(),
    presetWebFonts({
      fonts: {
        sans: 'Inter',
        monospace: 'Ubuntu Mono',
      }
    }),
  ],
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
