<template>
  <AppSectionTitle
    :title="$t('sections.categories.title')"
  />
  <UCarousel
    :items="categories"
    :prev="{ variant: 'outline', color: 'neutral' }"
    :next="{ variant: 'ghost', color: 'neutral' }"
    arrows
    :ui="{ item: 'basis-full basis-1/2 lg:basis-1/5' }"
  >
    <template #default="{ item, index }">
      <CardCategory :category="item" :index="index" />
    </template>
  </UCarousel>
</template>

<script setup lang="ts">
import type { Category } from "~/types";

defineProps<{
  categories: Category[];
}>();
</script>
