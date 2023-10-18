<template>
  <div class="relative bg-white dark:bg-dark text-dark dark:text-white z-10 mb-[518px] md:mb-[390px] min-h-screen transition-colors duration-300 ease-in-out">
    <Header />
    <div class="max-w-screen-md mx-auto px-5">
      <main class="pb-20 md:pb-6">
        <slot />
      </main>
    </div>
    <div class="animate-float absolute select-none text-purple right-0 top-[200px] sm:top-[72px] md:top-[105px] md:right-auto text-[9rem] md:text-[15rem] opacity-25"><Emoji icon="🫠"/></div>
    <div class="animate-float absolute select-none text-purple bottom-0 right-0 text-[9rem] md:text-[15rem] opacity-25"><Emoji icon="🎈"/></div>
  </div>
  <Footer />
</template>

<style>
.animate-float {
  animation-name: float;
  animation-duration: 3s;
  animation-delay: 3.5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

@keyframes float {
	0% { transform: translate(0, 0px) }
  50% { transform: translate(0, 15px) }
  100% { transform: translate(0, -0px) }   
}
</style>