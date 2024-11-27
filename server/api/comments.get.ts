import { serverSupabaseClient } from '#supabase/server'
import type { Comment } from '~/types/comments'

export default defineEventHandler(async (event) => {
    try {
        const client = await serverSupabaseClient(event)
        const query = getQuery(event)

        let commentsQuery = client
            .from('comments')
            .select(`
        *,
        user:user_id (
          id,
          email,
          user_metadata
        )
      `)
            .order('created_at', { ascending: false })

        // Filter by album_id if provided
        if (query.album_id) {
            commentsQuery = commentsQuery.eq('album_id', query.album_id)
        }

        // Filter by photo_id if provided
        if (query.photo_id) {
            commentsQuery = commentsQuery.eq('photo_id', query.photo_id)
        }

        // Filter by poster_id if provided
        if (query.poster_id) {
            commentsQuery = commentsQuery.eq('poster_id', query.poster_id)
        }

        // Add pagination
        if (query.limit) {
            commentsQuery = commentsQuery.limit(Number(query.limit))
        }

        if (query.offset) {
            commentsQuery = commentsQuery.range(
                Number(query.offset),
                Number(query.offset) + (Number(query.limit) || 10) - 1
            )
        }

        const { data, error } = await commentsQuery

        if (error) {
            throw createError({
                statusCode: 500,
                message: error.message
            })
        }

        return data
    }
    catch (error) {
        throw createError({
            statusCode: error.statusCode || 500,
            message: error.message
        })
    }
}) 