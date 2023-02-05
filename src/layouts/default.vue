<script setup lang="ts">
useDark();

const { meta } = useRoute();
</script>

<template>
  <div container mx-auto p="6 lg:x-64" min-h-screen>
    <!-- HEADER -->
    <main flex="~ col" justify-center>
      <router-view />
    </main>
  </div>
</template>
