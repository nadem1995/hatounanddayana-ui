<template>
  <article
    class="group relative flex flex-col overflow-hidden rounded-2xl backdrop-blur-xl bg-brand-forest/10 border border-brand-forest/20 hover:border-brand-forest/50 hover:-translate-y-1 transition-all duration-300"
    itemscope
    itemtype="https://schema.org/Product"
  >
    <!-- ── Image ── -->
    <div class="relative overflow-hidden spect-3/4">
      <NuxtLink
        :to="`/products/${product.slug}`"
        tabindex="-1"
        aria-hidden="true"
      >
        <NuxtImg
          src="https://placehold.co/300x400"
          :alt="product.name"
          :loading="priority ? 'eager' : 'lazy'"
          :fetchpriority="priority ? 'high' : 'auto'"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          width="300"
          height="400"
          format="webp"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          itemprop="image"
        />
      </NuxtLink>

      <!-- Gradient scrim -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        aria-hidden="true"
      />

      <!-- Favorite button -->
      <UButton
        square
        size="xs"
        color="neutral"
        variant="ghost"
        :icon="favorite ? 'i-lucide-heart' : 'i-lucide-heart'"
        :aria-label="
          favorite
            ? $t('actions.removeFromFavorites')
            : $t('actions.addToFavorites')
        "
        :aria-pressed="favorite"
        class="absolute top-2 end-2 rounded-full bg-white/90 backdrop-blur-sm shadow-md border border-stone-100 hover:scale-110 active:scale-95 transition-all duration-200"
        :ui="{
          leadingIcon: favorite
            ? 'text-red-500 fill-red-500'
            : 'text-stone-400',
        }"
        @click.prevent="toggleFavorite(product.id)"
      />
    </div>

    <!-- ── Content ── -->
    <div class="flex flex-col gap-2 p-2.5 sm:p-3">
      <!-- Name -->
      <NuxtLink :to="`/products/${product.slug}`">
        <h3
          class="text-sm sm:text-base font-bold text-brand-forest line-clamp-2 leading-tight"
          itemprop="name"
        >
          {{ product.name }}
        </h3>
      </NuxtLink>

      <!-- Price + Colors -->
      <div class="flex items-center justify-between gap-2">
        <div itemprop="offers" itemscope itemtype="https://schema.org/Offer">
          <meta itemprop="priceCurrency" content="SYP" />
          <link itemprop="availability" href="https://schema.org/InStock" />
          <p
            class="text-brand-forest font-black text-sm sm:text-base leading-none"
            itemprop="price"
            :content="product.price"
          >
            {{ product.price }}
            <span class="text-xs font-medium text-stone-400">ل.س</span>
          </p>
        </div>
        {{ product.color_codes }}

        <div
          v-if="product.color_codes?.length"
          class="flex items-center gap-1 flex-wrap"
          role="list"
          :aria-label="$t('product.availableColors')"
        >
          <span
            v-for="(color, index) in product.color_codes.slice(0, 4)"
            :key="color"
            role="listitem"
            class="size-2.5 rounded-full ring-1 ring-brand-forest shadow-sm"
            :style="{ backgroundColor: color }"
            :aria-label="color"
          />
          <span
            v-if="product.color_codes.length > 4"
            class="flex size-4 items-center justify-center rounded-full bg-white/80 text-[7px] font-black text-stone-600 ring-1 ring-white"
          >
            +{{ product.color_codes.length - 4 }}
          </span>
        </div>
      </div>

      <!-- Divider -->
      <div class="h-px bg-brand-forest/10" aria-hidden="true" />

      <!-- Actions -->
      <div class="flex gap-1.5">
        <!-- WhatsApp — label hidden on smallest screens -->
        <UButton
          :to="whatsAppUrl"
          target="_blank"
          rel="noopener noreferrer"
          :label="$t('links.orderNow')"
          :aria-label="`${$t('links.orderNow')} - ${product.name}`"
          leading-icon="i-mdi-whatsapp"
          size="xs"
          block
          class="bg-brand-forest text-primary hover:bg-brand-forest/90 transition-all duration-300 text-xs sm:text-sm"
          :ui="{ label: 'hidden xs:block sm:block' }"
        />
        <!-- Details — icon only on mobile -->
        <UButton
          :to="`/products/${product.slug}`"
          :aria-label="`${$t('links.moreDetails')} - ${product.name}`"
          leading-icon="i-lucide-eye"
          size="xs"
          block
          :label="$t('links.moreDetails')"
          class="bg-brand-forest text-primary hover:bg-brand-forest/90 transition-all duration-300 text-xs sm:text-sm"
          :ui="{ label: 'hidden sm:block' }"
        />
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Product } from "~/types";

const props = defineProps<{
  product: Product;
  priority?: boolean;
}>();

const appConfig = useRuntimeConfig().public;
const { t } = useI18n();
const { isFavorite, toggleFavorite } = useFavorites();
const favorite = isFavorite(props.product.id);

const whatsAppUrl = computed(() => {
  const phone = appConfig.phone.replace(/\D/g, "");
  const productUrl = `${appConfig.siteUrl}/products/${props.product.slug}`;
  const message = encodeURIComponent(
    t("whatsapp.message", {
      name: props.product.name,
      price: props.product.price,
      url: productUrl,
    }),
  );
  return `https://wa.me/${phone}?text=${message}`;
});
</script>
