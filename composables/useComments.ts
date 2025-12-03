export const useComments = (coverId?: string) => {
  const { data: comments, pending, error, refresh } = useLazyAsyncData(
    coverId ? `comments-${coverId}` : 'comments',
    () => $fetch('/api/comments', {
      query: coverId ? { cover_id: coverId } : {}
    })
  )

  const addComment = async (commentData: any) => {
    try {
      const newComment = await $fetch('/api/comments', {
        method: 'POST',
        body: commentData
      })
      
      // Refresh the comments list after adding
      await refresh()
      
      return newComment
    } catch (error) {
      throw error
    }
  }

  return {
    comments: readonly(comments),
    pending: readonly(pending),
    error: readonly(error),
    refresh,
    addComment
  }
}
