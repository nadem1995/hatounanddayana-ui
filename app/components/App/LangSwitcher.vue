<template>
  <UButton
    variant="ghost"
    class="p-0 hover:bg-transparent group"
    @click="setLocale(locale === 'ar' ? 'en' : 'ar')"
  >
    <div class="flex items-center gap-2 px-3 py-2 rounded-full border-2 border-brand-forest/20 group-hover:border-brand-forest/60 group-hover:bg-brand-forest/5 transition-all duration-300">

      <!-- Language Label -->
      <span class="text-xs font-semibold text-brand-forest tracking-wide">
        {{ locale === 'ar' ? 'EN' : 'ع' }}
      </span>

      <!-- Arrow -->
      <UIcon
        name="i-lucide-chevrons-left-right"
        class="size-4 text-brand-forest/40 group-hover:text-brand-forest transition-colors duration-300"
      />

    </div>
  </UButton>
</template>

<script setup>
const { locale, setLocale } = useI18n();

const nextFlag = computed(() =>
  locale.value === 'ar' ? 'i-circle-flags-us' : 'i-circle-flags-sy'
);
</script>
