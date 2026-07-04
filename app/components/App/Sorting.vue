<template>
  <USelect
    v-model="selectedSort"
    icon="i-lucide-arrow-up-down"
    :items="sortOptions"
    value-key="value"
    label-key="label"
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
const { t } = useI18n();
const route = useRoute();
const { updateQuery } = useQueryParams();

const sortOptions = computed(() => [
  { label: t('latest'), value: 'latest' },
  { label: t('oldest'), value: 'oldest' },
  { label: t('price_low_to_high'), value: 'price_asc' },
  { label: t('price_high_to_low'), value: 'price_desc' },
]);

const selectedSort = ref<string>((route.query.sort as string) ?? 'latest');

watch(selectedSort, (val) => {
  updateQuery({ sort: val });
});

watch(
  () => route.query['sort'],
  (val) => {
    if (!val) selectedSort.value = '';
  },
);
</script>
