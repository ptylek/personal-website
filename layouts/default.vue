<template>
  <div class="relative bg-white dark:bg-dark z-10 mb-[518px] md:mb-[390px] min-h-screen">
    <Header />
    <div class="max-w-screen-md mx-auto px-5">
      <main class="pb-20 md:pb-6">
        <slot />
      </main>
    </div>
    <div class="absolute select-none text-purple right-0 top-[200px] sm:top-[72px] md:top-[72px] md:right-auto text-[9rem] md:text-[15rem] opacity-25">🐿️</div>
    <div class="absolute select-none text-purple bottom-0 right-0 text-[9rem] md:text-[15rem] opacity-25">🐢</div>
  </div>
  <Footer />
</template>
