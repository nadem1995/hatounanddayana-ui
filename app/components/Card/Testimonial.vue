<template>
  <UPageCard
    variant="outline"
    :ui="{
      root: 'border-[#eadcc7] bg-white hover:shadow-md transition-shadow duration-300 overflow-hidden',
      body: 'flex flex-col gap-4 w-full',
      header: 'w-full',
    }"
  >
    <!-- Top gold accent line via header slot -->
    <template #header>
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-0.5">
          <UIcon
            v-for="i in 5"
            :key="i"
            name="i-lucide-star"
            class="size-3.5"
            :class="
              i <= testimonial.rating ? 'text-[#d4af37]' : 'text-[#e6dccb]'
            "
          />
        </div>
        <span class="text-[10px] uppercase tracking-widest text-[#6b5744]">
          {{ testimonial.source }}
        </span>
      </div>
    </template>

    <template #body>
      <!-- Quote -->
      <div class="justify-center flex">
        <q
          class="ttext-center text-center text-[#2c1f0e] leading-relaxed italic pl-3"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q>
      </div>

      <!-- Divider -->
      <div class="flex items-center gap-2">
        <div class="flex-1 h-px bg-[#f1e7db]" />
        <div class="size-1 rotate-45 bg-[#d4af37]/50" />
        <div class="flex-1 h-px bg-[#f1e7db]" />
      </div>

      <!-- Author -->
      <div class="flex items-center gap-3">
        <div
          class="size-9 rounded-full bg-[#07342f] flex items-center justify-center shrink-0"
        >
          <span class="text-xs font-bold text-[#d4af37]">
            {{
              testimonial.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2)
            }}
          </span>
        </div>
        <div>
          <p class="text-sm font-semibold text-[#07342f]">
            {{ testimonial.name }}
          </p>
          <p class="text-[10px] text-[#6b5744] flex items-center gap-1 mt-0.5">
            <UIcon name="i-lucide-badge-check" class="size-3 text-[#d4af37]" />
            Verified Customer
          </p>
        </div>
      </div>
    </template>
  </UPageCard>
</template>
<script setup lang="ts">
interface Testimonial {
  id: number;
  name: string;
  message: string;
  source: string;
  rating: number;
}

defineProps<{
  testimonial: Testimonial;
}>();
</script>
