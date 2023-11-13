<template>
  <UButton
    v-for="button in buttons"
    :to="button.url"
    target="_blank"
    :icon="button.icon"
    size="sm"
    color="gray" 
    variant="ghost"
    :aria-label="`Go to ${button.title}`"
  >
    <span class="sr-only">{{  button.title }}</span>
  </UButton>
</template>

<script setup lang="ts">
const buttons = [
  {
    title: 'GitHub',
    url: 'https://github.com/ptylek',
    icon: 'i-mdi-github'
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/pawel-tylek/',
    icon: 'i-mdi-linkedin'
  }
]
</script>