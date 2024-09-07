<template>
  <footer class="w-full bg-indigo-100 dark:bg-indigo-950 md:text-center px-4 py-2 text-xs">
    Copyright Pawel Tylek {{ currentYear }} 
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
