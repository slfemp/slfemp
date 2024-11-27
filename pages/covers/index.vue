<script lang="ts" setup>
import type { Cover } from "@/types/covers"

const { data: allCovers, status } = await useAsyncData<Cover[] | null>(
  'allCovers',
  () => $fetch('/api/covers'),
)
</script>

<template>
  <UContainer class="py-8 ">
    <UPageHero title="Covers" align="center" />
    <ul class="grid grid-cols-2 place-content-center md:grid-cols-4 gap-8">
      <ULink :to="`/covers/${cover.id}`" class="group" v-for="cover in allCovers" :key="cover.id">
        <AlbumCover :cover="cover" />
      </ULink>
    </ul>
  </UContainer>
</template>
