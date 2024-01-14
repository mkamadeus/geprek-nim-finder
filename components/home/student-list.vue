<script setup lang="ts">
// const store = useSearch();

// const SPECIALS = ['13518035', '13516030', '18217006', '18219075', '13519101', '13520029'];

// get result on mount
// onMounted(() => {
//   if (store.query.length >= 2) {
//     store.getResult();
//   }
// });

// reset cache/localstorage
// const { t } = useI18n();
</script>

<template>
  <div flex="~ col" justify-center v-if="store.result.length !== 0">
    <TransitionGroup name="list" tag="ul">
      <template v-for="s in store.result.slice(0, store.limit)" :key="s[0].majorID || s[0].tpbID">
        <StudentItem :student="s[0]" :isSpecial="SPECIALS.includes(s[0].majorID!)" />
      </template>
    </TransitionGroup>
    <div flex="~" justify-center mt-2 mx-auto w-full v-if="store.limit < store.result.length">
      <a bg="teal-400 dark:gray-700/70" p="x-4 y-2" cursor="pointer" select-none text-white text-center text-sm rounded
        @click="store.increaseLimit(5)">Geprek lagi!</a>
    </div>
  </div>
</template>
