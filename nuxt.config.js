export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Торговый дом Романов',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preload', href: '/include/fonts/montserrat-bold.woff2',
        as: 'font', type: 'font/woff2', crossorigin: 'crossorigin'
      },
      {
        rel: 'preload', href: '/include/fonts/montserrat-light.woff2',
        as: 'font', type: 'font/woff2', crossorigin: 'crossorigin'
      },
      {
        rel: 'preload', href: '/include/fonts/montserrat-medium.woff2',
        as: 'font', type: 'font/woff2', crossorigin: 'crossorigin'
      },
      {
        rel: 'preload', href: '/include/fonts/montserrat-regular.woff2',
        as: 'font', type: 'font/woff2', crossorigin: 'crossorigin'
      },
      {
        rel: 'preload', href: '/include/fonts/montserrat-semibold.woff2',
        as: 'font', type: 'font/woff2', crossorigin: 'crossorigin'
      },

      {
        rel: 'preload', href: '/include/fonts/playfairdisplay-bold.woff2',
        as: 'font', type: 'font/woff2', crossorigin: 'crossorigin'
      },
      {
        rel: 'preload', href: '/include/fonts/playfairdisplay-medium.woff2',
        as: 'font', type: 'font/woff2', crossorigin: 'crossorigin'
      },
      {
        rel: 'preload', href: '/include/fonts/playfairdisplay-regular.woff2',
        as: 'font', type: 'font/woff2', crossorigin: 'crossorigin'
      },
      {
        rel: 'preload', href: '/include/fonts/playfairdisplay-semibold.woff2',
        as: 'font', type: 'font/woff2', crossorigin: 'crossorigin'
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'swiper/css/swiper.css',
    '~/assets/css/fonts.css',
    '~/assets/css/index.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/directives',
    {src:'~/plugins/swiper.js',ssr: false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
