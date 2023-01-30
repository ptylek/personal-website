<template>
    <div class="avatar">
        <div class="avatar_circle"></div>
        <img src="/images/avatar-transparent.png" class="avatar_image" alt="Avatar" loading="lazy" width="180" height="185"/>
    </div>
</template>

<style scoped>
.avatar {
    position: relative;
    display: inline-flex;
}

.avatar_circle {
    width: 230px;
    height: 230px;
    background-color: var(--color-background);
    border-radius: 50%;
}

.avatar_image {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 6px 4px -4px black;
}

</style>