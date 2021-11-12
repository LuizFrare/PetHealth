export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'PetHealth',
    htmlAttrs: {
      lang: 'Pt-br'
      
    },
    
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [{
      src:'https://unpkg.com/aos@2.3.1/dist/aos.js'
    }],
   
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/estilo.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/Vuelidate'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  target: 'static',
  buildModules: [
    '@nuxt/image',
  ],

  i18n: {
    strategy: "no_prefix",
    detectBrowserLanguage: {
      useCookie: true
    },
    locales: [
      {
        code: 'en',
        file: 'en-US.js',
        name: 'English'
      },

      {
        code: 'pt',
        file: 'pt-BR.js',
        name: "Português"
      }
    ],
    langDir: 'locales',
    defaultLocale: 'en'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ["aos", 'vuelidate']
  },
  plugins:[{src:"~~/plugins/aos", ssr:false}],
  css:["aos/dist/aos.css"]
}
