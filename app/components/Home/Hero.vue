<template>
  <NuxtImg
    :src="imgSrc"
    class="w-full h-auto"
    width="1080"
    height="1920"
    sizes="100vw"
    preload
    loading="eager"
    fetchpriority="high"
    @error="onImageError()"
    alt="Hero image Hatoun and dayana"
  />


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
