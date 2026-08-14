<script setup lang="ts">
</script>
<template>
  <div class="w-full  relative  shadow rounded-2xl  overflow-hidden">
    <NuxtImg
      src="images/d2.png"
      alt="hatoun and dayana"
      format="webp"
      loading="lazy"
      class="w-full h-auto"
    />
      <div class="md:w-max w-40 absolute z-10 top-0 md:left-10 left-2  h-full md:space-y-5 space-y-2 items-center justify-center text-center flex flex-col">
        <h3 class="text-2xl lg:text-5xl text-brand-forest font-bold">
          {{ $t("collection.title") }}
        </h3>
        <p class="text-brand-forest/90 xs:text-xl text-xs max-w-xs">
          {{ $t("collection.description") }}
        </p>
        <UButton
          :to="{ name: 'products' }"
          icon="i-lucide-arrow-up-right"
          class="rounded-full md:p-2 p-1 md:text-lg text-xs cursor-pointer text-brand-forest border"
          :label="$t('links.shopNow')"
          :aria-label="$t('links.shopNow')"
        />
      </div>
  </div>
</template>

