<template>
    <p v-if="isStatic === 'true'" class="paragraph">
        <ContentSlot :use="$slots.default" unwrap="p"/>
    </p>
    <p v-else class="paragraph" v-motion-slide-visible-once-bottom :delay="delay">
        <ContentSlot :use="$slots.default" unwrap="p"/>
    </p>
</template>

<script setup>
defineProps({
    isStatic: {
        type: String,
        default: ''
    },
    delay: {
        type: String,
        default: '200'
    }
})
</script>

<style>
.paragraph {
    font-size: clamp(1.875rem, 1.2039rem + 3.3557vw, 2.8125rem);;
    margin-bottom: clamp(3.75rem, 1.9603rem + 8.9485vw, 6.25rem);;
    color: var(--color-text);
    line-height: 1.6;
}

.paragraph span {
    white-space: nowrap;
}

@media screen and (min-width: 768px) {
    .paragraph {
        text-align: justify;
    }
}
</style>
