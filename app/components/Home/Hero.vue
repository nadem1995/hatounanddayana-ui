<template>
  <div class="w-full aspect-1200/auto bg-gray-100">
  <NuxtImg
    preload
    format="webp"
    loading="eager"
    alt="Hero image"
    :src="imgSrc"
    class="w-full h-auto"
    @error="onImageError"
  />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  heroImage?: {
    image: string;
  };
}>();

const FALLBACK = '/images/placeholders/1200x570.webp';

const imgSrc = ref(props.heroImage?.image ?? FALLBACK);

function onImageError() {
  imgSrc.value = FALLBACK;
}
</script>
