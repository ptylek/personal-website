<template>
    <p v-if="props.isStatic === 'true'" class="paragraph">
        <ContentSlot :use="$slots.default" unwrap="p"/>
    </p>
    <p v-else class="paragraph" v-motion-slide-visible-once-bottom :delay="50">
        <ContentSlot :use="$slots.default" unwrap="p"/>
    </p>
</template>

<script setup>
const props = defineProps({
    isStatic: {
        type: String,
        default: ''
    }
});
</script>

<style>
.paragraph {
    font-size: clamp(1.625rem, 1.3565rem + 1.3423vw, 2rem);
    margin-bottom: clamp(2.5rem, 0.7103rem + 8.9485vw, 5rem);
    color: var(--color-text);
    line-height: 1.65;
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
