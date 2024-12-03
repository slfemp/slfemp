<template>
  <section class="py-8">
    <UContainer>
      <UCard class="bg-gray-900">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(info, index) in albumMetadata" :key="index" class="p-4">
            <h3 class="text-gray-400 text-sm mb-2">{{ info.label }}</h3>
            <p class="text-white">{{ info.value }}</p>
          </div>
        </div>

        <div class="mt-6 flex gap-4">
          <UButton v-for="social in socialShare" :key="social.name" :icon="social.icon" color="gray" variant="ghost"
            :href="social.url" target="_blank">
            {{ social.name }}
          </UButton>
        </div>
      </UCard>
    </UContainer>
  </section>
</template>

<script setup>


const currentUrl = ref('')

onMounted(() => {
  currentUrl.value = window.location.href
})

const socialShare = computed(() => [
  {
    name: 'Share on X',
    icon: 'i-simple-icons-x',
    url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl.value)}&text=Check out this album!`
  },
  {
    name: 'Share on Facebook',
    icon: 'i-simple-icons-facebook',
    url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl.value)}`
  },
  {
    name: 'Copy Link',
    icon: 'i-heroicons-link',
    url: '#'
  }
])
</script>