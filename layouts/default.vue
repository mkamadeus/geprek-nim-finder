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

type NavigationHeader = {
  title: string
  subtitle: string
}

const navigations: Record<string, NavigationHeader> = {
  '/': {
    title: 'Geprek ITB NIM Finder',
    subtitle: `Digeprek oleh ${geprek[geprekIndex]}.`
  },
  '/help': {
    title: 'Bantuan',
    subtitle: 'Bagi kalian yang suka ayam geprek.'
  },
  '/settings': {
    title: 'Pengaturan',
    subtitle: 'Gepreknya level berapa?'
  }
}

const route = useRoute()
const navHeader = computed(() => (navigations[route.path] ? navigations[route.path] : navigations['/']))
</script>

<template>
  <div p="6 lg:x-64" mx-auto min-h-screen container>
    <!-- HEADER -->
    <NavigationHeader :title="navHeader.title" :subtitle="navHeader.subtitle" />
    <!-- <template v-if="$route.path === '/'">
      <NavigationHeader title="Geprek NIM Finder" :subtitle="`Digeprek oleh ${geprek[geprekIndex]}.`" />
    </template>
    <template v-else>
      <NavigationHeader :title="$route.path.slice(1)" :subtitle="$route.path.slice(1)" />
    </template> -->
    <main flex="~ col" justify-center>
      <slot />
    </main>
  </div>
</template>
