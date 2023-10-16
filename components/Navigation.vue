<template>
  <ContentNavigation v-slot="{ navigation }">
    <ul>
      <li
        v-for="link of navigation"
        :key="link._path"
      >
        <NuxtLink
          :to="link._path"
          :aria-label="`Go to ${link.navTitle || link.title}`"
        >
          <Emoji :icon="link.icon"/>
          {{ link.navTitle || link.title }}
        </NuxtLink>
      </li>
    </ul>
  </ContentNavigation>
</template>
