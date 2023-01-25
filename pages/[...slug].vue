<template>
    <main class="main">
        <ContentDoc>
            <template #not-found>
                <h1>Page not found</h1>
            </template>
        </ContentDoc>
    </main>
</template>
  
<style scoped>
.main {
    max-width: 767px;
    margin: 0 auto;
    padding: clamp(2.5rem, -2.8691rem + 26.8456vw, 10rem) 20px;
}
</style>