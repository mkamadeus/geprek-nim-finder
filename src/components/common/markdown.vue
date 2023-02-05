<script setup lang="ts">
import geprek from '~/constants/geprek';

type Props = {
  frontmatter: Record<string, unknown>;
};
const { frontmatter } = defineProps<Props>();

// randomize geprek
const geprekIndex = Math.floor(Math.random() * geprek.length);
const { path } = useRoute();
const { t } = useI18n();
</script>

<template>
  <template v-if="path === '/'">
    <NavigationHeader
      :title="t('home.title')"
      :subtitle="`${t('home.subtitlePrefix')} ${geprek[geprekIndex]}.`"
    />
  </template>
  <template v-else>
    <NavigationHeader
      :title="t(`${path.slice(1)}.title`)"
      :subtitle="t(`${path.slice(1)}.subtitle`)"
    />
  </template>
  <div class="prose" w="full" min-w="full">
    <slot />
  </div>
</template>
