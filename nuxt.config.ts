// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
        '@vueuse/motion/nuxt',
        '@nuxtjs/fontaine'
    ],
    css: [
        "~/assets/css/reset.css",
        "~/assets/css/fonts.css",
    ]
})
