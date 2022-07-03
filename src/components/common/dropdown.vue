<script setup lang="ts">
type Props = {
  options: any[];
  modelValue: any;
};

const props = defineProps<Props>();
const emits = defineEmits(['update:modelValue']);

const open = ref(false);

const set = (val: any) => {
  emits('update:modelValue', val);
};
</script>

<template>
  <div relative tabindex="0" @blur="open = false">
    <div
      p="2 r-4"
      w-20
      type="text"
      cursor-pointer
      transition-all
      relative
      bg="dark:gray-700 gray-300"
      @click="open = !open"
      :class="open ? 'rounded-t' : 'rounded'"
    >
      {{ modelValue }}
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
      w-20
      bg="dark:gray-600 gray-200"
      p-1
      absolute
      z-10
      :class="open ? 'rounded-b' : 'rounded'"
    >
      <div
        v-for="(v, i) in options"
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
        {{ v }}
      </div>
    </div>
  </div>
</template>
