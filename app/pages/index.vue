<template>
  <AppHero :heroImage="data.hero_image" />
  <div class="rounded-2xl -translate-y-3 space-y-6 overflow-hidden">
    <AppFeatuers />
    <UContainer class="py-5 space-y-30">
      <SectionCategories :categories="data.categories" />
      <AppCTA />
      <AppFolowUs />
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
useSeoMeta({
  title: () => t("seo.home.title"),
  description: () => t("seo.home.description"),
});
const { data } = await useApiFetch("/home");
</script>
