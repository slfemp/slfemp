<template>
  <div class="max-w-2xl mx-auto p-4 bg-white shadow-lg rounded-lg">
    <h2 class="text-2xl font-bold mb-6 text-gray-800">Comments</h2>

    <!-- New Comment Form -->
    <form @submit.prevent="addComment" class="mb-8">
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
        <input type="text" id="name" v-model="newComment.name" required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
      </div>
      <div class="mb-4">
        <label for="comment" class="block text-sm font-medium text-gray-700">Comment</label>
        <textarea id="comment" v-model="newComment.text" required rows="3"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
      </div>
      <button type="submit"
        class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out">
        Post Comment
      </button>
    </form>

    <!-- Comments List -->
    <div class="space-y-6">
      <TransitionGroup name="comment-list">
        <div v-for="comment in visibleComments" :key="comment.id" class="bg-gray-50 p-4 rounded-lg shadow">
          <div class="flex items-center mb-2">
            <div class="bg-indigo-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-semibold">
              {{ comment.name.charAt(0).toUpperCase() }}
            </div>
            <h3 class="ml-2 font-semibold text-gray-800">{{ comment.name }}</h3>
            <span class="ml-auto text-sm text-gray-500">{{ formatDate(comment.date) }}</span>
          </div>
          <p class="text-gray-700">{{ comment.text }}</p>
        </div>
      </TransitionGroup>
    </div>

    <!-- Load More Button -->
    <div v-if="hasMoreComments" class="mt-6 text-center">
      <button @click="loadMoreComments"
        class="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-150 ease-in-out">
        Load More Comments
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Sample comments data (in a real app, this would come from an API)
const allComments = ref([
  { id: 1, name: 'Alice', text: 'Great article!', date: new Date('2023-05-10T10:00:00') },
  { id: 2, name: 'Bob', text: 'I learned a lot from this.', date: new Date('2023-05-10T11:30:00') },
  { id: 3, name: 'Charlie', text: 'Looking forward to more content like this.', date: new Date('2023-05-10T14:15:00') },
  { id: 4, name: 'Diana', text: 'This was very insightful.', date: new Date('2023-05-11T09:45:00') },
  { id: 5, name: 'Ethan', text: 'I have a question about the third point...', date: new Date('2023-05-11T16:20:00') },
])

const visibleCount = ref(3)
const newComment = ref({ name: '', text: '' })

const visibleComments = computed(() => {
  return allComments.value.slice(0, visibleCount.value).reverse()
})

const hasMoreComments = computed(() => {
  return visibleCount.value < allComments.value.length
})

function addComment() {
  const comment = {
    id: allComments.value.length + 1,
    name: newComment.value.name,
    text: newComment.value.text,
    date: new Date()
  }
  allComments.value.push(comment)
  newComment.value = { name: '', text: '' }
  // Ensure the new comment is visible
  if (visibleCount.value < allComments.value.length) {
    visibleCount.value++
  }
}

function loadMoreComments() {
  visibleCount.value += 3
}

function formatDate(date) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date)
}
</script>

<style scoped>
.comment-list-enter-active,
.comment-list-leave-active {
  transition: all 0.5s ease;
}

.comment-list-enter-from,
.comment-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>