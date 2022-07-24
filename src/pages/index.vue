<script setup lang="ts">
import geprek from '~/constants/geprek';
import NavigationHeader from '~/components/page/common/navigation-header.vue';

// randomize geprek
const geprekIndex = Math.floor(Math.random() * geprek.length);
</script>

<template>
  <!-- HEADER -->
  <NavigationHeader
    title="Geprek ITB NIM Finder"
    :subtitle="`Digeprek oleh ${geprek[geprekIndex]}.`"
  />
  <!-- MAIN -->
  <main flex="~ col" justify-center>
    <SearchBar />
    <StudentList />
  </main>
</template>
