<template>
    <div class="hello">
        <ContentSlot :use="$slots.default" unwrap="p"/>
    </div>
</template>

<style>
.hello {
    font-size: clamp(6.25rem, 4.9077rem + 6.7114vw, 8.125rem);
    color: var(--color-primary);
    white-space: nowrap;
    margin-bottom: clamp(1.5625rem, -0.0035rem + 7.83vw, 3.75rem);
}

.hello span {
    font-size: clamp(3.75rem, 2.6314rem + 5.5928vw, 5.3125rem);
    animation-name: wave-animation;
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
    transform-origin: 70% 70%;
    display: inline-block;
    position: relative;
    top: -10px;
    left: -20px;
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