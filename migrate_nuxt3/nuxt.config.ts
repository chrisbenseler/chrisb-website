// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Christian Benseler',
      htmlAttrs: {
        lang: 'pt-br'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel:"stylesheet", type:"text/css", href:'https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css' },
        { rel:"stylesheet", type:"text/css", href:'https://fonts.googleapis.com/css2?family=Lexend:wght@100;400;700&display=swap' },
        { rel:"stylesheet", type:"text/css", href:'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css' }
      ],
      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-Q0BYEJF81T",
        },
      ],
    }
  }
})
