<script setup lang="ts">
import type { Cover } from "../types/covers"
defineOgImageComponent("slfemp", {
  title: "SLFEMP.com",
  description: "Young Self Employed – A Houston Story",
})
definePageMeta({
  title: "Home",
})

const { data: featured, status } = await useAsyncData<Cover[] | null>(
  'featuredCovers',
  () => $fetch('/api/covers?featured=true'),
)

const { data: latestWork, status: latestWorkStatus } = await useAsyncData<Cover[] | null>(
  'latestWork',
  () => $fetch('/api/covers?latest=true'),
)


</script>

<template>
      <HeroVideo 
      :video-src="undefined"
      image-src="/fatpat-slider.jpg" 
      alt="Paul Wall The Great Wall"
      max-height="600px"
    />

  <UContainer class="py-8">
    <!-- Hero Video Section -->

    <!-- Top 5 Covers -->
    <section class="py-8 flex flex-col justify-between gap-6 sm:gap-10   lg:flex-row">
      <Top5Covers v-if="featured" :covers="featured" />
    </section>

    <!-- Promo section -->
    <section class="pb-8 ">
      <!-- <ClientOnly>
        <PromoSection />
      </ClientOnly> -->
    </section>

    <section class="pb-8">
      <LatestWork v-if="latestWork" :latest-work="latestWork" />
    </section>
  </UContainer>
</template>
