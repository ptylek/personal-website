<template>
  <header class="fixed top-0 w-full z-10 flex justify-between items-center p-4 bg-indigo-100 dark:bg-indigo-950 shadow-md">
    <Logo class="md:hidden" />
    <Navigation class="max-md:hidden" />
    <div class="hidden md:flex">
      <SocialButtons />
      <ModeSwitcher />
    </div>
    <UButton
      icon="i-mdi-menu"
      class="md:hidden"
      color="gray"
      size="xs"
      variant="ghost"
      @click="showMobileNavigation = true"
    >
      <span class="sr-only">Open mobile navigation</span>
    </UButton>
    <USlideover
      v-model="showMobileNavigation"
      class="md:hidden"
    >
      <div class="p-4">
        <UButton
          icon="i-mdi-menu-close"
          color="gray"
          size="xs"
          variant="ghost"
          class="absolute top-4 left-4"
          @click="closeMobileNavigation"
        >
          <span class="sr-only">Close mobile navigation</span>
        </UButton>
        <Navigation />
        <div class="flex justify-end mt-8">
          <ModeSwitcher @mode-switched="closeMobileNavigation"/>
          <SocialButtons />
        </div>
      </div>
    </USlideover>
  </header>
</template>

<script setup lang="ts">
const showMobileNavigation = ref(false)
const closeMobileNavigation = () => {
  showMobileNavigation.value = false
}
useRouter().afterEach(closeMobileNavigation)
</script>