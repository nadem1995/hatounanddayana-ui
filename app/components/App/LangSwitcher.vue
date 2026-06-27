<template>
  <UButton
    variant="ghost"
    class="p-0 hover:bg-transparent group"
    @click="setLocale(locale === 'ar' ? 'en' : 'ar')"
  >
    <div class="flex items-center justify-center gap-2 rounded-full w-15 h-9 border-2 border-brand-forest/20 group-hover:border-brand-forest/60 group-hover:bg-brand-forest/5 transition-all duration-300">

      <!-- Language Label -->
      <span class="font-semibold text-brand-forest">
        {{ locale === 'ar' ? 'EN' : 'ع' }}
      </span>

      <!-- Arrow -->
      <UIcon
        name="i-lucide-chevrons-left-right"
        class="text-brand-forest size-5"
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
