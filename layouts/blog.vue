<template>
  <ContentList path="/blog" v-slot="{ list }">
    <UCard
      v-for="article in list.filter(item => item._path !== '/blog')"
      :key="article._path"
    >
      <template #header>
        <h2 class="m-0 p-0">{{ article.title }}</h2>
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
</template>
