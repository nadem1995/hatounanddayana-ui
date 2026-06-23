<template>
  <UInput
    v-model="search"
    icon="i-lucide-search"
    :placeholder="$t('search_by_product_name')"
    class="w-full"
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
