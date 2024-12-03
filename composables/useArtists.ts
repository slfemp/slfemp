export const useArtists = () => {
  const { data: artists, status, error, refresh } = useAsyncData<{ id: number, artist_name: string }[]>(
    'artists',
    () => $fetch('/api/artists')
  )

  return {
    artists,
    status,
    error,
    refresh
  }
}
