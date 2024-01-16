<script setup lang="ts">
type Props = {
  options: any[];
  values: any[];
  modelValue: any;
};

const props = defineProps<Props>()
const emits = defineEmits(['update:modelValue'])

const open = ref(false)
const selectedIndex = computed(() => props.values.findIndex(val => props.modelValue === val))
</script>

<template>
  <div relative tabindex="0" min-w="24" @blur="open = false">
    <div
      p="2 r-8"

      type="text"

      relative
      w-full
      cursor-pointer
      transition-all
      bg="dark:gray-700 gray-300"
      :class="open ? 'rounded-t' : 'rounded'"
      @click="open = !open"
    >
      {{ props.options[selectedIndex] }}
    </div>
    <i-carbon-caret-up

      pos="top-2.5"

      absolute
      right-2
      transform
      cursor-pointer
      transition
      :class="open ? 'rotate-180' : 'rotate-0'"
      @click="open = !open"
    />
    <!-- SELECTION MENU -->
    <div
      v-if="open"
      flex="~ col"

      bg="dark:gray-600 gray-200"

      absolute
      z-10
      w-full
      p-1
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
