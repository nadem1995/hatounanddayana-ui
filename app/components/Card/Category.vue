<template>
  <NuxtLink
    :to="{ name: 'products', query: { category: category.slug } }"
    :aria-label="`${$t('links.shopNow')} ${category.name}`"
    class="group relative block aspect-[3/4] overflow-hidden rounded-2xl"
  >
    <!-- Full bleed image -->
    <NuxtImg
      format="webp"
      :loading="index < 4 ? 'eager' : 'lazy'"
      :src="imgSrc"
      :alt="category.name"
      class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110"
      @error="onImageError"
    />

    <!-- Permanent bottom gradient -->
    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

    <!-- Hover tint -->
    <div class="absolute inset-0 bg-brand-forest/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <!-- Top: index number -->
    <div class="absolute start-0 m-2 flex items-center justify-between">
      <span class="text-xs text-primary tracking-[0.1em] p-2 rounded-full bg-brand-forest/70">
        {{ String(index + 1).padStart(2, '0') }}
      </span>
    </div>

    <!-- Bottom: name + cta -->
    <div class="absolute bottom-0 left-0 right-0 p-3 flex flex-col gap-3">
      <!-- Shop now pill — slides up on hover -->
      <div class="flex translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <span class="inline-flex items-center gap-1.5 bg-primary text-brand-forest text-[11px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
          <UIcon name="i-lucide-shopping-bag" class="size-3" />
          {{ $t('links.shopNow') }}
        </span>
      </div>

      <!-- Category name -->
      <div class="flex items-end justify-between gap-2">
        <h3 class="xs:text-lg text-md  text-brand-forest   line-clamp-2">
          {{ category.name }}
        </h3>
        <!-- Thin line decoration -->
        <div class="shrink-0 h-px w-8 bg-brand-forest/70 mb-1.5 group-hover:w-16 transition-all duration-500" />
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Category } from '~/types'

const FALLBACK = '/images/placeholders/150x180.webp'

const props = defineProps<{
  category: Category
  index: number
}>()

const imgSrc = ref(props.category.image ?? FALLBACK)

function onImageError() {
  imgSrc.value = FALLBACK
}
</script>
