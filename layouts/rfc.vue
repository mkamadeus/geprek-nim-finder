<script setup lang="ts">
useDark();
</script>

<template>
  <article container mx-auto bg="white dark:gray-900" min-h-screen prose="~  teal dark:white" p-6 text="lg:lg">
    <slot />
  </article>
</template>
