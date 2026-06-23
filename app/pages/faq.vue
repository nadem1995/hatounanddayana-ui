<script setup lang="ts">
import type { AccordionItem } from '@nuxt/ui'

const faqItems = ref<AccordionItem[]>([
  {
    label: 'What is included in the free plan?',
    icon: 'i-lucide-gift',
    content:
      'The free plan includes access to all core features, up to 3 projects, 5GB of storage, and community support. No credit card required to get started.',
  },
  {
    label: 'Can I upgrade or downgrade my plan at any time?',
    icon: 'i-lucide-refresh-cw',
    content:
      'Yes! You can upgrade or downgrade your plan at any time from your account settings. Changes take effect immediately and billing is prorated.',
  },
  {
    label: 'How do I cancel my subscription?',
    icon: 'i-lucide-x-circle',
    content:
      'You can cancel your subscription at any time from your account settings under "Billing". Your access will remain active until the end of the current billing period.',
  },
  {
    label: 'Is my data safe and secure?',
    icon: 'i-lucide-shield-check',
    content:
      'Absolutely. We use industry-standard AES-256 encryption for data at rest and TLS 1.3 for data in transit. We are SOC 2 Type II certified and GDPR compliant.',
  },
  {
    label: 'Do you offer a free trial for paid plans?',
    icon: 'i-lucide-clock',
    content:
      'Yes, we offer a 14-day free trial on all paid plans. No credit card is required and you get full access to all features during the trial period.',
  },
  {
    label: 'How can I contact support?',
    icon: 'i-lucide-headphones',
    content:
      'You can reach our support team via email at support@example.com, through our live chat (available 9am–6pm EST), or by opening a ticket in your dashboard.',
  },
])
</script>

<template>
  <UPage>
    <!-- Hero Section -->
    <UPageHero
      headline="Support"
      title="Frequently Asked Questions"
      description="Everything you need to know about our product and services. Can't find the answer you're looking for? Feel free to contact our support team."
      :links="[
        { label: 'Contact Support', to: '/contact', icon: 'i-lucide-mail', color: 'primary' },
        { label: 'Browse Docs', to: '/docs', icon: 'i-lucide-book-open', color: 'neutral', variant: 'subtle' },
      ]"
    />

    <!-- FAQ Section -->
    <UPageBody>
        <!-- Accordion FAQ -->
        <UAccordion
          type="single"
          collapsible
          :items="faqItems"
          :ui="{
            item: 'border border-default rounded-xl mb-3 overflow-hidden shadow-sm',
            trigger: 'px-5 py-4 font-medium text-base hover:bg-elevated/50',
            body: 'px-5 pb-5 text-muted text-sm leading-relaxed',
          }"
        />

        <!-- Bottom CTA -->
        <div class="rounded-2xl bg-elevated border border-default p-8 text-center space-y-4 mt-10">
          <UIcon name="i-lucide-message-circle-question" class="size-10 text-primary mx-auto" />
          <p class="text-lg font-semibold">Still have questions?</p>
          <p class="text-muted text-sm">
            Our team is happy to assist you with anything you need.
          </p>
          <UButton
            label="Get in Touch"
            icon="i-lucide-send"
            to="/contact"
            size="lg"
          />
        </div>

    </UPageBody>
  </UPage>
</template>