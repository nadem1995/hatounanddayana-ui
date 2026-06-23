

<template>
  <UContainer>
    <div class="text-center mb-10">
      <p class="text-xs font-semibold text-rose-500 mb-1">آراء عميلاتنا</p>
      <h2 class="text-2xl font-black text-(--ui-text)">ماذا قالت عميلاتنا 💬</h2>
    </div>

    <div class="grid grid-cols-4 gap-4 mb-10">
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="text-center bg-(--ui-bg) rounded-3xl p-5 border border-(--ui-border) shadow-sm"
      >
        <p class="text-3xl font-black text-rose-500">{{ stat.value }}</p>
        <p class="text-sm text-(--ui-text-muted) mt-1">{{ stat.label }}</p>
      </div>
    </div>

    <UCarousel
      v-slot="{ item }"
      :items="testimonials"
      :autoplay="{ delay: 4000 }"
      loop
      dots
      :ui="{
        item: 'basis-full sm:basis-1/2 lg:basis-1/3 px-2',
        dots: 'mt-6',
        dot: 'data-[selected]:bg-rose-500',
      }"
      class="w-full"
    >
      <CardTestimonial :testimonial="item"/>
    </UCarousel>

  </UContainer>
</template>



<script setup lang="ts">
const stats = [
  { value: '+١٠٠٠٠', label: 'عميلة سعيدة' },
  { value: '٤.٩', label: 'متوسط التقييم' },
  { value: '+٥٠٠٠', label: 'منتج أصلي' },
  { value: '٩٨%', label: 'توصيات العملاء' },
]

interface Testimonial {
  id: number;
  name: string;
  message: string;
  source: string;
  rating:number
}


defineProps<{
  testimonials: Testimonial[]
}>()
</script>