<template>
  <div class="text-brand-forest">
    <!-- HERO -->
    <AppPageBanner
      :title="data.data.title"
      :breadcrumbItems="items"
    />
    <UContainer>
    <section v-html="data.data.content" class="content py-15 px-5" />
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import type { BreadcrumbItem } from "@nuxt/ui";
const { t } = useI18n();
const route = useRoute()
const { data } = await useApiFetch(`/pages/${route.params.slug}`)

useHead({
  title: data.value?.data.title,
  meta: [
    { name: 'description', content: data.value?.data.content?.replace(/<[^>]*>/g, '').slice(0, 160) }
  ]
})


const items = computed<BreadcrumbItem[]>(() => [
  {
    label: t("links.homePage"),
    to: { name: "index" },
  },
  {
    label: data.value?.data.title,
  },
]);
</script>


<style scoped>
.content :deep(h1) { font-size: 2.25rem; font-weight: 700; }
.content :deep(h2) { font-size: 1.875rem; font-weight: 700; }
.content :deep(h3) { font-size: 1.5rem; font-weight: 600; }
.content :deep(h4) { font-size: 1.25rem; font-weight: 600; }
.content :deep(ul) { list-style: disc; padding-left: 1.5rem; }
.content :deep(ol) { list-style: decimal; padding-left: 1.5rem; }
</style>
