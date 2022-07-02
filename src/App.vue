<script setup lang="ts">
import studentData from '~/json/data.json';
import { useSearch } from './store/search';
import { useSettings } from './store/settings';

useSettings();
useSearch();

console.log('Ready to geprek!');

useStorage('geprek-version', '3.0.0');
const data = useStorage('geprek-data', studentData);
</script>

<template>
  <router-view />
</template>
