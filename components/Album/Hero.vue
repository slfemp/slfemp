<template>
  <section class="relative overflow-hidden">
    <UContainer>
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row gap-8 items-center">
          <NuxtImg :src="album.front_cover" alt="Album Cover"
            class="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-lg shadow-xl" loading="eager" />

          <div class="flex flex-col gap-4">

            <h1 class="text-4xl md:text-5xl font-bold">{{ album.album_name }}</h1>
            <h2 class="text-2xl md:text-3xl text-gray-400 font-semibold">{{ album.artists.map(artist =>
              artist.artist_name).join(', ')
              }}</h2>
            <!--  {{ album.labels.map(label =>
                label.label_name).join(', ')
                }} -->
            <p class="uppercase font-semibold tracking-wide text-sm text-gray-400">Released: {{ album.date_released }}
            </p>
            <div class="flex pt-2 flex-col gap-2 text-gray-400 text-lg tracking-wide">
              <div class="flex flex-wrap gap-3 w-full">
                <div v-for="label in album.labels" :key="label.id" class="flex flex-row items-center gap-2">
                  <UAvatar size="xs" :alt="label.label_name" :src="label.picture" />{{
                    label.label_name }}
                </div>
              </div>

            </div>

            <div class="flex gap-4 mt-4" v-if="album.spotify || album.apple_music">
              <UButton v-if="album.spotify" color="white" variant="solid" icon="i-simple-icons-spotify"
                :to="album.spotify" target="_blank">
                Listen on Spotify
              </UButton>

              <UButton v-if="album.apple_music" color="white" variant="solid" icon="i-simple-icons-applemusic"
                :to="album.apple_music" target="_blank">
                Listen on Apple Music
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import type { Cover } from "@/types/covers"

const props = defineProps<{
  album: Cover
}>()


</script>