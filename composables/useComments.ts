import { ref } from 'vue'

export interface Comment {
  id: string
  content: string
  createdAt: Date
  author: {
    name: string
    avatar: string
  }
}

export const useComments = () => {
  const comments = ref<Comment[]>([])

  const addComment = (content: string) => {
    const newComment: Comment = {
      id: crypto.randomUUID(),
      content,
      createdAt: new Date(),
      author: {
        name: 'Current User',
        avatar: `https://avatar.vercel.sh/${crypto.randomUUID()}`
      }
    }
    comments.value.unshift(newComment)
  }

  return {
    comments,
    addComment
  }
}