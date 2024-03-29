export default {
  // Vue config:  https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-vue-config
  vue: {
    config: {
      productionTip: false,
      devtools: true,
    },
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'guestplace',
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: 'https://unpkg.com/detect-autofill/dist/detect-autofill.js',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: '~/assets/styles/index.scss', lang: 'sass' }],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios',
    '~/plugins/refresh',
    '~/plugins/filters',
    '~/plugins/lightbox',
    '~/plugins/select',
    '~/plugins/teleport',

    { src: '~/plugins/legacy', mode: 'client' },
    { src: '~/plugins/toast', mode: 'client' },
    { src: '~/plugins/mask', mode: 'client' },
    { src: '~/plugins/autosize', mode: 'client' },
    { src: '~/plugins/socket', mode: 'client' },
    { src: '~/plugins/vee-validate', mode: 'client' },
    { src: '~/plugins/scroll-lock', mode: 'client' },
    { src: '~/plugins/rangeslider', mode: 'client', ssr: false },
    { src: '~/plugins/swiper', mode: 'client', ssr: false },
    { src: '~/plugins/calendar', mode: 'client', ssr: false },
    { src: '~/plugins/ymapPlugin.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources',
    // https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://github.com/nuxt-community/community-modules/tree/master/packages/toast
    '@nuxtjs/toast',
    // https://github.com/microcipcip/cookie-universal/tree/master/packages/cookie-universal-nuxt
    'cookie-universal-nuxt',
    // https://github.com/LinusBorg/portal-vue
    'portal-vue/nuxt',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // https://github.com/nuxt-community/style-resources-module/
  styleResources: {
    sass: ['./assets/styles/utilities/_index.scss'],
    scss: ['./assets/styles/utilities/_index.scss'],
  },

  // https://nuxtjs.org/blog/moving-from-nuxtjs-dotenv-to-runtime-config
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL,
    socketURL: process.env.SOCKET_URL,
    dadataKey: process.env.DADATA_API_KEY,
  },

  loading: {
    color: '#1E88E5',
    height: '3px',
    throttle: 800,
    continuous: true,
  },

  toast: {
    position: 'top-right',
  },

  router: {
    middleware: 'global',
  },

  alias: {
    vue: 'vue/dist/vue.min.js',
  },
}
