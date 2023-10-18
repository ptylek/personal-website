<template>
  <ContentList path="/blog" v-slot="{ list }">
    <NuxtLink 
      v-for="article in list"
      :key="article._path"
      :to="article._path"
      class="group"
    >
      <h3 class="group-hover:underline text-purple font-bold text-4xl md:text-5xl mb-6">{{ article.title }}</h3>
      <p>{{ article.description }}</p>
    </NuxtLink>
  </ContentList>
</template>
