<template>
  <UMarquee
    :overlay="false"
    :repeat="4"
    pause-on-hover
    class="w-full py-1 bg-primary border-b border-brand-forest"
  >
    <span
      v-for="item in banner"
      :key="item.statement"
      class="flex text items-center gap-2  px-6 text-brand-forest"
    >
      {{ item.statement }}
    </span>
  </UMarquee>
</template>

<script setup lang="ts">
defineProps<{
  banner: Array<{ statement: string }>;
}>();
</script>
