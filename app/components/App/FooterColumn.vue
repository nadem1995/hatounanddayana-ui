<template>
  <div class="flex flex-col gap-3">
    <p class="font-bold text-brand-forest pb-1 w-max border-b">{{ title }}</p>
    <UNavigationMenu
      highlight
      :ui="{
        link: 'text-base font-semibold text-brand-forest',
        linkLeadingIcon: 'text-brand-forest/60',
      }"
      :items="links"
      :orientation="orientation"
    />
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

withDefaults(
  defineProps<{
    title: string;
    links: NavigationMenuItem[];
    orientation?: "horizontal" | "vertical";
  }>(),
  {
    orientation: "vertical",
  },
);
</script>
