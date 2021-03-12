import { createEffect } from 'effector'
import { searchArtistsByQuery } from '../../api/requests/searchArtistsByQuery'
import { serializeArtists } from '../serializers/serializeArtists'

type ArtistsPropsType = {
  query: string
  offset: number
}

// getArtists loads next artists items
export const getArtists = createEffect(
  async ({ query, offset }: ArtistsPropsType) => {
    const artistsData = await searchArtistsByQuery(query, offset)
    // Serialize artists to appropriate format
    const serializedArtists = serializeArtists(artistsData.artists.items)

    return serializedArtists
  }
)
