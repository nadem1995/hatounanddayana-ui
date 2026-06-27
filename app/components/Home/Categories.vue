<template>
  <section class="relative overflow-hidden bg-primary">
    <UContainer>
  <AppSectionTitle
    :title="$t('sections.categories.title')"
  />
  <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-center">
    <div class="col-span-1 md:col-span-1 lg:col-span-2 lg:row-span-2">
      <CardCategory
        v-if="categories[0]"
        :category="categories[0]"
        :index="0"
        class="h-full"
      />
    </div>
    <CardCategory
      v-for="(category, index) in categories.slice(1)"
      :key="index + 1"
      :category="category"
      :index="index + 1"
    />
  </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import type { Category } from "app/types";
defineProps<{
  categories: Category[];
}>();
</script>
