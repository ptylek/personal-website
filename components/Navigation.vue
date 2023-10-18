<template>
  <ContentNavigation v-slot="{ navigation }">
    <ul class="flex">
      <li
        v-for="link of navigation"
        class="mr-4 last:mr-0"
        :key="link._path"
      >
        <NuxtLink
          :to="link._path"
          :aria-label="`Go to ${link.navTitle || link.title}`"
        >
          <Emoji
            :icon="link.icon"
            class="mr-1"/>
          <span :class="{ 'underline': link._path === '/' ? $route.path === link._path : $route.path.includes(link._path) }" >
            {{ link.navTitle || link.title }}
          </span>
        </NuxtLink>
      </li>
    </ul>
  </ContentNavigation>
</template>
