<template>
  <div class="flex flex-col md:flex-row md:justify-between">
    <div class="md:basis-1/2">
      <h1 class="relative">Hello there! <UIcon name="i-mdi-hand-wave-outline" class="animate-waving-hand absolute ml-4 bottom-3"/></h1>
      <ContentSlot />
    </div>
    <div class="md:basis-1/3 mt-12 md:mt-0 flex items-center justify-center">
      <Avatar />
    </div>
  </div>
</template>