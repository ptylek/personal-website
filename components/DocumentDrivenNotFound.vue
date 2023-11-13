<template>
  <ContentRenderer
    v-if="error"
    :value="error"
  />
</template>

<script async setup lang="ts">
const { data: error } = await useAsyncData('error-data', () => queryContent('/_not-found').findOne())

if (error.value) {
  useContentHead(error.value)
}
</script>
