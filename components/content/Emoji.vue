<template>
  <nuxt-icon :name="`noto-emoji/u${unicode}`" />
</template>

<script setup lang="ts">
const props = defineProps<{
  icon: string
}>()

/**
 * emojiunicode
 */
 const emojiUnicode = (input: string) => {
    if (input.length === 1) {
        return input.charCodeAt(0)
    }
    let comp = (
        (input.charCodeAt(0) - 0xD800) * 0x400
      + (input.charCodeAt(1) - 0xDC00) + 0x10000
    )
    if (comp < 0) {
        return input.charCodeAt(0)
    }
    return comp
}


const unicode = computed(() => {
  return emojiUnicode(props.icon).toString(16)
})
</script>

<style>
.nuxt-icon svg {
  display: inline-block;
}
</style>