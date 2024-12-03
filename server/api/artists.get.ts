import { serverSupabaseClient } from '#supabase/server'
import { QueryData, PostgrestError } from '@supabase/supabase-js'

export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient(event)

    const artistQuery = client
        .from('artists')
        .select('id, artist_name')
        .order('artist_name')

    type Artist = QueryData<typeof artistQuery>

    const { data, error } = await artistQuery as { data: Artist[] | null, error: PostgrestError | null }

    if (!data) {
        throw createError({
            statusCode: 404,
            statusMessage: 'No artists found',
        })
    }

    if (error) {
        throw createError({
            statusCode: 500,
            statusMessage: error.message,
        })
    }

    return data
}) 