<template>
    <main class="main">
        <ContentDoc class="main_content">
            <template #not-found>
                <ContentRendererMarkdown v-if="error" class="main_content" :value="error" />
            </template>
        </ContentDoc>
    </main>
</template>

<script setup>
const { data:error } = await useAsyncData('error-data', () => queryContent('/_not-found').findOne())
</script>

<style scoped>
.main {
    position: relative;
    z-index: 1;
    background: var(--color-background);
    margin-bottom: 650px;
    min-height: 100vh;
    box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.15);
}

@media screen and (min-width: 768px) {
    .main {
        margin-bottom: 450px;
    }
}
</style>

<style>
.main_content {
    padding: clamp(2.5rem, -2.8691rem + 26.8456vw, 10rem) 20px clamp(2.5rem, 0.7103rem + 8.9485vw, 5rem);
    max-width: var(--page-max-width);
    margin: 0 auto;
}
</style>