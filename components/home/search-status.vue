<script setup lang="ts">
// import { useSearch } from '~/stores/search';

// const { t } = useI18n();
const search = useSearch()

// status
const isIdle = computed(
  () => !search.isLoading && search.result.length === 0 && search.query.length <= 2
)
const isLoading = computed(() => search.isLoading)
const isShowing = computed(
  () => !search.isLoading && search.result.length !== 0
)
const isNone = computed(
  () => !search.isTyping && !search.isLoading && search.result.length === 0 && search.query.length > 2
)
</script>

<template>
  <!-- WHEN IDLE -->
  <div mb-3>
    <div v-if="isIdle" text="center gray-400/70 xs" italic>
      <div>Hasil pencarian akan keluar di sini. v3.0.0-rc.</div>
      <div>
        Data kurang lengkap?
        <NuxtLink underline="~ dotted" cursor-pointer href="https://github.com/mkamadeus">
          Hubungi pengembang.
        </NuxtLink>
      </div>
    </div>
    <!-- WHEN SHOWING -->
    <div v-if="isShowing" text="center gray-400/70 xs" italic>
      Menunjukkan {{ search.pagination.showing }}
      dari {{ search.pagination.total }}
      hasil.
    </div>
    <!-- WHEN NO RESULT -->
    <div
      v-if="isNone"
      text="center gray-400/70 xs"
      flex="~ col"
      items-center
      justify-center
      italic
      space-y-2
    >
      <div>Tidak ditemukan apa-apa. Geprek lagi?</div>
      <NuxtImg
        src="/svg/chicken.svg"
        alt="geprek-icon"
        w="10"
        h="10"
        filter="~ grayscale-100"
        text-center
        opacity-20
      />
    </div>
    <!-- WHEN LOADING -->
    <div v-if="isLoading" text="center gray-400/70 xs" italic>
      <div>Memuat...</div>
    </div>
  </div>
</template>
