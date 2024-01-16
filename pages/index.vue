<script setup lang="ts">

const { data: student } = await useFetch('/api/search', {
  method: 'post',
  body: { nim: '13518035' }
})
</script>

<template>
  <!-- MAIN -->
  <main flex="~ col" justify-center class="not-prose">
    <HomeSearchBar />
    <HomeSearchStatus />
    <HomeStudentList />
  </main>
</template>
