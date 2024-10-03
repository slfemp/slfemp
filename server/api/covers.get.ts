import { serverSupabaseClient } from '#supabase/server'
import { QueryResult, QueryData, QueryError } from '@supabase/supabase-js'

/**
 * Retrieves album covers from the database based on query parameters.
 * 
 * @param event - The H3 event object containing request information.
 * @returns A Promise resolving to an array of album objects.
 * @throws {Error} If there's an issue with the database query.
 */
export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event)
  const query = getQuery(event)

  let albumsWithRelationsQuery = client
    .from('albums')
    .select(`
      *,
      artists:artists!inner!albumartists (
        id,
        artist_name
      ),
      labels:labels!inner!albumlabels (
        id,
        label_name
      )
    `)

  // https://supabase.com/docs/guides/database/joins-and-nesting
  type albumsWithRelations = QueryData<typeof albumsWithRelationsQuery>

  /**
   * Filters albums by their 'featured' status if the parameter is provided.
   * @param {string} query.featured - 'true' for featured albums, 'false' for non-featured.
   */
  if (query.featured !== undefined) {
    albumsWithRelationsQuery = albumsWithRelationsQuery.eq('featured', query.featured === 'true')
  }

  /**
   * Retrieves the latest 5 covers in descending order of date_released.
   * @param {string} query.latest - 'true' to get the latest 5 covers.
   */
  if (query.latest === 'true') {
    albumsWithRelationsQuery = albumsWithRelationsQuery
      .order('date_released', { ascending: false })
      .limit(6)
  }

  /**
   * Limits the number of returned albums if the parameter is provided.
   * @param {string} query.limit - The maximum number of albums to return.
   */
  if (query.limit) {
    albumsWithRelationsQuery = albumsWithRelationsQuery.limit(Number(query.limit))
  }

  // Add more query parameter handlers here as needed

  const { data, error } = await albumsWithRelationsQuery

  if (error) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message,
    })
  }

  const albums: albumsWithRelations = data

  return albums
})
