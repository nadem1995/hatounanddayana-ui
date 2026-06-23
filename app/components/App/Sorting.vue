<template>
  <USelect
    icon="i-lucide-arrow-up-down"
    v-model="selectedSort"
    :items="sortOptions"
    value-key="value"
    label-key="label"
    class="w-full mb-5"
  />
</template>

<script setup lang="ts">
const { t } = useI18n();
const route = useRoute();
const { updateQuery } = useQueryParams();

const sortOptions = computed(() => [
  { label: t('latest'), value: 'latest' },
  { label: t('oldest'), value: 'oldest' },
  { label: t('price_low_to_high'), value: 'price_asc' },
  { label: t('price_high_to_low'), value: 'price_desc' },
])

const selectedSort = ref<string>((route.query.sort as string) ?? "latest");

watch(selectedSort, (val) => {
  updateQuery({ sort: val });
});

// Reset when query is cleared
watch(
  () => route.query["sort"],
  (val) => {
    if (!val) selectedSort.value = "";
  },
);
</script>
