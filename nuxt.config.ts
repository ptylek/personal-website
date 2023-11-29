// @see https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  experimental: {
    viewTransition: true
  },
  typescript: {
    typeCheck: true
  },
  css: ['@/assets/css/global.css'],
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
      ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
    }
  },
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxtjs/fontaine',
    '@nuxt/image'
  ],
  content: {
    /**
     * contentHead disabled
     * - overwrites useHead used in app.vue as it is runs on Nuxt page level
     * - prevents from using title/description templates (also for og tags)
     */
    contentHead: false,
    documentDriven: {
      host: 'https://ptylek.com'
    },
    markdown: {
      tags: {
        p: 'Paragraph',
        ul: 'List',
        li: 'ListItem'
      }
    }
  },
  ui: {
    global: true,
    icons: ['mdi']
  },
  colorMode: {
    classSuffix: ''
  }
})
