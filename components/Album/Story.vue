<template>
  <section class="px-4">
    <UContainer>
      <UCard class="prose prose-invert max-w-none px-0">
        <h2 class="text-3xl font-bold mb-6 mt-0">About the Album</h2>
        <div class="space-y-4">
          <div v-html="album.story" />

          <!-- <div v-if="story.images.length" class="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            <UImage v-for="(image, index) in story.images" :key="index" :src="image.url" :alt="image.caption"
              class="rounded-lg" />
          </div> -->

          <!-- <div class="mt-8">
            <h3 class="text-xl font-semibold mb-4">Credits</h3>
            <ul class="list-disc pl-4">
              <li v-for="(credit, index) in story.credits" :key="index">
                {{ credit }}
              </li>
            </ul>
          </div> -->
        </div>

        <div class="mt-6 flex gap-4">
          <UButton v-for="social in socialShare" :key="social.name" :icon="social.icon" color="gray" variant="ghost"
            :to="social.url" target="_blank">
            {{ social.name }}
          </UButton>
        </div>
      </UCard>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import type { Cover } from "@/types/covers"

const props = defineProps<{
  album: Cover
}>()

const story = {
  content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  images: [
    { url: 'https://picsum.photos/600/400', caption: 'Studio Session' },
    { url: 'https://picsum.photos/600/400', caption: 'Behind the Scenes' }
  ],
  credits: [
    'Produced by: Producer Name',
    'Mixed by: Mix Engineer',
    'Mastered by: Mastering Engineer',
    'Artwork by: Artist Name'
  ]
}

const socialShare = [
  { name: 'Share on X', icon: 'i-simple-icons-x', url: '#' },
  { name: 'Share on Facebook', icon: 'i-simple-icons-facebook', url: '#' },
  { name: 'Copy Link', icon: 'i-heroicons-link', url: '#' }
]
</script>