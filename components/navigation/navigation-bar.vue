<script setup lang="ts">
// refs
const isDark = useDark();
const toggle = useToggle(isDark);

const { path } = useRoute();
</script>

<template>
  <div flex items-end items-center space-x-1 text="gray-300 dark:gray-500">
    <!-- NAVIGATION -->
    <RouterLink
      to="/"
      class="nav-button"
      :class="{ 'text-teal-500 dark:text-teal-300': path === '/' }"
    >
      <i-carbon-home w="6 lg:7" h="6 lg:7" cursor="pointer" />
    </RouterLink>
    <RouterLink to="/help" class="nav-button" :class="{ 'nav-button-active': path === '/help' }">
      <i-carbon-information w="6 lg:7" h="6 lg:7" cursor="pointer" />
    </RouterLink>
    <RouterLink
      to="/settings"
      class="nav-button"
      :class="{ 'nav-button-active': path === '/settings' }"
    >
      <i-carbon-settings w="6 lg:7" h="6 lg:7" cursor="pointer" />
    </RouterLink>
    <!-- BARRIER -->
    <i-carbon-barrier w="6 lg:7" h="6 lg:7" mx-2 />
    <!-- MISC -->
    <a v-if="!isDark" class="nav-button text-teal-500 dark:text-teal-300" @click="toggle()">
      <i-carbon-sun w="6 lg:7" h="6 lg:7" cursor="pointer" />
    </a>
    <a v-else class="nav-button text-teal-500 dark:text-teal-300" @click="toggle()">
      <i-carbon-moon w="6 lg:7" h="6 lg:7" cursor="pointer" />
    </a>
    <a
      href="https://github.com/mkamadeus/geprek-nim-finder"
      target="__blank"
      class="nav-button text-teal-500 dark:text-teal-300"
    >
      <i-carbon-logo-github w="6 lg:7" h="6 lg:7" cursor="pointer" />
    </a>
  </div>
</template>
