export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      }
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },
  css: [
    "~/assets/styles/main.css"
  ],
  nitro: {
    preset: 'vercel-edge',
  },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    'nuxt-viewport',
    'nuxt-icons',
  ],
  viewport: {
    /* Viewport options for 'nuxt-viewport' package */
    breakpoints: {
      mobile: 320,
      mobileWide: 600,
      tablet: 825,
      tabletWide: 1024,
      laptop: 1250,
      desktop: 1600,
    },
    defaultBreakpoints: {
      desktop: 'desktop',
      mobile: 'mobile',
      tablet: 'tablet',
    },
    fallbackBreakpoint: 'desktop'
  },
})
