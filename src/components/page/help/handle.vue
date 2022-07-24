<script setup lang="ts">
import { useSearch } from '~/store/search';

type Props = {
  name: string;
  nim: string;
};

defineProps<Props>();

const store = useSearch();
const router = useRouter();

const redirectToNIM = (nim: string) => {
  store.query = nim;
  router.replace('/');
};
</script>

<template>
  <span>@</span>
  <span underline="~ dotted" cursor-pointer @click="redirectToNIM(nim)">{{ name }}</span>
</template>
