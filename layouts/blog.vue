<template>
  <div>
    <h1>Blog</h1>
    <div class="flex flex-col gap-8">
      <ContentList path="/blog" v-slot="{ list }">
        <UCard
          v-for="article in list.filter(item => item._path !== '/blog').sort((itemA, itemB) => new Date(itemA.date) > new Date(itemB.date) ? -1 : 1 )"
          :key="article._path"
        >
          <template #header>
            <NuxtLink :to="article._path"><h2 class="m-0 p-0">{{ article.title }}</h2></NuxtLink>
            <small class="text-xs">{{ new Date(article.date).toLocaleDateString('en-UK') }}</small>
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
  </div>
</template>
