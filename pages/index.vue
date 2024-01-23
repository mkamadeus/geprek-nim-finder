<script setup lang="ts">

const { data: student } = await useFetch('/api/search', {
  method: 'post',
  body: { nim: '13518035' }
})
</script>

<template>
  <!-- MAIN -->
  <section flex="~ col" justify-center>
    <HomeSearchBar />
    <HomeSearchStatus />
    <HomeStudentList />
  </section>
</template>
