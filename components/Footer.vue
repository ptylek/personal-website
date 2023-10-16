<template>
  <footer class="fixed bottom-0 h-[518px] md:h-[390px] w-full bg-purple text-white flex flex-col justify-end items-center">
    <div class="max-w-screen-md mx-auto px-5 pt-12 pb-8 flex flex-col md:flex-row w-full items-center justify-between">
      <Avatar />
      <ContentRenderer v-if="links" :value="links" class="text-lg md:text-xl md:flex-65 text-center md:text-left" />
    </div>
    <div class="text-center py-4">
      Made with <Emoji icon="💜"/><br />Copyright {{ currentYear }} Paweł Tylek
    </div>
  </footer>
</template>

<script async setup lang="ts">
const { data: links } = await useAsyncData('links-data', () => queryContent('/_footer-links').findOne())
const currentYear = new Date().getFullYear()
</script>
