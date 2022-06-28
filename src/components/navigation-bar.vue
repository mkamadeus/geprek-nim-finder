<script setup lang="ts">
// refs
const isDark = useDark();
const toggle = useToggle(isDark);
</script>

<template>
  <div flex items-end space-x-1>
    <RouterLink to="/">
      <i-carbon-home w-5 h-5 cursor="pointer" />
    </RouterLink>
    <RouterLink to="/help">
      <i-carbon-information w-5 h-5 cursor="pointer" />
    </RouterLink>
    <RouterLink to="/settings">
      <i-carbon-settings w-5 h-5 cursor="pointer" />
    </RouterLink>
    <i-carbon-barrier text-sm mx-2 />
    <i-carbon-box w-5 h-5 cursor="pointer" />
    <!-- <i-carbon-table-split w-5 h-5 cursor="pointer" /> -->
    <template v-if="!isDark">
      <i-carbon-sun w-5 h-5 cursor="pointer" @click="toggle()" />
    </template>
    <template v-else>
      <i-carbon-moon w-5 h-5 cursor="pointer" @click="toggle()" />
    </template>
    <i-carbon-logo-github w-5 h-5 cursor="pointer" />
  </div>
</template>
