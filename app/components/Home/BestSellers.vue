<script setup lang="ts">
const products = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: `منتج مميز ${i + 1}`,
  price: Math.floor(Math.random() * 300) + 50,
  oldPrice: Math.floor(Math.random() * 400) + 200,
  image: `https://picsum.photos/300/300?random=${i + 30}`,
  rating: (4 + Math.random()).toFixed(1),
  sales: Math.floor(Math.random() * 500) + 100,
}))
</script>

<template>
  <UContainer>

    <div class="relative rounded-3xl bg-gradient-to-br from-rose-500 via-pink-500 to-purple-600 p-6 overflow-hidden">

      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-4 right-4 w-32 h-32">
          <div class="absolute inset-0 border-4 border-white rotate-0" />
          <div class="absolute inset-0 border-4 border-white rotate-45" />
        </div>
        <div class="absolute bottom-4 left-4 w-24 h-24">
          <div class="absolute inset-0 border-4 border-white rotate-0" />
          <div class="absolute inset-0 border-4 border-white rotate-45" />
        </div>
      </div>

      <div class="flex items-center justify-between mb-6 relative z-10">
        <div class="flex items-center gap-3">
          <div class="w-1 h-8 bg-white/80 rounded-full" />
          <h2 class="text-2xl font-black text-white">الأكثر مبيعاً 🏆</h2>
        </div>
        <NuxtLink to="/products?filter=best-sellers" class="text-sm text-white/80 hover:text-white font-semibold flex items-center gap-1">
          عرض الكل
          <UIcon name="i-lucide-chevron-left" class="w-4 h-4" />
        </NuxtLink>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
        <div
          v-for="product in products"
          :key="product.id"
          class="group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden hover:shadow-xl transition-all cursor-pointer"
        >
          <div class="relative overflow-hidden">
            <img
              :src="product.image"
              :alt="product.name"
              class="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div class="absolute top-2 right-2 bg-yellow-400 text-yellow-900 text-xs font-black px-2 py-0.5 rounded-full">
              🏆 الأكثر مبيعاً
            </div>
            <button class="absolute top-2 left-2 w-8 h-8 bg-white dark:bg-zinc-800 rounded-full flex items-center justify-center shadow-md hover:bg-rose-50 transition-colors">
              <UIcon name="i-lucide-heart" class="w-4 h-4 text-rose-400" />
            </button>
          </div>

          <div class="p-3">
            <p class="text-sm font-bold text-zinc-700 dark:text-zinc-200 truncate">{{ product.name }}</p>
            <div class="flex items-center gap-1 mt-1">
              <UIcon name="i-lucide-star" class="w-3 h-3 text-yellow-400 fill-yellow-400" />
              <span class="text-xs text-zinc-500">{{ product.rating }} · {{ product.sales }} مبيعة</span>
            </div>
            <div class="flex items-center gap-2 mt-1">
              <span class="text-rose-500 font-black text-base">{{ product.price }} ر.س</span>
              <span class="text-zinc-400 text-xs line-through">{{ product.oldPrice }} ر.س</span>
            </div>
            <button class="mt-2 w-full py-1.5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs font-bold hover:opacity-90 transition-opacity">
              أضيفي للسلة 🛒
            </button>
          </div>
        </div>
      </div>
    </div>

  </UContainer>
</template>