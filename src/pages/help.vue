<script setup lang="ts">
import c from '~/json/codes.json';
import m from '~/json/majors.json';
import Features from '~/components/page/help/features.vue';

const codes = c as { [key: string]: string };
const majors = m as { [key: string]: string };
</script>

<template>
  <!-- HEADER -->
  <NavigationHeader title="Bantuan" subtitle="Bagi kalian yang suka ayam geprek." />
  <!-- MAIN -->
  <main flex="~ col" justify-center text="sm gray-700 dark:gray-100">
    <Credits />
    <Features />
  </main>
</template>
