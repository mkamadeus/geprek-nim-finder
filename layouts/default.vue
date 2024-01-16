<script setup lang="ts">
const geprek = [
  'Ayam Geprek Freedom',
  'Krisbar Gemesya',
  'Krisbar Disitu',
  'Ayam Geprek Senbu',
  'I Am Geprek Senbu',
  'Ayam Geprek Kepribon',
  'Ayam Geprek Koplak'
]

// randomize geprek
const geprekIndex = Math.floor(Math.random() * geprek.length)
const { path } = useRoute()
</script>

<template>
  <div p="6 lg:x-64" mx-auto min-h-screen container>
    <!-- HEADER -->

    <template v-if="path === '/'">
      <NavigationHeader title="Geprek NIM Finder" :subtitle="`Digeprek oleh ${geprek[geprekIndex]}.`" />
    </template>
    <template v-else>
      <NavigationHeader :title="path.slice(1)" :subtitle="path.slice(1)" />
    </template>
    <main flex="~ col" justify-center>
      <slot />
    </main>
  </div>
</template>
