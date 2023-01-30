<template>
  <NuxtPage/>
</template>

<style>
:root {
  --page-max-width: 767px;
  --color-primary: #5740CE;
  --color-secondary: #FFFFFF;
  --color-text-light: #333333;
  --color-text-dark: var(--color-secondary);
  --color-text: var(--color-text-light);
  --color-background: var(--color-secondary);
}

body {
  margin: 0;
  background: linear-gradient(var(--color-background) 0 50%, var(--color-primary) 51% 100%);
  font-family: "Reenie Beanie", "Noto Emoji";
}
</style>