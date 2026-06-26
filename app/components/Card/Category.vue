<template>
  <NuxtLink
    :to="{ name: 'products', query: { category: category.slug } }"
    :aria-label="`${$t('links.shopNow')} ${category.name}`"
    class="group relative block backdrop-blur-md bg-brand-forest/10 border overflow-hidden rounded-2xl border-brand-forest/15"
  >
    <div class="relative p-2 rounded-2xl aspect-square">
      <NuxtImg
        format="webp"
        :loading="index < 4 ? 'eager' : 'lazy'"
        :src="category.image"
        :alt="`${category.name} - ${$t('category_image_alt')}`"
        width="150"
        height="180"
        class="w-full h-auto rounded-2xl object-cover transition-transform duration-500 group-hover:scale-104"
        @error="onImageError"
      />

      <!-- Dark scrim -->
      <div class="absolute inset-0 bg-brand-forest/20 group-hover:bg-brand-forest/10 transition-colors duration-500" />

      <!-- Top left number -->
      <div class="absolute top-4 left-4 flex items-center gap-2">
        <div class="h-px w-5 bg-primary/60" />
        <span class="text-[10px] font-black tracking-widest text-primary/80 uppercase">
          {{ String(index + 1).padStart(2, '0') }}
        </span>
      </div>

      <!-- Center hover label -->
      <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
        <div class="flex flex-col items-center gap-3 -translate-y-2 group-hover:translate-y-0 transition-all duration-500">
          <div class="flex size-12 items-center justify-center rounded-full bg-primary/20 backdrop-blur-sm border transition-all border-primary/30">
            <UIcon name="i-lucide-arrow-up-right" class="size-5 text-primary" />
          </div>
          <span class="text-xs font-black uppercase text-primary/80 bg-brand-forest/50 backdrop-blur-sm px-3 py-1 rounded-full">
            {{ $t('links.shopNow') }}
          </span>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-center justify-between p-2">
      <h3 class="sm:text-xl font-bold text-brand-forest line-clamp-1">
        {{ category.name }}
      </h3>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Category } from '~/types'

const FALLBACK = '/images/placeholders/150x180.webp';

const props = defineProps<{
  category: Category
  index: number
}>()

const imgSrc = ref(props.category.image ?? FALLBACK)

function onImageError() {
  imgSrc.value = FALLBACK
}
</script>
