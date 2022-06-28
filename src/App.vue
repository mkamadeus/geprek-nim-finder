<script setup lang="ts">
import studentData from '~/json/data_13_21.json';

const version = useStorage('geprek-version', '3.0.0');
</script>

<template>
  <router-view />
</template>
