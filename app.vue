<script setup lang="ts">
useSearch()
useDark()

// eslint-disable-next-line no-console
console.info('🍗 🔥 Ready to geprek!')
</script>

<template>
  <NuxtLayout bg="" font="body">
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html {
  --at-apply: antialiased;
}
html.dark {
  overflow-y: scroll;
  --at-apply: bg-gray-900;
}

h1, h2, h3, h4, h5, h6 {
  --at-apply: font-header;
}
</style>
