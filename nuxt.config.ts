import { NuxtConfig } from '@nuxt/types';
import * as dotenv from 'dotenv';
import * as path from 'path';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

dotenv.config();

const config: NuxtConfig = {
  ssr: false,
  target: 'static',
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
  css: ["~/assets/css/main.css"],
  plugins: [],
  components: true,
  buildModules: ['@nuxt/typescript-build'],
  modules: ['@nuxtjs/dotenv'],
  build: {
    extend(config: any, ctx: { isDev: boolean; isClient: boolean }) {
      if (ctx.isDev && ctx.isClient) {
        config.plugins = config.plugins.filter(
          (plugin: any) => !(plugin instanceof ForkTsCheckerWebpackPlugin)
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
};

export default config;
