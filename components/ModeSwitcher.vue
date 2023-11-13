<template>
  <ClientOnly>
    <UButton
      :icon="isDark ? 'i-mdi-weather-night' : 'i-mdi-weather-sunny'"
      size="sm"
      color="gray"
      variant="ghost"
      aria-label="Theme"
      @click="handleClick"
    />
    <template #fallback>
      <div class="w-8 h-8" />
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (event: 'mode-switched'): void
}>()
const colorMode = useColorMode()
const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
const handleClick = () => {
  isDark.value = !isDark.value
  emit('mode-switched')
}
</script>
