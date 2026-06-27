<template>
 <UButton
  :to="{ name: 'products-favorite' }"
  variant="ghost"
  class="relative p-0 hover:bg-transparent"
>
  <div class="relative rounded-full border-2 w-9 h-9 flex items-center justify-center border-brand-forest/20 hover:border-brand-forest transition-all duration-300">

    <!-- Heart Icon -->
    <UIcon
      name="i-lucide-heart"
      class="text-brand-forest size-5"
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
