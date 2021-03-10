import { createEffect } from 'effector'
import { searchTracksByQuery } from '../../api/requests/searchTracksByQuery'
import { serializeTracks } from '../serializers/serializeTracks'

type TracksPropsType = {
  query: string
  offset: number
}

// getMoreTracks loads next track items
export const getTracks = createEffect(
  async ({ query, offset }: TracksPropsType) => {
    const tracksData = await searchTracksByQuery(query, offset)

    // Serialize tracks to appropriate format
    const serializedTracks = serializeTracks(tracksData.tracks.items)

    return serializedTracks
  }
)
