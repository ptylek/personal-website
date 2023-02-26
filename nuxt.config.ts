// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                lang: 'en'
            },
            title: 'Frontend Developer Pawel Tylek - E-commerce and Headless Applications',
            meta: [
                { name: 'description', content: 'Welcome to the personal website of Pawel Tylek, an experienced Frontend Developer with a strong focus on e-commerce and headless applications.' },
                { name: 'keywords', content: 'paweł tylek, pawel tylek, ptylek, frontend, front-end, nuxt, headless, ecommerce, javascript, magento, dev, developer, programista, kraków'},
                { name: 'author', content: 'Paweł Tylek' },
                { name: 'og:title', content: 'Frontend Developer Pawel Tylek - E-commerce and Headless Applications' },
                { name: 'og:description', content: 'Welcome to the personal website of Pawel Tylek, an experienced Frontend Developer with a strong focus on e-commerce and headless applications.' },
                { name: 'og:type', content: 'website' },
                { name: 'og:image', content: '/images/og_image.jpg' },
                { name: 'og:image:alt', content: 'Frontend Developer Pawel Tylek' },
                { name: 'og:image:type', content: 'image/jpeg' },
                { name: 'og:image:width', content: '2052' },
                { name: 'og:image:height', content: '1282' }
            ],
            link: [
                { rel: 'icon', href: '/favicon.png', type: 'image/png', sizes: '144x144' },
                { rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon', sizes: '48x48' },
                { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5740CE' },
                { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', type: 'image/png', sizes: '512x512' }
            ]
        }
    },
    modules: [
        '@nuxt/content',
        '@nuxtjs/fontaine',
        'nuxt-font-loader',
        '@nuxtjs/robots',
        '@nuxt/image-edge',
        '@nuxtjs/color-mode',
        'nuxt-icons'
    ],
    fontLoader: {
        local: [
            {
                src: '/fonts/reenie-beanie-v16-latin-regular.woff2',
                family: 'Reenie Beanie',
                display: 'swap'
            },
            {
                src: '/fonts/noto-emoji-v34-emoji-regular.woff2',
                family: 'Noto Emoji',
                display: 'swap'
            }
        ]
    },
    css: ['@/assets/css/global.css']
})
