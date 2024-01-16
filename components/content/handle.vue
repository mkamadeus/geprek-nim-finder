<script setup lang="ts">
type Props = {
  name: string;
  nim: string;
};

defineProps<Props>()

const store = useSearch()
const router = useRouter()

const redirectToNIM = (nim: string) => {
  store.query = nim
  router.replace('/')
}
</script>

<template>
  <span font-mono>
    <span>@</span>
    <span underline="~ dotted" cursor-pointer @click="redirectToNIM(nim)">{{ name }}</span>
  </span>
</template>
