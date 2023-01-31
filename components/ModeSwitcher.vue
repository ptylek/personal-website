<template>
    <button class="mode-switcher" @click="setMode" aria-label="Mode switcher">
        <nuxt-icon v-if="!colorMode.unknown" :name="colorMode.preference" class="mode-switcher_icon" />
    </button>
</template>

<script setup>
const colorMode = useColorMode()
const setMode = () => {
    const modes = ['system', 'light', 'dark'];
    const index = modes.indexOf(colorMode.preference);
    const next = (index + 1) % modes.length;
    colorMode.preference = modes[next];
}
</script>

<style scoped>
.mode-switcher {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 2;
    background: var(--color-primary);
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    transition: right 0.3s ease-in;
}

.mode-switcher_icon {
    color: var(--color-secondary);
    font-size: 20px;
    margin-bottom: -0.0625em;
    display: block;
}

@media screen and (min-width: 768px) {
    .mode-switcher {
        right: 0;
    }
}
</style>