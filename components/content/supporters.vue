<script setup lang="ts">
type Props = {
  supporters: {
    alias: string
    nim: string
    reason: string
  }[]
}
defineProps<Props>()

</script>

<template>
  <ul my-1 pl-6>
    <li v-for="{alias, nim, reason} in supporters" :key="`supporter-${alias}-${nim}`" my-1 list-disc>
      <Handle :name="alias" :nim="nim" /> ({{ reason }})
    </li>
  </ul>
</template>
