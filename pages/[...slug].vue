<template>
    <main class="main">
        <ContentDoc class="main_content inner">
            <template #not-found>
                <ContentDoc class="main_content inner" path="/_404" />
            </template>
        </ContentDoc>
    </main>
    <footer class="footer">
        <div class="footer_content inner">
            <div class="footer_photo">

            </div>
            <ContentRendererMarkdown class="footer_links" :value="data" />
        </div>
    </footer>
</template>

<script setup lang="ts">
const { data } = await useAsyncData('page-data', () => queryContent('/_footer').findOne())
</script>

<style>
.main {
    position: relative;
    z-index: 2;
    background: var(--color-background);
    margin-bottom: 500px;
    min-height: 100vh;
    box-shadow: 0px 0px 15px 10px rgba(0,0,0,0.15);
}

.main_content {
    padding: clamp(2.5rem, -2.8691rem + 26.8456vw, 10rem) 20px clamp(2.5rem, 0.7103rem + 8.9485vw, 5rem);
}

.inner {
    max-width: var(--page-max-width);
    margin: 0 auto;
}

.footer {
    position: fixed;
    bottom: 0;
    height: 500px;
    background: var(--color-primary);
    font-size: 100px;
    color: var(--color-background);
    width: 100%;
}

.footer_content {
    display: grid;
    padding: 60px 0;
}
</style>