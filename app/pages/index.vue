<template>
  <HomeHero :heroImage="data.data.heroImage" />
  <div class="rounded-2xl -translate-y-3 overflow-hidden">
    <HomeCategories v-if="data.data.categories.length>0" :categories="data.data.categories" />
    <HomeFeatuers />
    <UContainer>
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
