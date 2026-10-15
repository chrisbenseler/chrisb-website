// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  components: true,
  modules: ['@nuxt/fonts', '@nuxt/icon', '@nuxtjs/color-mode'],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
  },
  fonts: {
    families: [
      { name: 'Inter', provider: 'google', weights: [400, 500, 600] },
      { name: 'Lexend', provider: 'google', weights: [400, 600, 700] },
    ],
  },
  icon: {
    serverBundle: { collections: ['lucide', 'simple-icons'] },
    // Bundle every icon referenced in components and data files so the static
    // build never has to call the Iconify API at runtime.
    clientBundle: {
      scan: { globInclude: ['app/**/*.{vue,ts}'] },
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-Q0BYEJF81T",
          async: true,
          tagPosition: 'bodyClose',
        },
      ],
    }
  }
})
