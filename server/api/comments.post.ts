import { serverSupabaseClient, serverSupabaseUser } from '#supabase/server'
import type { CreateCommentDTO } from '~/types/comments'

export default defineEventHandler(async (event) => {
    try {
        const client = await serverSupabaseClient(event)
        const user = await serverSupabaseUser(event)

        if (!user) {
            throw createError({
                statusCode: 401,
                message: 'Unauthorized'
            })
        }

        const body = await readBody<CreateCommentDTO>(event)

        if (!body.comment_text) {
            throw createError({
                statusCode: 400,
                message: 'Comment text is required'
            })
        }

        // Ensure at least one ID is provided
        if (!body.album_id && !body.photo_id && !body.poster_id) {
            throw createError({
                statusCode: 400,
                message: 'At least one ID (album_id, photo_id, or poster_id) is required'
            })
        }

        const { data, error } = await client
            .from('comments')
            .insert({
                ...body,
                user_id: user.id,
                created_at: new Date().toISOString()
            })
            .select()
            .single()

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