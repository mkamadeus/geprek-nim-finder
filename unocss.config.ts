import { presetAttributify, presetTypography, presetIcons, presetUno, defineConfig, presetWebFonts } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        header: [
          {
            name: 'Plus Jakarta Sans',
            weights: [400, 500, 600, 700, 800, 900],
            italic: true
          }
          // {
          //   name: 'Noto Fonts',
          //   weights: [100, 200, 300, 400, 500, 600, 700, 800]
          // }
        ],
        body: [
          {
            name: 'Open Sans',
            weights: [300, 400, 500, 600, 700, 800],
            italic: true
          }
          // {
          //   name: 'Noto Fonts',
          //   weights: [100, 200, 300, 400, 500, 600, 700, 800]
          // }
        ],
        monospace: 'Ubuntu Mono'
      }
    })
  ],
  shortcuts: {
    'nav-button': 'transition transition-ease-out hover:text-teal-500 dark:hover:text-teal-300',
    'nav-button-active': 'text-teal-500 dark:text-teal-300'
  },
  theme: {
    animation: {
      keyframes: {
        wiggle: '{0%, 100% { transform: rotate(-2deg) } 50% { transform: rotate(2deg) }}'
      },
      duration: {
        wiggle: '1s'
      },
      timingFns: {
        wiggle: 'ease-in-out'
      }
    }
  },
  transformers: [
    transformerDirectives()
  ],
  content: {
    pipeline: {
      include: [/\.ts$/, /\.vue$/, /\.vue\?vue/],
      exclude: [/unocss\.config\.ts$/]
    }
  }
})
