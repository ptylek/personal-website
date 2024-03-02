// @see https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  experimental: {
    viewTransition: true
  },
  typescript: {
    typeCheck: true
  },
  // BUG: nuxt/content (https://github.com/nuxt/content/issues/2062)
  // _not-found query api is not generated during npm run generate as the route is not prerendered
  // adding this route with queryContent _not-found makes sure it is generated properly
  generate: {
    routes: '/not-found'
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
