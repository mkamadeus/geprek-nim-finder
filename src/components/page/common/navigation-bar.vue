<script setup lang="ts">
// refs
const isDark = useDark();
const toggle = useToggle(isDark);
</script>

<template>
  <div flex items-end space-x-1>
    <!-- NAVIGATION -->
    <RouterLink to="/" transition="~ ease-out" transform="~ translate-y-0 hover:translate-y--1">
      <i-carbon-home w="5 lg:6" h="5 lg:6" cursor="pointer" />
    </RouterLink>
    <RouterLink to="/help" transition="~ ease-out" transform="~ translate-y-0 hover:translate-y--1">
      <i-carbon-information w="5 lg:6" h="5 lg:6" cursor="pointer" />
    </RouterLink>
    <RouterLink
      to="/settings"
      transition="~ ease-out"
      transform="~ translate-y-0 hover:translate-y--1"
    >
      <i-carbon-settings w="5 lg:6" h="5 lg:6" cursor="pointer" />
    </RouterLink>
    <!-- BARRIER -->
    <i-carbon-barrier text-sm mx-2 />
    <!-- MISC -->
    <!-- <i-carbon-box w="5 lg:6" h="5 lg:6" cursor="pointer" /> -->
    <!-- <i-carbon-table-split w="5 lg:6" h="5 lg:6" cursor="pointer" /> -->
    <a v-if="!isDark" transition="~ ease-out" transform="~ translate-y-0 hover:translate-y--1">
      <i-carbon-sun w="5 lg:6" h="5 lg:6" cursor="pointer" @click="toggle()" />
    </a>
    <a v-else transition="~ ease-out" transform="~ translate-y-0 hover:translate-y--1">
      <i-carbon-moon w="5 lg:6" h="5 lg:6" cursor="pointer" @click="toggle()" />
    </a>
    <a
      href="https://github.com/mkamadeus/geprek-nim-finder"
      target="__blank"
      transition="~ ease-out"
      transform="~ translate-y-0 hover:translate-y--1"
    >
      <i-carbon-logo-github w="5 lg:6" h="5 lg:6" cursor="pointer" />
    </a>
  </div>
</template>
