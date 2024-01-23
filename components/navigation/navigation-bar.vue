<script setup lang="ts">
// refs
const isDark = useDark()
const toggle = useToggle(isDark)

const route = useRoute()

const navigations = [
  {
    path: '/',
    icon: 'i-carbon-home'
  },
  {
    path: '/help',
    icon: 'i-carbon-information'
  },
  {
    path: '/settings',
    icon: 'i-carbon-settings'
  }
]
</script>

<template>
  <div flex items-end items-center space-x-1 text="gray-300 dark:gray-500">
    <!-- NAVIGATION -->
    <NuxtLink v-for="{ path, icon } in navigations" :key="`navigation-${path}`" :to="path" class="nav-button" :class="{ 'nav-button-active': route.path === path }">
      <div :class="icon" w="6 lg:7" h="6 lg:7" cursor="pointer" />
    </NuxtLink>
    <!-- BARRIER -->
    <div class="i-carbon-barrier" w="6 lg:7" h="6 lg:7" mx-2 />
    <!-- MISC -->
    <ClientOnly>
      <a v-if="!isDark" class="text-teal-500 dark:text-teal-300 nav-button" @click="toggle()">
        <div class="i-carbon-sun" w="6 lg:7" h="6 lg:7" cursor="pointer" />
      </a>
      <a v-else class="text-teal-500 dark:text-teal-300 nav-button" @click="toggle()">
        <div class="i-carbon-moon" w="6 lg:7" h="6 lg:7" cursor="pointer" />
      </a>
    </ClientOnly>
    <NuxtLink
      to="https://github.com/mkamadeus/geprek-nim-finder"
      target="__blank"
      class="text-teal-500 dark:text-teal-300 nav-button"
    >
      <div class="i-carbon-logo-github" w="6 lg:7" h="6 lg:7" cursor="pointer" />
    </NuxtLink>
  </div>
</template>
