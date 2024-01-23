<script setup lang="ts">
const search = useSearch()
const { result } = storeToRefs(search)

const SPECIALS = ['13518035', '13516030', '18217006', '18219075', '13519101', '13520029']

// get result on mount
onMounted(() => {
  // if (search.query.length >= 2) {
  //   search.getResult();
  // }
})

// reset cache/localstorage
// const { t } = useI18n();
// console.log(search.result)
</script>

<template>
  <div v-if="result.length !== 0" flex="~ col" justify-center space-y-4>
    <TransitionGroup name="list" tag="ul">
      <template v-for="s in result" :key="s.majorID || s.tpbID">
        <HomeStudentItem :student="s" :is-special="SPECIALS.includes(s.majorID!)" />
      </template>
    </TransitionGroup>
    <div
      v-if="search.pagination.total !== search.pagination.showing"
      flex="~"
      mx-auto
      mt-2
      w-full
      justify-center
    >
      <button
        bg="teal-400 dark:gray-700/70"
        p="x-4 y-2"
        cursor="pointer"
        select-none
        rounded
        text-center
        text-sm
        text-white
        @click="search.fetchNextPage()"
      >
        Geprek lagi!
      </button>
    </div>
  </div>
</template>
