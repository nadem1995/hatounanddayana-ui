<template>
  <NuxtImg
    src="https://placehold.co/1080x1920/png"
    class="block md:hidden w-full h-auto"
    width="1080"
    height="1920"
    sizes="100vw"
    preload
    loading="eager"
    fetchpriority="high"
  />

  <NuxtImg
    src="https://placehold.co/1920x1080/png"
    class="hidden md:block w-full h-auto"
    width="1920"
    height="1080"
    sizes="100vw"
    preload
    loading="eager"
    fetchpriority="high"
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
