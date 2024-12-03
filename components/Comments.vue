<template>
  <section class="px-4">
    <UContainer>
      <UCard>
        <template #header>
          <h2 class="text-2xl font-bold">Comments</h2>
        </template>

        <div v-if="isAuthenticated" class="mb-8">
          <UTextarea v-model="newComment" placeholder="Share your thoughts..." class="mb-4" />
          <UButton color="primary" @click="addComment">
            Post Comment
          </UButton>
        </div>

        <div v-else class="mb-8">
          <UAlert icon="i-heroicons-lock-closed" :actions="[{ variant: 'ghost', color: 'gray', label: 'Sign In' }]"
            title="Please sign in to comment" />

        </div>

        <div class="space-y-6">
          <template v-for="comment in comments" :key="comment.id">
            <div class="flex gap-4">
              <UAvatar :src="comment.user.avatar" :alt="comment.user.name" />
              <div class="flex-1">
                <div class="flex items-center gap-2 mb-2">
                  <span class="font-semibold">{{ comment.user.name }}</span>
                  <span class="text-sm text-gray-400">{{ comment.timestamp }}</span>
                </div>
                <p class="text-gray-200 mb-2">{{ comment.content }}</p>
                <div class="flex gap-4">
                  <UButton color="gray" variant="ghost" size="sm" icon="i-heroicons-heart">
                    {{ comment.likes }}
                  </UButton>
                  <UButton color="gray" variant="ghost" size="sm" icon="i-heroicons-chat-bubble-left">
                    Reply
                  </UButton>
                </div>
              </div>
            </div>
          </template>
        </div>
      </UCard>
    </UContainer>
  </section>
</template>

<script setup>
const user = useSupabaseUser()

// console.log(user.value)

const isAuthenticated = ref(user.value)
const newComment = ref('')

const comments = ref([
  {
    id: 1,
    user: {
      name: 'John Doe',
      avatar: 'https://picsum.photos/32'
    },
    content: 'This album is absolutely amazing! The production quality is outstanding.',
    timestamp: '2 hours ago',
    likes: 5
  },
  {
    id: 2,
    user: {
      name: 'Jane Smith',
      avatar: 'https://picsum.photos/32'
    },
    content: 'The third track is my favorite. The guitar solo is incredible!',
    timestamp: '5 hours ago',
    likes: 3
  }
])

const addComment = () => {
  if (!newComment.value.trim()) return

  comments.value.unshift({
    id: comments.value.length + 1,
    user: {
      name: 'Current User',
      avatar: 'https://picsum.photos/32'
    },
    content: newComment.value,
    timestamp: 'Just now',
    likes: 0
  })

  newComment.value = ''
}
</script>