<template>
    <div class="not-found">
        <p class="not-found_text">
            <ContentSlot :use="$slots.default" unwrap="p"/>
        </p>
    </div>
</template>

<style scoped>
.not-found {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
<style>
.not-found_text {
    text-align: center;
    font-size: 60px;
}

.not-found_text strong {
    font-size: 100px;
    display: block;
    margin-bottom: 30px;
}

.not-found_text span {
    font-size: 120px;
    display: block;
    margin-top: 30px;
    color: var(--color-primary);
}
</style>