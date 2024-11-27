<script lang="ts" setup>
import type { Cover } from "@/types/covers"

const route = useRoute()

// In your Vue component
const { data: cover } = await useAsyncData<Cover>(
  'cover',
  () => $fetch('/api/cover', {
    params: {
      id: route.params.id
    }
  })
)
</script>

<template>
  <UContainer>
    <UPageHeader :ui="{ title: 'text-4xl font-bold' }" headline="Album Details" :title="cover?.album_name"
      class="py-[50px]" :description="`Year Released: ${cover?.year_released}`" />

    <UBlogList orientation="vertical" class="py-8">
      <UBlogPost :ui="{ image: { wrapper: 'aspect-square' } }" orientation="horizontal">
        <template #image>
          <div class="p-4">
            <AlbumCover :cover="cover" />
          </div>
        </template>
        <template #title>
          <h2 class="text-2xl">
            {{ cover?.album_name }}
          </h2>
        </template>
        <template #description>
          <div class="h-full flex flex-col space-y-8">
            <p class="text-lg" v-html="cover?.story">

            </p>
            <div v-if="cover?.spotify || cover?.apple_music" class="flex flex-col space-y-2">
              <p>
                Listen on:
              </p>

              <div class="flex flex-auto space-x-2 w-full">
                <UButton v-if="cover?.spotify" target="_blank" :to="cover?.spotify" icon="i-simple-icons-spotify"
                  size="xs" :ui="{ base: 'tracking-normal', rounded: 'rounded-sm' }" color="primary" variant="outline"
                  label="Spotify" :trailing="false" />

                <UButton v-if="cover?.apple_music" target="_blank" :to="cover?.apple_music"
                  icon="i-simple-icons-applemusic" size="xs" :ui="{ base: 'tracking-normal', rounded: 'rounded-sm' }"
                  color="primary" variant="outline" label="Apple Music" :trailing="false" />
              </div>
            </div>
          </div>
        </template>
      </UBlogPost>
    </UBlogList>
  </UContainer>
</template>
