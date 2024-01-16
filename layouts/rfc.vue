<script setup lang="ts">
useDark()
</script>

<template>
  <article
    bg="white dark:gray-900"
    prose="~  teal dark:white"
    mx-auto
    min-h-screen
    p-6
    container
    text="lg:lg"
  >
    <slot />
  </article>
</template>
