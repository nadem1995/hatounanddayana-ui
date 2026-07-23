<template>
  <div
    class="group relative flex flex-col bg-brand-forest/10 shadow-lg rounded-2xl sm:p-5 p-1  overflow-hidden"
  >
    <div
      class="absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-transparent via-brand-forest to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
    />

    <!-- Icon badge -->
    <div class="relative mb-auto">
      <div
        class="flex  items-center justify-center rounded-2xl bg-primary group-hover:bg-primary group-hover:scale-110 transition-all duration-500"
      >
        <UIcon :name="feature.icon" class="size-9 text-brand-forest" />
      </div>
    </div>

    <!-- Divider -->
    <div class="h-px sm:my-6 my-2 bg-primary/20" />

    <!-- Text -->
    <div class="space-y-1 text-center">
      <p class="font-bold text-brand-forest sm:text-xl">
        {{ feature.title }}
      </p>
      <p class="xs:text-md text-xs text-brand-forest/70">
        {{ feature.description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Feature } from "~/types";

const props = defineProps<{
  feature: Feature;
}>();
</script>

<style scoped></style>
