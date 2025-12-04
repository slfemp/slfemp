<script setup lang="ts">
interface Props {
  videoSrc?: string
  imageSrc: string
  alt: string
  maxHeight?: string
}

const props = withDefaults(defineProps<Props>(), {
  maxHeight: '600px'
})

const videoRef = ref<HTMLVideoElement>()
const showVideo = ref(false)
const videoLoaded = ref(false)

// Check if video source is provided and valid
onMounted(() => {
  if (props.videoSrc && videoRef.value) {
    // Test if video can be loaded
    videoRef.value.addEventListener('loadeddata', () => {
      videoLoaded.value = true
      showVideo.value = true
    })
    
    videoRef.value.addEventListener('error', () => {
      console.warn('Video failed to load, falling back to image')
      showVideo.value = false
    })
  }
})
</script>

<template>
  <section class="relative w-full overflow-hidden">
    <!-- Video Element -->
    <video
      v-if="videoSrc"
      ref="videoRef"
      :src="videoSrc"
      :class="[
        'w-full object-cover transition-opacity duration-500',
        showVideo ? 'opacity-100' : 'opacity-0 absolute inset-0'
      ]"
      :style="{ maxHeight: maxHeight, height: maxHeight }"
      autoplay
      muted
      loop
      playsinline
    />
    
    <!-- Fallback Image -->
    <NuxtImg 
      :src="imageSrc" 
      :alt="alt"
      :class="[
        'w-full object-cover transition-opacity duration-500',
        !showVideo ? 'opacity-100' : 'opacity-0 absolute inset-0'
      ]"
      :style="{ maxHeight: maxHeight, height: maxHeight }"
    />
    
    <!-- Loading overlay (optional) -->
    <div 
      v-if="videoSrc && !videoLoaded && !showVideo"
      class="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center"
      :style="{ maxHeight: maxHeight, height: maxHeight }"
    >
      <div class="text-white">Loading...</div>
    </div>
  </section>
</template>
