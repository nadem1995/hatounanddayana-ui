<script setup lang="ts">
const products = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: `منتج رقم ${i + 1}`,
  price: Math.floor(Math.random() * 300) + 50,
  oldPrice: Math.floor(Math.random() * 400) + 200,
  image: `https://picsum.photos/300/300?random=${i + 10}`,
  isNew: i < 3,
  discount: Math.floor(Math.random() * 50) + 10,
}))

const wishlist = ref<number[]>([])
const toggleWishlist = (id: number) => {
  wishlist.value.includes(id)
    ? wishlist.value = wishlist.value.filter(w => w !== id)
    : wishlist.value.push(id)
}
</script>

<template>
  <UContainer>

    <div class="flex items-center justify-between mb-8">
      <div>
        <p class="text-xs font-semibold text-rose-500 mb-1">وصل حديثاً</p>
        <h2 class="text-2xl font-black text-(--ui-text)">أحدث المنتجات</h2>
      </div>
      <NuxtLink
        to="/products?filter=latest"
        class="text-sm text-rose-500 hover:text-rose-600 font-semibold flex items-center gap-1 transition-colors"
      >
        عرض الكل
        <UIcon name="i-lucide-arrow-left" class="w-4 h-4" />
      </NuxtLink>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-5">
      <div
        v-for="product in products"
        :key="product.id"
        class="group bg-(--ui-bg) rounded-3xl overflow-hidden border border-(--ui-border) hover:shadow-xl hover:shadow-rose-100 dark:hover:shadow-rose-900/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
      >
        <div class="relative overflow-hidden">
          <img
            :src="product.image"
            :alt="product.name"
            class="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
          />

          <div class="absolute top-3 right-3 flex flex-col gap-1.5">
            <span
              v-if="product.isNew"
              class="bg-rose-500 text-white text-xs font-bold px-2.5 py-0.5 rounded-full"
            >
              جديد
            </span>
            <span class="bg-purple-500 text-white text-xs font-bold px-2.5 py-0.5 rounded-full">
              {{ product.discount }}%-
            </span>
          </div>

          <button
            class="absolute top-3 left-3 w-8 h-8 bg-white dark:bg-zinc-800 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
            @click.prevent="toggleWishlist(product.id)"
          >
            <UIcon
              name="i-lucide-heart"
              :class="['w-4 h-4 transition-colors', wishlist.includes(product.id) ? 'text-rose-500 fill-rose-500' : 'text-zinc-400']"
            />
          </button>
        </div>

        <div class="p-4">
          <p class="text-sm font-bold text-(--ui-text) truncate">{{ product.name }}</p>
          <div class="flex items-center gap-2 mt-1.5">
            <span class="text-rose-500 font-black">{{ product.price }} ر.س</span>
            <span class="text-(--ui-text-muted) text-xs line-through">{{ product.oldPrice }} ر.س</span>
          </div>
          <UButton
            color="rose"
            variant="soft"
            size="xs"
            block
            class="mt-3 rounded-xl"
            icon="i-lucide-shopping-cart"
          >
            أضيفي للسلة
          </UButton>
        </div>
      </div>
    </div>

  </UContainer>
</template>