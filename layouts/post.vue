<template>
  <div class="flex flex-col relative">
    <small class="absolute">{{ date }}</small>
    <h1>{{ page.title }}</h1>
    <span class="uppercase text-sm font-bold mb-2">Table of contents</span>
    <UVerticalNavigation :links="links" class="mb-12" />
    <ContentSlot />
  </div>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: { class: 'scroll-smooth' }
})
const { page } = useContent()
const route = useRoute()
const date = new Date(page.value.date).toDateString()
const links = page.value?.body?.toc?.links?.map((link: { id: string, depth: number, text: string }) => {
  return {
    label: link.text,
    to: route.path + '#' + link.id
  }
})
</script>

<style>
a[href^="#"] > span[class^="i-mdi"] {
  @apply relative;
  @apply top-1;
}
</style>