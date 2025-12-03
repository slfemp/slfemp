export const useArtists = () => {
  const { data: artists, pending, error, refresh } = useLazyAsyncData(
    'artists',
    () => $fetch('/api/artists')
  )

  return {
    artists: readonly(artists),
    pending: readonly(pending),
    error: readonly(error),
    refresh
  }
}
