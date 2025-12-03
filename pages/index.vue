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
  <UContainer class="py-8">
    <section class="mb-8 flex flex-col justify-between gap-6 sm:gap-10 lg:flex-row">
      <!-- content - start -->
      <NuxtImg src="/slider-paulwall-thegreatwall-mike-frost.jpg" alt="Paul Wall The Great Wall"
        class="w-full h-[40rem] object-cover" />
    </section>

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
