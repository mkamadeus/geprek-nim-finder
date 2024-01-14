<script setup lang="ts">
type Props = {
  modelValue: boolean;
};

const props = defineProps<Props>();
const emits = defineEmits(['update:modelValue']);

const toggle = () => {
  emits('update:modelValue', !props.modelValue);
};
</script>

<template>
  <div
    rounded-full
    p-1
    w-12
    h-6
    cursor-pointer
    transition-all
    :class="modelValue ? 'bg-teal-500' : 'dark:bg-gray-700 bg-gray-300'"
    @click="toggle"
  >
    <div
      w-4
      h-4
      rounded-full
      bg-gray-100
      shadow
      transition="all ease-out"
      transform="~"
      :class="modelValue ? 'translate-x-6' : 'translate-x-0'"
    />
  </div>
</template>
