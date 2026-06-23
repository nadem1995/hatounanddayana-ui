<template>
   <NuxtImg
    v-if="heroImage"
    preload
    format="webp"
    loading="eager"
    :alt="$t('hero_image_alt')"
    :src="heroImage?.image"
    class="w-full max-h-143"
  />
  <NuxtImg
    v-else
    preload
    format="webp"
    loading="eager"
    :alt="$t('hero_image_alt')"
    src="https://placehold.co/1024x570"
    class="w-full max-h-143"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
 heroImage: {
      image: string;
    };
}>();
</script>

<style scoped>

</style>