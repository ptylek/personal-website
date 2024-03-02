<script setup lang="ts">
// BUG: nuxt/content (https://github.com/nuxt/content/issues/2062)
// _not-found query api is not generated during npm run generate as the route is not prerendered
// adding this route with queryContent _not-found makes sure it is generated properly
const { data: error } = await useAsyncData('error-data', () => queryContent('/_not-found').findOne())
</script>