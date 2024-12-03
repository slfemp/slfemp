<template>
  <div class="w-full">
    <UTextarea v-model="newComment" :rows="3" placeholder="Write a comment..." class="mb-2" :ui="{
      base: 'relative w-full flex flex-col',
      input: 'bg-gray-900 border-gray-800 text-white placeholder-gray-400'
    }" />
    <div class="flex justify-end">
      <UButton :disabled="!newComment.trim()" @click="submitComment" color="primary" variant="solid">
        Post Comment
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const newComment = ref('')
const emit = defineEmits(['submit'])

const submitComment = () => {
  if (newComment.value.trim()) {
    emit('submit', newComment.value)
    newComment.value = ''
  }
}
</script>