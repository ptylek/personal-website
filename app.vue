<template>
  <div class="flex flex-col min-h-screen-16 min-h-screen-svh-16">
    <Header />
    <main class="w-full max-w-screen-lg mx-auto px-4 pt-4 pb-12 md:pt-10 grow">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
const { page } = useContent()
const title = computed(() => page.value?.title ? `${page.value?.title} - Pawel Tylek - Frontend Developer` : 'Pawel Tylek - Frontend Developer')
const description = computed(() => page.value?.description ? `${page.value?.description} - Personal website of Paweł Tylek` : 'Personal website of Paweł Tylek')

// Dynamically set title and description on page change
watch(() => page.value, () => {
  useHead({
    title: title.value,
    meta: [{ name: 'description', content: description.value }]
  })
})

// Head tags
useHead({
  title: title.value,
  htmlAttrs: { lang: 'en', class: 'mt-16' },
  bodyAttrs: {
    class: 'font-nunito text-black dark:text-white transition-colors duration-300 ease-in-out bg-white dark:bg-zinc-900'
  },
  meta: [
    // default
    { name: 'description', content: description.value },
    { name: 'keywords', content: 'paweł tylek, pawel tylek, ptylek, frontend, front-end, nuxt, headless, ecommerce, javascript, magento, dev, developer, programista, kraków' },
    { name: 'author', content: 'Paweł Tylek' },
    // pwa
    { name: 'theme-color', content: '#18181b'},
    { name: 'msapplication-TileColor', content: '#18181b' },
    // og
    { name: 'og:type', content: 'website' },
    { property: 'og:title', content: title.value },
    { property: 'og:description', content: description.value },
    { name: 'og:image', content: 'https://ptylek.com/og/og.jpg', key: 'og:image' },
    { name: 'og:image:type', content: 'image/jpeg' },
    { name: 'og:image:alt', content: 'Pawel Tylek - Frontend Developer' },
    { property: 'og:image:width', content: '900' },
    { property: 'og:image:height', content: '480' },
    // twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@ptylek' },
    { name: 'twitter:creator', content: '@ptylek' }
  ],
  link: [
    { rel: 'preload', as: 'font', type: 'font/woff2', crossorigin: '', href: '/fonts/nunito-v26-latin-regular.woff2' },
    // icons
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5740CE' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'},
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'},
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'manifest', href: '/site.webmanifest' }      
  ]
})
</script>

<style>
h1, h2, h3, h4, h5, h6 {
  @apply font-bold;
  @apply text-indigo-500;
  @apply py-2;
}

h1, h2, h3 {
  @apply mt-8;
  @apply mb-4;
}

h1 {
  @apply text-4xl;
  @apply md:text-5xl;
  @apply mb-8;
}

h2 {
  @apply text-2xl;
  @apply md:text-3xl;
}
</style>