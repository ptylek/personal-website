<template>
  <UContainer class="mb-4">
    <nuxt-img
      :src="src"
      format="webp"
      class="mx-auto"
      :alt="alt"
      :loading="loading ? 'lazy' : undefined"
    />
  </UContainer>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  src: string
  alt?: string
  loading?: boolean
}>(), {
  alt: undefined,
  loading: true
})
</script>