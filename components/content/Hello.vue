<template>
    <div class="hello">
        <ContentSlot :use="$slots.default" unwrap="p"/>
    </div>
</template>

<style>
.hello {
    font-size: clamp(5rem, 3.6577rem + 6.7114vw, 6.875rem);
    color: var(--color-primary);
    font-weight: 700;
    white-space: nowrap;
    margin-bottom: 25px;
}

.hello span {
    font-size: clamp(4.625rem, 3.6407rem + 4.9217vw, 6rem);
    animation-name: wave-animation;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    transform-origin: 70% 70%;
    display: inline-block;
}

@keyframes wave-animation {
    0% { transform: rotate( 0.0deg) }
    10% { transform: rotate(14.0deg) }
    20% { transform: rotate(-8.0deg) }
    30% { transform: rotate(14.0deg) }
    40% { transform: rotate(-4.0deg) }
    50% { transform: rotate(10.0deg) }
    60% { transform: rotate( 0.0deg) }
    100% { transform: rotate( 0.0deg) }
}
</style>