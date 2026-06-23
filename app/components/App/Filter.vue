<template>
  <aside class="lg:w-72 shrink-0">
    <div
      class="sticky top-30 overflow-hidden rounded-2xl border border-brand-forest bg-white "
    >
      <div class="relative overflow-hidden bg-primary px-6 py-5">
        <div
          class="absolute bg-pattern-crosshatch inset-0 "
          
        />

        <div class="relative flex items-center gap-3">
          <UIcon name="i-lucide-filter" class="size-5 text-brand-forest" />
          <h3 class="font-bold text-[#f7e7c1]">
            {{ $t("filter.title") }}
          </h3>
        </div>
      </div>

      <div class="space-y-6 p-6">
        <AppSorting />

        <div
          class="h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent"
        />

        <USidebar title="Filters" collapsible="none">
          <aside class="space-y-5">
            <FilterSearch />
            <FilterCategory :categories="categories" />
            <FilterBestSellers />
            <FilterPrice />

            <UButton
             class="rounded-full"
              variant="soft"
              color="neutral"
              block
              @click="clearQuery"
            >
              {{ $t("filter.reset") }}
            </UButton>
          </aside>
        </USidebar>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import type { Category } from "~/types";
const { clearQuery } = useQueryParams();

defineProps<{
  categories: Category[];
}>();
</script>
