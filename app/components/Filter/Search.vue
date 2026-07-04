<template>
  <UInput
    v-model="search"
    icon="i-lucide-search"
    :placeholder="$t('search_by_product_name')"
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
    clear
    @keyup="updateQuery({ search: search || undefined })"
  />

</template>

<script setup lang="ts">
const route = useRoute();
const { updateQuery } = useQueryParams();

const search = ref<string>((route.query.search as string) ?? "");

// Reset when query is cleared
watch(
  () => route.query.search,
  (val) => {
    if (!val) search.value = "";
  },
);
</script>
