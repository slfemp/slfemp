<script lang="ts" setup>
import type { Cover } from "@/types/covers"


import { useArtists } from "@/composables/useArtists"
const { artists } = useArtists()

const { data: allCovers, status } = await useAsyncData<Cover[] | null>(
  'allCovers',
  () => $fetch('/api/covers'),
)


const searchQuery = ref('')
const selectedArtist = ref()

</script>

<template>
  <UContainer class="py-8 ">
    <UPageHero title="Album Covers" align="center" />

    <div class="flex flex-col sm:flex-row justify-between gap-4 pb-8">
      <div></div>
      <div class="flex flex-col sm:flex-row gap-4">
        <UInput v-model="searchQuery" icon="i-heroicons-magnifying-glass" color="white"
          placeholder="Search albums or artists..." class="sm:w-64" />

        <ClientOnly>
          <USelectMenu searchable searchable-placeholder="Search artists..." class="w-full lg:w-48" value-attribute="id"
            v-model="selectedArtist" option-attribute="artist_name" placeholder="Select an artist" :options="artists" />
        </ClientOnly>

      </div>
    </div>
    <ul class="grid grid-cols-2 place-content-center md:grid-cols-4 gap-8">
      <ULink :to="`/covers/${cover.id}`" class="group" v-for="cover in allCovers" :key="cover.id">
        <AlbumCover :cover="cover" />
      </ULink>
    </ul>
  </UContainer>
</template>
