<template>
  <article
    class="group relative flex flex-col overflow-hidden rounded-2xl backdrop-blur-xl bg-brand-forest/10 border border-brand-forest/20 hover:border-brand-forest/50 hover:-translate-y-1 transition-all duration-300"
    itemscope
    itemtype="https://schema.org/Product"
    itemid="`${appConfig.siteUrl}/products/${product.slug}`"
  >
    <!-- SEO: extra hidden structured data not covered by visible markup -->
    <meta itemprop="sku" :content="String(product.id)" />
    <meta itemprop="url" :content="`${appConfig.siteUrl}/products/${product.slug}`" />
    <meta itemprop="description" :content="plainDescription" />
    <meta itemprop="brand" :content="$t('appName')" />

    <!-- ── Image ── -->
    <div class="relative overflow-hidden spect-3/4">
      <NuxtLink
        :to="`/products/${product.slug}`"
        :title="product.name"
        tabindex="-1"
        aria-hidden="true"
      >
        <NuxtImg
          :src="product.image"
          :alt="imageAlt"
          :loading="priority ? 'eager' : 'lazy'"
          :fetchpriority="priority ? 'high' : 'auto'"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          width="300"
          height="400"
          format="webp"
          class="w-full h-auto  transition-transform duration-700 group-hover:scale-105"
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
        color="neutral"
        variant="ghost"
        icon="i-lucide-heart"
        :aria-label="
          favorite
            ? $t('actions.removeFromFavorites')
            : $t('actions.addToFavorites')
        "
        :aria-pressed="favorite"
        class="absolute top-2 end-2 rounded-full bg-brand-forest/70 shadow-md   hover:scale-110 active:scale-95 transition-all duration-200"
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
      <NuxtLink :to="`/products/${product.slug}`" :title="product.name">
        <h3
          class="text-sm sm:text-xl text-brand-forest line-clamp-2 leading-tight"
          itemprop="name"
        >
          {{ product.name }}
        </h3>
      </NuxtLink>

      <!-- Price + Colors -->
      <div class="flex items-center justify-between gap-2">
        <div itemprop="offers" itemscope itemtype="https://schema.org/Offer">
          <meta itemprop="priceCurrency" content="SYP" />
          <meta itemprop="price" :content="String(product.price)" />
          <link itemprop="availability" href="https://schema.org/InStock" />
          <link itemprop="url" :href="`${appConfig.siteUrl}/products/${product.slug}`" />
          <p class="text-brand-forest font-black text-sm sm:text-base leading-none">
            {{ product.price }}
            <span class="text-xs font-medium text-stone-400">ل.س</span>
          </p>
        </div>
        <div
          v-if="product.color_codes?.length"
          class="flex items-center gap-1 flex-wrap"
          role="list"
          :aria-label="$t('product.availableColors')"
        >
          <span
            v-for="color in product.color_codes.slice(0, 4)"
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
        <UButton
          :to="whatsAppUrl"
          target="_blank"
          rel="noopener noreferrer nofollow"
          :label="$t('links.orderNow')"
          :aria-label="`${$t('links.orderNow')} - ${product.name}`"
          leading-icon="i-mdi-whatsapp"
          size="xs"
          block
          class="bg-brand-forest text-primary hover:bg-brand-forest/90 transition-all duration-300 text-xs sm:text-sm"
          :ui="{ label: 'hidden xs:block sm:block' }"
        />
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

// Strip HTML tags from description for use in meta itemprop
const plainDescription = computed(() =>
  props.product.description
    ?.replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 160) ?? ""
);

// More descriptive, keyword-rich alt text instead of just the name
const imageAlt = computed(() =>
  t("product.imageAlt", { name: props.product.name }) ?? props.product.name
);

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
