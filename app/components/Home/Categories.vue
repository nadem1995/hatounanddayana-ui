<template>
  <section class="relative xs:pt-20 pt-25 overflow-hidden bg-primary">
    <UContainer>
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
      <div class="w-full flex justify-center mt-5">
        <NuxtLink
          :to="{ name: 'products' }"
          :aria-label="$t('links.moreProducts')"
          class="inline-flex items-center gap-2 rounded-full bg-brand-forest/90 hover:bg-brand-forest text-white px-5 py-2 font-medium transition-colors"
        >
          <UIcon name="i-lucide-shopping-bag" class="size-5" />
          {{ $t('links.moreProducts') }}
        </NuxtLink>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import type { Category } from "~/types";
defineProps<{
  categories: Category[];
}>();
</script>
