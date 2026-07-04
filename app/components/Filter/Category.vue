<template>
  <USelectMenu
    v-model="selectedCategories"
    :items="categories"
    label-key="name"
    icon="i-lucide-layout-grid"
    value-key="slug"
    multiple
    arrow
    :placeholder="$t('shop_by_category')"
    clear
    color="primary"
    variant="soft"
    size="lg"
    class="w-full"
    :ui="{
      base: 'bg-primary text-brand-forest rounded-lg font-medium shadow-sm ring-0 focus:ring-2 focus:ring-primary/50 transition-all',
      leadingIcon: 'text-brand-forest',
      trailingIcon: 'text-brand-forest',
      item: 'text-brand-forest data-highlighted:bg-primary/10',
      content: 'bg-primary border border-brand-forest/10 rounded-lg shadow-lg'
    }"
  />
</template>

<script setup lang="ts">
import type { Category } from "~/types";

defineProps<{
  categories: Category[];
}>();
const route = useRoute();
const { updateQuery } = useQueryParams();

const selectedCategories = ref<string[]>(
  route.query.categories
    ? ([] as string[]).concat(route.query.categories as string)
    : [],
);

watch(selectedCategories, (val) => {
  updateQuery({ categories: val.length ? val : undefined });
});

// Reset when query is cleared
watch(
  () => route.query["categories[]"],
  (val) => {
    if (!val) selectedCategories.value = [];
  },
);
</script>
