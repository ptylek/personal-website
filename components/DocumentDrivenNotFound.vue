<template>
  <ContentRenderer v-if="error" :value="error" />
</template>

<script async setup lang="ts">
const { data: error } = await useAsyncData('error-data', () => queryContent('/_not-found').findOne())

useHead({
  title: error.value?.title || 'Pawel Tylek Frontend Developer - Page not found'
})
</script>
