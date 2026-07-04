<template>
  <aside class="relative h-full shrink-0">
    <div
      class="lg:sticky lg:h-max h-full lg:top-30  overflow-hidden rounded-2xl border border-brand-forest bg-brand-forest/10"
    >
      <div class="relative hidden lg:block overflow-hidden bg-primary p-5">
        <div
          class="absolute bg-pattern-crosshatch inset-0  border border-b border-brand-forest"
        />
        <div class="relative flex items-center gap-3">
          <UIcon name="i-lucide-filter" class="size-5 text-brand-forest"/>
          <h3 class="font-bold text-[#f7e7c1]">
            {{ $t("filter.title") }}
          </h3>
        </div>
      </div>
      <div class="space-y-5 h-full p-5">
        <AppSorting/>
        <FilterSearch/>
        <FilterCategory :categories="categories"/>
        <FilterPrice/>
        <UButton
          class="rounded-2xl bg-brand-forest"
          variant="soft"
          color="neutral"
          block
          @click="clearQuery"
        >
          {{ $t("filter.reset") }}
        </UButton>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import type {Category} from "~/types";

const {clearQuery} = useQueryParams();

defineProps<{
  categories: Category[];
}>();
</script>
