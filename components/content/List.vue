<template>
  <ul class="list mb-8">
    <slot />
  </ul>
</template>

<style>
.list > li {
  @apply p-4;
  @apply -mb-px;
  @apply border;
}
</style>