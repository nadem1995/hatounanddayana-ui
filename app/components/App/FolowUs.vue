<template>
  <section aria-labelledby="instagram-heading">
    <AppSectionTitle :title="$t('cta.followUs')" />

    <div class="relative overflow-hidden rounded-3xl bg-brand-forest">
      <!-- Bg pattern -->
      <div
        class="pattern-crosshatch absolute inset-0 opacity-[0.03] pointer-events-none"
        aria-hidden="true"
      />

      <!-- Glow -->
      <div
        class="absolute -top-32 -left-32 size-96 rounded-full bg-primary/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div class="relative grid lg:grid-cols-5">
        <!-- ── Content ── -->
        <div
          class="lg:col-span-2 flex flex-col justify-center gap-5 sm:gap-6 p-6 sm:p-10 lg:p-14"
        >
          <!-- Instagram badge -->
          <div
            class="inline-flex w-fit items-center gap-3 rounded-full border border-primary/20 bg-primary/10 px-4 py-2"
            aria-hidden="true"
          >
            <div
              class="flex size-7 items-center justify-center rounded-full shrink-0"
              style="
                background: linear-gradient(135deg, #f58529, #dd2a7b, #8134af);
              "
            >
              <UIcon name="i-mdi-instagram" class="size-4 text-white" />
            </div>
            <span class="text-primary text-sm font-semibold">
              {{ $t("cta.instagram") }}
            </span>
          </div>

          <!-- Title -->
          <h2
            id="instagram-heading"
            class="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight"
          >
            {{ $t("cta.title") }}
          </h2>

          <!-- Divider -->
          <USeparator
            :ui="{
              root: 'max-w-[80px]',
              border: 'border-primary/20',
              icon: 'text-primary/40 size-4',
            }"
            icon="i-material-symbols-light-diamond-shine"
            decorative
          />

          <!-- Description -->
          <p
            class="text-primary/70 max-w-xs text-sm sm:text-base leading-relaxed"
          >
            {{ $t("cta.description") }}
          </p>

          <!-- CTA Button -->
          <UButton
            to="https://www.instagram.com/your_account"
            target="_blank"
            rel="noopener noreferrer"
            icon="i-mdi-instagram"
            trailing-icon="i-lucide-arrow-up-right"
            size="xl"
            block
            :label="$t('links.followUs')"
            :aria-label="$t('links.followUsOn', { platform: 'Instagram' })"
            class="rounded-full font-black p-3 w-max text-white hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-300"
            style="
              background: linear-gradient(135deg, #f58529, #dd2a7b, #8134af);
            "
          />
        </div>

        <!-- ── Gallery ── -->
        <div class="lg:col-span-3 p-3 sm:p-4">
          <div class="grid grid-cols-3 gap-2 sm:gap-3 h-full">
            <!-- Tall left -->
            <NuxtImg
              src="https://placehold.co/500x700"
              :alt="$t('cta.gallery.image1Alt')"
              width="500"
              height="700"
              format="webp"
              loading="lazy"
              class="col-span-1 row-span-2 h-full min-h-[240px] sm:min-h-[320px] w-full rounded-xl sm:rounded-2xl object-cover brightness-90 hover:brightness-100 transition-all duration-500 hover:scale-[1.02]"
            />

            <!-- Top wide -->
            <NuxtImg
              src="https://placehold.co/800x400"
              :alt="$t('cta.gallery.image2Alt')"
              width="800"
              height="400"
              format="webp"
              loading="lazy"
              class="col-span-2 h-32 sm:h-44 w-full rounded-xl sm:rounded-2xl object-cover brightness-90 hover:brightness-100 transition-all duration-500 hover:scale-[1.02]"
            />

            <!-- Small 1 -->
            <NuxtImg
              src="https://placehold.co/400"
              :alt="$t('cta.gallery.image3Alt')"
              width="400"
              height="400"
              format="webp"
              loading="lazy"
              class="h-full w-full rounded-xl sm:rounded-2xl object-cover brightness-90 hover:brightness-100 transition-all duration-500 hover:scale-[1.02]"
            />

            <!-- Small 2 -->
            <NuxtImg
              src="https://placehold.co/400"
              :alt="$t('cta.gallery.image4Alt')"
              width="400"
              height="400"
              format="webp"
              loading="lazy"
              class="h-full w-full rounded-xl sm:rounded-2xl object-cover brightness-90 hover:brightness-100 transition-all duration-500 hover:scale-[1.02]"
            />

            <!-- Bottom wide -->
            <NuxtImg
              src="https://placehold.co/800x400"
              :alt="$t('cta.gallery.image5Alt')"
              width="800"
              height="400"
              format="webp"
              loading="lazy"
              class="col-span-2 h-32 sm:h-44 w-full rounded-xl sm:rounded-2xl object-cover brightness-90 hover:brightness-100 transition-all duration-500 hover:scale-[1.02]"
            />

            <!-- Bottom single -->
            <NuxtImg
              src="https://placehold.co/500x700"
              :alt="$t('cta.gallery.image6Alt')"
              width="500"
              height="700"
              format="webp"
              loading="lazy"
              class="h-32 sm:h-44 w-full rounded-xl sm:rounded-2xl object-cover brightness-90 hover:brightness-100 transition-all duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
