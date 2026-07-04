<template>
  <section class="relative overflow-hidden py-5 bg-primary">
    <div class="absolute bg-pattern-crosshatch inset-0 opacity-[0.07]"/>
    <div
      class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-stone-400/40 to-transparent"
    />
    <div
      class="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-stone-400/40 to-transparent"
    />

    <UContainer class="relative">
      <!-- Header -->
      <div
        class="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between"
      >
        <h3
          class="text-3xl lg:text-5xl font-bold text-brand-forest"
        >
          {{ title }}
        </h3>
        <p class="text-brand-forest/90 text-lg max-w-xs leading-relaxed">
          {{ subtitle }}
        </p>
      </div>

      <UBreadcrumb :ui="{ link: 'text-brand-forest' }" :items="breadcrumbItems"/>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import type {BreadcrumbItem} from "@nuxt/ui";

defineProps<{
  title: string;
  subtitle?: string;
  breadcrumbItems: BreadcrumbItem[];
}>();
</script>
