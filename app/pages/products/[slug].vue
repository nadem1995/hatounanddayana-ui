<template>
  <section class="min-h-screen bg-primary">
    <AppPageBanner :title="product.name" :breadcrumbItems="items"/>

    <UContainer class="py-12">
      <article
        itemscope
        itemtype="https://schema.org/Product"
        :itemid="canonicalUrl"
      >
        <meta itemprop="sku" :content="String(product.id)"/>
        <meta itemprop="url" :content="canonicalUrl"/>
        <meta itemprop="brand" :content="$t('appName')"/>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">

          <div class="lg:col-span-7 flex gap-3">
            <div v-if="activeImages.length > 1" class="hidden sm:flex flex-col gap-2 w-16 shrink-0">
              <button
                v-for="img in activeImages"
                :key="img.id"
                class="size-16 rounded-xl overflow-hidden border-2 transition-colors"
                :class="activeThumb === img.id ? 'border-brand-forest' : 'border-brand-forest/20'"
                :aria-label="$t('product.viewImage')"
                @click="activeThumb = img.id"
              >
                <NuxtImg :src="img.image" :alt="product.name" class="w-full h-full object-cover" loading="lazy"/>
              </button>
            </div>

            <div
              class="flex-1 rounded-2xl overflow-hidden border border-brand-forest/20 relative cursor-zoom-in group"
              @mousemove="onMouseMove"
              @mouseleave="zoomStyle = {}"
              @click="isZoomOpen = true"
            >
              <NuxtImg
                :src="activeImage?.image"
                :alt="`${product.name} - ${selectedVariant?.color_name}`"
                class="w-full aspect-3/4 object-cover transition-transform duration-200 ease-out"
                :style="zoomStyle"
                format="webp"
                loading="eager"
                fetchpriority="high"
                width="600"
                height="800"
                itemprop="image"
              />

              <div
                class="absolute bottom-3 end-3 flex items-center justify-center size-8 rounded-full bg-brand-forest/70 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                aria-hidden="true"
              >
                <UIcon name="i-lucide-zoom-in" class="size-4"/>
              </div>
            </div>
          </div>

          <div v-if="activeImages.length > 1" class="sm:hidden -mt-4 flex gap-2 overflow-x-auto">
            <button
              v-for="img in activeImages"
              :key="img.id"
              class="shrink-0 size-16 rounded-xl overflow-hidden border-2 transition-colors"
              :class="activeThumb === img.id ? 'border-brand-forest' : 'border-brand-forest/20'"
              @click="activeThumb = img.id"
            >
              <NuxtImg :src="img.image" :alt="product.name" class="w-full h-full object-cover" loading="lazy"/>
            </button>
          </div>

          <div class="lg:col-span-5">
            <div class="lg:sticky lg:top-24 flex flex-col gap-5">
              <div class="flex items-start justify-between gap-4">
                <h1 class="text-2xl sm:text-3xl font-black text-brand-forest leading-tight" itemprop="name">
                  {{ product.name }}
                </h1>

                <UButton
                  square
                  color="neutral"
                  variant="ghost"
                  icon="i-lucide-heart"
                  :aria-pressed="favorite"
                  :aria-label="favorite ? $t('actions.removeFromFavorites') : $t('actions.addToFavorites')"
                  class="rounded-full bg-brand-forest/10 hover:scale-110 active:scale-95 transition-all"
                  :ui="{ leadingIcon: favorite ? 'text-red-500 fill-red-500' : 'text-stone-400' }"
                  @click="toggleFavorite(product.id)"
                />
              </div>

              <div itemprop="offers" itemscope itemtype="https://schema.org/Offer">
                <meta itemprop="priceCurrency" content="SYP"/>
                <meta itemprop="price" :content="String(product.price)"/>
                <link itemprop="availability" href="https://schema.org/InStock"/>
                <link itemprop="url" :href="canonicalUrl"/>
                <p class="text-brand-forest font-black text-2xl leading-none">
                  {{ product.price }}
                  <span class="text-sm font-medium text-stone-400">ل.س</span>
                </p>
              </div>


              <div v-if="product.variants?.length" class="flex items-center  gap-2">

                <div class="flex items-center gap-2" role="list" :aria-label="$t('product.availableColors')">
                  <button
                    v-for="variant in product.variants"
                    :key="variant.id"
                    role="listitem"
                    class="size-8 rounded-full ring-2 transition-all"
                    :class="selectedVariant?.id === variant.id ? 'ring-brand-forest scale-110' : 'ring-brand-forest/20'"
                    :style="{ backgroundColor: variant.color_code }"
                    :aria-label="variant.color_name"
                    @click="selectVariant(variant)"
                  />
                </div>

                <span class="text-brand-forest">
                  {{ selectedVariant?.color_name }}
                </span>
              </div>

              <div class="h-px bg-brand-forest/10"/>

              <UButton
                :to="whatsAppUrl"
                target="_blank"
                rel="noopener noreferrer nofollow"
                :label="$t('links.orderNow')"
                :aria-label="`${$t('links.orderNow')} - ${product.name}`"
                leading-icon="i-mdi-whatsapp"
                size="lg"
                block
                class="bg-brand-forest text-primary hover:bg-brand-forest/90 transition-all"
              />

              <div class="flex flex-col gap-3 pt-2">
                <div
                  class="content text-brand-forest/80 prose-headings:text-brand-forest prose-li:marker:text-brand-forest"
                  itemprop="description"
                  v-html="product.description"
                />
              </div>
            </div>
          </div>
        </div>
      </article>

      <section class="lg:mt-20 mt-10" v-if="data.related_products.length">
        <AppSectionTitle :title="$t('relatedProducts')"/>
        <UCarousel
          v-slot="{ item }"
          :items="data.related_products"
          :ui="{ item: 'sm:basis-1/3 lg:basis-1/5 basis-1/2' }"
          arrows
        >
          <CardProduct :product="item" :key="item.id" />
        </UCarousel>
      </section>
    </UContainer>

    <UModal v-model:open="isZoomOpen" fullscreen>
      <template #content>
        <div class="relative w-full h-full flex items-center justify-center bg-black/95">
          <UButton
            icon="i-lucide-x"
            color="neutral"
            variant="ghost"
            square
            class="absolute top-4 end-4 text-white z-10"
            :aria-label="$t('actions.close')"
            @click="isZoomOpen = false"
          />

          <UCarousel
            v-slot="{ item }"
            :items="activeImages"
            :start-index="activeImages.findIndex((i) => i.id === activeThumb)"
            arrows
            dots
            loop
            class="w-full max-w-3xl"
            :ui="{ item: 'basis-full flex items-center justify-center' }"
          >
            <NuxtImg :src="item.image" :alt="product.name" class="max-w-full max-h-[85vh] object-contain"/>
          </UCarousel>
        </div>
      </template>
    </UModal>
  </section>
</template>

<script setup lang="ts">
import type {BreadcrumbItem} from "@nuxt/ui";
import type {Product, ProductVariant} from "~/types";

const route = useRoute();
const {t} = useI18n();
const appConfig = useRuntimeConfig().public;
const {isFavorite, toggleFavorite} = useFavorites();

const {data} = await useApiFetch<{ data: Product }>(`products/${route.params.slug}`);

if (!data.value) {
  throw createError({statusCode: 404, statusMessage: "Product not found"});
}

const product = computed(() => data.value!.product);
const favorite = computed(() => isFavorite(product.value.id));

const selectedVariant = ref<ProductVariant | undefined>(product.value.variants?.[0]);
const activeThumb = ref(selectedVariant.value?.images?.[0]?.id);
const activeImages = computed(() => selectedVariant.value?.images ?? []);
const activeImage = computed(
  () => activeImages.value.find((i) => i.id === activeThumb.value) ?? activeImages.value[0]
);

function selectVariant(variant?: ProductVariant) {
  selectedVariant.value = variant;
  activeThumb.value = variant?.images?.[0]?.id;
}

// Zoom
const isZoomOpen = ref(false);
const zoomStyle = ref<Record<string, string>>({});

function onMouseMove(e: MouseEvent) {
  const target = e.currentTarget as HTMLElement;
  const rect = target.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;

  zoomStyle.value = {
    transformOrigin: `${x}% ${y}%`,
    transform: "scale(1.8)",
  };
}

// SEO
const plainDescription = computed(() =>
  product.value.description?.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim().slice(0, 160) ?? ""
);

const canonicalUrl = computed(() => `${appConfig.siteUrl}/products/${product.value.slug}`);

useSeoMeta({
  title: product.value.name,
  description: plainDescription,
  ogTitle: product.value.name,
  ogDescription: plainDescription,
  ogImage: activeImages.value[0]?.image,
  ogUrl: canonicalUrl,
  ogType: "product",
  twitterCard: "summary_large_image",
});

useHead({
  link: [{rel: "canonical", href: canonicalUrl.value}],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.value.name,
        image: activeImages.value.map((i) => i.image),
        description: plainDescription.value,
        sku: String(product.value.id),
        offers: {
          "@type": "Offer",
          url: canonicalUrl.value,
          priceCurrency: "SYP",
          price: product.value.price,
          availability: "https://schema.org/InStock",
        },
      }),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {"@type": "ListItem", position: 1, name: t("links.homePage"), item: appConfig.siteUrl},
          {"@type": "ListItem", position: 2, name: t("links.ourProducts"), item: `${appConfig.siteUrl}/products`},
          {"@type": "ListItem", position: 3, name: product.value.name, item: canonicalUrl.value},
        ],
      }),
    },
  ],
});

const whatsAppUrl = computed(() => {
  const phone = appConfig.phone.replace(/\D/g, "");
  const message = encodeURIComponent(
    t("whatsapp.message", {name: product.value.name, price: product.value.price, url: canonicalUrl.value})
  );
  return `https://wa.me/${phone}?text=${message}`;
});

const items = computed<BreadcrumbItem[]>(() => [
  {label: t("links.homePage"), to: {name: "index"}},
  {label: t("links.ourProducts"), to: {name: "products"}},
  {label: product.value.name, to: {name: "products-slug", params: {slug: product.value.slug}}},
]);
</script>

<style scoped>
.content :deep(h1) {
  font-size: 2.25rem;
  font-weight: 700;
}

.content :deep(h2) {
  font-size: 1.875rem;
  font-weight: 700;
}

.content :deep(h3) {
  font-size: 1.5rem;
  font-weight: 600;
}

.content :deep(h4) {
  font-size: 1.25rem;
  font-weight: 600;
}

.content :deep(ul) {
  list-style: disc;
  padding-left: 1.5rem;
}

.content :deep(ol) {
  list-style: decimal;
  padding-left: 1.5rem;
}
</style>
