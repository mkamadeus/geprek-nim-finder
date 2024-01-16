<script setup lang="ts">
type Props = {
  inspirations: {
    alias: string
    nim: string
  }[]
}
defineProps<Props>()

</script>

<template>
  <template v-for="{alias, nim} in inspirations" :key="`inspiration-${alias}-${nim}`">
    <Handle :name="alias" :nim="nim" />&nbsp;
  </template>
</template>
