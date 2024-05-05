require('dotenv').config();

const path = require('path');

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'todo',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  typescript: {
    tsconfig: './tsconfig.json'
  },

  srcDir: 'src',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/main.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/dotenv'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
        config.plugins = config.plugins.filter(
          plugin => !(plugin instanceof ForkTsCheckerWebpackPlugin)
        );
  
        config.plugins.push(
          new ForkTsCheckerWebpackPlugin({
            typescript: {
              configFile: path.resolve(__dirname, 'tsconfig.json'),
              diagnosticOptions: {
                semantic: true,
                syntactic: true,
              },
            }
          })
        );
      }
    }
  }
}
