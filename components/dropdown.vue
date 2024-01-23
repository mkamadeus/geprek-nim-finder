<script setup lang="ts">
type Props = {
  placeholder?: string;
  options: any[];
  values: any[];
  modelValue?: any;
};

const props = defineProps<Props>()
if (props.values.length !== props.options.length) {
  throw new Error('Values and options must have the same length')
}

const emits = defineEmits(['update:modelValue'])
const data = useVModel(props, 'modelValue', emits)
</script>

<template>
  <!-- eslint-disable-next-line vue/v-on-event-hyphenation -->
  <SelectRoot :model-value="data" @update:model-value="console.log('yooo');$emit('update:modelValue', $event)">
    <SelectTrigger
      flex="~"
      bg="gray-100 dark:gray-700"
      text="gray-700 dark:gray-300"
      w-full
      items-center
      justify-between
      rounded
      p-2
      space-x-2
    >
      <SelectValue :placeholder="placeholder" />
      <div block class="i-carbon-chevron-down" />
    </SelectTrigger>

    <SelectPortal>
      <SelectContent

        min-w="160px"

        bg="gray-100 dark:gray-700"

        :side-offset="5"
        z-100
        rounded
        text-sm
        shadow
      >
        <SelectScrollUpButton
          bg="gray-300 dark:gray-600"
          h-25px
          flex
          cursor-default
          items-center
          justify-center
        >
          <div class="i-carbon-chevron-up" />
        </SelectScrollUpButton>

        <SelectViewport p-5px>
          <SelectGroup>
            <SelectItem
              v-for="(value, index) in values"
              :key="index"
              :value="value"
              text="black dark:white"
              relative
              h-25px
              flex
              select-none
              items-center
              rounded
              p="l-[25px] r-[35px]"
              leading-none
              pointer-events="data-[disabled]:none"
              bg="data-[highlighted]:gray-300 dark:data-[highlighted]:gray-600"
              outline="data-[highlighted]:none"
            >
              <!-- class="relative h-[25px] flex select-none items-center rounded-[3px] pl-[25px] pr-[35px] text-[13px] leading-none data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1 data-[highlighted]:outline-none" -->
              <SelectItemIndicator
                pos="absolute left-0"
                w-25px
                inline-flex
                items-center
                justify-center
                text-teal-500
              >
                <div class="i-carbon-checkmark" />
              </SelectItemIndicator>
              <SelectItemText>
                {{ options[index] }}
              </SelectItemText>
            </SelectItem>
          </SelectGroup>
        </SelectViewport>

        <SelectScrollDownButton
          bg="gray-300 dark:gray-600"
          h-25px
          flex
          cursor-default
          items-center
          justify-center
        >
          <div class="i-carbon-chevron-down" />
        </SelectScrollDownButton>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
  <!-- <div relative tabindex="0" min-w="24" @blur="open = false">
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
  </div> -->
</template>
