<template>
  <div class="relative xs:mt-30 mt-15 xs:mb-15 mb-10 flex flex-col items-center xs:gap-8 gap-3 text-center">
    <!-- Title -->
    <h2 class="text-3xl lg:text-6xl font-bold text-brand-forest">
      {{ title }}
    </h2>
    <!-- Divider -->
    <div class="flex items-center gap-3 mt-2">
      <div class="h-px w-12 bg-brand-forest/20" />
      <svg width="10" height="10" viewBox="0 0 20 20" fill="none" class="text-brand-forest/40">
        <path d="M10 0L11.8 8.2L20 10L11.8 11.8L10 20L8.2 11.8L0 10L8.2 8.2L10 0Z" fill="currentColor" />
      </svg>
      <div class="h-px w-12 bg-brand-forest/20" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
}>()
</script>
