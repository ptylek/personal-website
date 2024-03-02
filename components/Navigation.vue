<template>
  <nav>
    <ContentNavigation v-slot="{ navigation }">
      <ul class="flex flex-col md:flex-row items-end md:items-center gap-2">
        <li
          v-for="link of navigation.filter(link => link._path !== '/not-found')"
          :key="link._path"
        >
          <Logo v-if="link._path === '/'" />
          <ULink
            v-else
            :to="link._path"
            :aria-label="`Go to ${link.title}`"
            class="lowercase px-2.5 py-1.5"
            :class="{'text-indigo-500': isActiveLink(link._path)}"
          >
            {{ link.title }}
          </ULink>
        </li>
      </ul>
    </ContentNavigation>
  </nav>
</template>

<script setup lang="ts">
const isActiveLink = (path: string) => useRoute().fullPath.includes(path)
</script>