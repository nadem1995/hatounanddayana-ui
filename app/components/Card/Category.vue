<template>
  <NuxtLink
    :to="`/products?category=${category.slug}`"
    class="group relative block backdrop-blur-md bg-brand-forest/10 border overflow-hidden rounded-2xl border-brand-forest/15"
  >
    <div class="relative  p-2 rounded-2xl aspect-square">
      <NuxtImg
        :src="category.image ?? 'https://placehold.co/600x600'"
        :alt="category.name"
        width="600"
        height="600"
        class="w-full rounded-2xl h-full object-cover transition-transform duration-800 group-hover:scale-105"
      />
      <!-- Dark scrim -->
      <div class="absolute inset-0  bg-brand-forest/20 group-hover:bg-brand-forest/10 transition-colors duration-500" />

      <!-- Top left number -->
      <div class="absolute top-4 left-4 flex items-center gap-2">
        <div class="h-px w-5 bg-primary/60" />
        <span class="text-[10px] font-black tracking-widest text-primary/80 uppercase">
          {{ String(index + 1).padStart(2, '0') }}
        </span>
      </div>

      <!-- Center hover label -->
      <div class="absolute  inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
        <div class="flex flex-col items-center gap-3 -translate-y-2 group-hover:translate-y-0 transition-all duration-500">
          <div class="flex size-12 items-center justify-center rounded-full bg-primary/20 backdrop-blur-sm border transition-all border-primary/30">
            <UIcon name="i-lucide-arrow-up-right" class="size-5 text-primary" />
          </div>
          <span class="text-xs font-black  uppercase text-primary/80 bg-brand-forest/50 backdrop-blur-sm px-3 py-1 rounded-full">
            {{ $t('explore') }}
          </span>
        </div>
      </div>

    </div>
    <div class="flex flex-col  items-center justify-between p-2">
        <h3 class="sm:text-xl font-bold text-brand-forest  line-clamp-1">
          {{ category.name }}
        </h3>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Category } from "~/types"

defineProps<{
  category: Category
  index: number
}>()
</script>
