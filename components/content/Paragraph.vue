<template>
    <p v-if="props.isStatic === 'true'" class="paragraph">
        <ContentSlot :use="$slots.default" unwrap="p"/>
    </p>
    <p v-else class="paragraph" v-motion-slide-visible-once-bottom :delay="delay">
        <ContentSlot :use="$slots.default" unwrap="p"/>
    </p>
</template>

<script setup>
const props = defineProps({
    isStatic: {
        type: String,
        default: ''
    }
})
const delay = 200
</script>

<style>
.paragraph {
    font-size: clamp(1.875rem, 1.2039rem + 3.3557vw, 2.8125rem);;
    margin-bottom: clamp(3.75rem, 1.9603rem + 8.9485vw, 6.25rem);;
    color: var(--color-text);
    line-height: 1.6;
}

@media screen and (min-width: 767px) {
    .paragraph {
        text-align: justify;
    }
}

.paragraph span {
    white-space: nowrap;
}
</style>
