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
    class="w-full"
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
