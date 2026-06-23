<template>
  <UHeader
    :ui="{
      root: 'h-18 bg-primary/70 shadow-md border-none',
      toggle: 'text-brand-forest',
    }"
  >
    <template #left>
      <TemplateMenu class="lg:hidden" />
      <NuxtLink :to="{ name: 'index' }">
        <AppLogo class="w-auto h-6 shrink-0" />
      </NuxtLink>
    </template>

    <template #default>
      <UNavigationMenu
        variant="link"
        :items="items"
        :ui="{
          link: 'text-[18px] text-brand-forest [&[aria-current=page]]:border-b-1 [&[aria-current=page]]:border-brand-forest',
        }"
      />
    </template>

    <template #right>
      <AppFavorite />
      <AppLangSwitcher />
      <!-- <UColorModeButton />-->
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" />
      <USeparator class="my-6" />
    </template>
  </UHeader>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const { t } = useI18n();

const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: t("links.homePage"),
    to: { name: "index" },
    active: route.name?.toString().startsWith("index"),
  },
  {
    label: t("links.ourProducts"),
    to: { name: "products" },
    active: route.name?.toString().startsWith("products"),
  },
  {
    label: t("links.ourStory"),
    to: { name: "our-story" },
    active: route.name?.toString().startsWith("our-story"),
  },
]);
</script>
