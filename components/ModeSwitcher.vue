<template>
  <ColorScheme>
    <button @click="setMode" class="w-10 h-10 flex justify-center items-center" aria-label="Mode Switcher">
        <nuxt-icon :name="colorMode.preference" class="text-dark dark:text-white" />
    </button>
  </ColorScheme>
</template>

<script setup>
const colorMode = useColorMode()
const setMode = () => {
    const modes = ['light', 'dark'];
    const index = modes.indexOf(colorMode.preference);
    const next = (index + 1) % modes.length;
    colorMode.preference = modes[next];
}
</script>
