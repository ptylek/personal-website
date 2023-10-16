<template>
  <button @click="setMode" class="w-10 h-10 flex justify-center items-center" aria-label="Mode Switcher">
    <Emoji :icon="emojiMap[colorMode.preference]" />
  </button>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const setMode = () => {
  const modes = ['system', 'light', 'dark'];
  const index = modes.indexOf(colorMode.preference);
  const next = (index + 1) % modes.length;
  colorMode.preference = modes[next];
}

const emojiMap: { [key: string]: string } = {
  'system': '💻',
  'light': '☀️',
  'dark': '🌙'
}
</script>
