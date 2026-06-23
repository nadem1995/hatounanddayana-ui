<template>
 <UButton
  :to="{ name: 'products-favorite' }"
  variant="ghost"
  class="relative p-0 hover:bg-transparent"
>
  <div class="relative flex items-center justify-center size-9 rounded-full border-2 border-brand-forest/20 hover:border-brand-forest transition-all duration-300">
    
    <!-- Heart Icon -->
    <UIcon
      name="i-material-symbols-light-favorite-outline"
      class="size-7 text-brand-forest"
    />

    <!-- Count Badge -->
    <div
      v-if="count > 0"
      class="absolute -top-1.5 -right-1 min-w-3 h-3 rounded-full bg-brand-forest text-white text-[10px] font-bold flex items-center justify-center  leading-4"
    >
      {{ count }}
    </div>

  </div>
</UButton>
</template>

<script setup lang="ts">
const { count } = useFavorites();
</script>
