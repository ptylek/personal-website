<template>
  <ContentNavigation v-slot="{ navigation }">
    <ul>
      <li
        v-for="link of navigation"
        :key="link._path"
      >
        <NuxtLink
          :to="link._path"
          class="text-dark dark:text-white"
          :aria-label="`Go to ${link.navTitle || link.title}`"
        >
          {{ link.icon }}
          {{ link.navTitle || link.title }}
        </NuxtLink>
      </li>
    </ul>
  </ContentNavigation>
</template>
