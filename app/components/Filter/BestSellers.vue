<template>
  <button
    class="flex items-center justify-between w-full px-4 py-3 rounded-xl border transition-all duration-200 cursor-pointer"
    :class="
      isBestSeller
        ? 'bg-primary/10 border-primary text-primary'
        : 'bg-transparent border-(--ui-border) text-muted hover:border-primary/50'
    "
    @click="isBestSeller = !isBestSeller"
  >
    <div class="flex items-center gap-2">
      <UIcon name="i-lucide-trophy" class="size-4" />
      <span class="text-sm font-medium">{{ $t("best_seller") }}</span>
    </div>
    <UIcon v-if="isBestSeller" name="i-lucide-check" class="size-4" />
  </button>
</template>

<script setup lang="ts">
const route = useRoute();
const { updateQuery } = useQueryParams();

const isBestSeller = ref(route.query.best_seller === "true");

watch(isBestSeller, (val) => {
  updateQuery({ best_seller: val ? "true" : undefined });
});

watch(
  () => route.query.best_seller,
  (val) => {
    if (!val) isBestSeller.value = false;
  },
);
</script>
