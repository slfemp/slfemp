import { serverSupabaseClient } from '#supabase/server'
import { QueryData } from '@supabase/supabase-js'

/**
 * Retrieves a single album cover from the database based on the ID.
 * 
 * @param event - The H3 event object containing request information.
 * @returns A Promise resolving to a single album object.
 * @throws {Error} If there's an issue with the database query or album not found.
 */
export default defineEventHandler(async (event) => {
    try {
        const client = await serverSupabaseClient(event)
        const query = getQuery(event)

        if (!query.id) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Album ID is required',
            })
        }

        const albumQuery = client
            .from('albums')
            .select(`
                *,
                artists:artists!inner!albumartists (
                    id,
                    artist_name
                ),
                labels:labels!inner!albumlabels (
                    id,
                    label_name,
                    picture
                )
            `)
            .eq('id', query.id)
            .single()

        type Album = QueryData<typeof albumQuery>

        const { data, error } = await albumQuery

        if (error) {
            throw error
        }

        if (!data) {
            throw createError({
                statusCode: 404,
                statusMessage: 'Album not found',
            })
        }

        return data as Album
    } catch (error: unknown) {
        console.error('Error in cover.get.ts:', error)
        throw createError({
            statusCode: error && typeof error === 'object' && 'statusCode' in error ? error.statusCode : 500,
            statusMessage: error instanceof Error ? error.message : 'An unexpected error occurred',
        })
    }
}) 