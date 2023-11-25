<template>
  <div class="flex flex-col">
    <h1>Blog</h1>
    <ContentList path="/blog" v-slot="{ list }">
      <UCard
        v-for="article in list.filter(item => item._path !== '/blog')"
        :key="article._path"
      >
        <template #header>
          <h2 class="m-0 p-0">{{ article.title }}</h2>
          <small class="text-xs">{{ new Date(article.date).toDateString() }}</small>
        </template>
        <p 
          v-if="article?.excerpt?.children?.[0]?.children?.[0]?.value"
          v-html="article.excerpt?.children[0].children[0].value"
        />
        <UButton
          class="mt-4 text-indigo-600"
          variant="soft"
          trailing-icon="i-mdi-arrow-right-circle-outline"
          :to="article._path"
        >
          Read more
        </UButton>
      </UCard>
    </ContentList>
  </div>
</template>
