<script setup lang="ts">
type Props = {
  options: any[];
  values: any[];
  modelValue: any;
};

const props = defineProps<Props>();
const emits = defineEmits(['update:modelValue']);

const open = ref(false);
const selectedIndex = computed(() => props.values.findIndex((val) => props.modelValue === val));
</script>

<template>
  <div relative tabindex="0" @blur="open = false" min-w="24">
    <div
      p="2 r-8"
      w-full
      type="text"
      cursor-pointer
      transition-all
      relative
      bg="dark:gray-700 gray-300"
      @click="open = !open"
      :class="open ? 'rounded-t' : 'rounded'"
    >
      {{ props.options[selectedIndex] }}
    </div>
    <i-carbon-caret-up
      absolute
      right-2
      pos="top-2.5"
      transition
      transform
      cursor-pointer
      @click="open = !open"
      :class="open ? 'rotate-180' : 'rotate-0'"
    />
    <!-- SELECTION MENU -->
    <div
      v-if="open"
      flex="~ col"
      w-full
      bg="dark:gray-600 gray-200"
      p-1
      absolute
      z-10
      :class="open ? 'rounded-b' : 'rounded'"
    >
      <div
        v-for="(v, i) in values"
        :key="i"
        cursor-pointer
        bg="hover:gray-500"
        rounded
        p-1
        @click="
          open = false;
          $emit('update:modelValue', v);
        "
      >
        {{ options[i] }}
      </div>
    </div>
  </div>
</template>
