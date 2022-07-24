<script setup lang="ts">
import { useSearch } from './store/search';
import { useSettings } from './store/settings';

// initiate store
useSettings();
useSearch();

console.log('🍗 🔥 Ready to geprek!');
</script>

<template>
  <router-view />
</template>
