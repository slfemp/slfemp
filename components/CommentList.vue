<template>
  <div class="space-y-4">
    <TransitionGroup name="comment">
      <div v-for="comment in comments" :key="comment.id" class="p-4 rounded-lg bg-gray-900 border border-gray-800">
        <div class="flex items-start gap-4">
          <UAvatar :src="comment.author.avatar" :alt="comment.author.name" />
          <div class="flex-1">
            <div class="flex items-center justify-between">
              <span class="font-medium text-white">{{ comment.author.name }}</span>
              <span class="text-sm text-gray-400">
                {{ formatDate(comment.createdAt) }}
              </span>
            </div>
            <p class="mt-2 text-gray-300">{{ comment.content }}</p>
          </div>
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">

import type { Comment } from '~/composables/useComments'

defineProps<{
  comments: Comment[]
}>()

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(new Date(date))
}
</script>

<style scoped>
.comment-enter-active,
.comment-leave-active {
  transition: all 0.3s ease;
}

.comment-enter-from,
.comment-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>