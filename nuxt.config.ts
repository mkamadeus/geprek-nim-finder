export default defineNuxtConfig({
  modules: [
    '@nuxt/devtools',
    // '@nuxtjs/i18n',
    '@nuxt/content',
    '@nuxt/image',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@vite-pwa/nuxt',
    '@nuxtjs/eslint-module'
  ],
  css: [
    '@unocss/reset/tailwind.css'
  ],
  devServerHandlers: [],
  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      title: 'geprek.mkamadeus.dev',
      viewport: 'width=device-width,initial-scale=1',
      link: [{ rel: 'canonical', href: 'https://geprek.mkamadeus.dev/' }],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { property: 'og:type', content: 'website' },
        { property: 'og:description', content: 'mkamadeus\' personal website.' },
        { property: 'og:title', content: 'mkamadeus.dev' },
        { property: 'og:url', content: 'https://geprek.mkamadeus.dev' },
        { property: 'og:locale', content: 'en_US' }
      ]
    }
  },
  // i18n: {
  //   langDir: './locales',
  //   lazy: true,
  //   strategy: 'no_prefix',
  //   defaultLocale: 'id',
  //   detectBrowserLanguage: {
  //     useCookie: true,
  //     cookieKey: 'i18n_lang'
  //   },
  //   locales: [
  //     {
  //       code: 'id',
  //       name: 'Bahasa Indonesia',
  //       file: 'id.yaml'
  //     },
  //     {
  //       code: 'en',
  //       name: 'English',
  //       file: 'en.yaml'
  //     },
  //     {
  //       code: 'cn',
  //       name: '中文',
  //       file: 'cn.yaml'
  //     },
  //   ]
  // },
  // pinia: {
  //   storesDirs: ['./stores/**'],
  // },
  content: {
    markdown: {
      anchorLinks: false
    }
  },
  nitro: {
    storage: {
      cache: {
        driver: 'memory'
      }
    }
  },
  devtools: {
    enabled: true
  }
})
