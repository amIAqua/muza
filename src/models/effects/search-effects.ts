import { createEffect } from 'effector'
import { searchAllByQuery } from '../../api/requests/searchAllByQuery'
import { searchTracksByQuery } from '../../api/requests/searchTracksByQuery'
import { serializeData } from '../serializers/serializeSearchData'
import { serializeTracks } from '../serializers/serializeTracks'
import { ISeachResults } from '../types/search-results.types'

// Creating search effects

// getDataBySearchQuery is initial request to load data with search query
export const getDataBySearchQuery = createEffect(async (query: string) => {
  const searchResults = await searchAllByQuery(query)

  // Serialize data to appropriate format
  const serializedData: ISeachResults = serializeData(searchResults)

  return serializedData
})

// getMoreTracks loads next track items
export const getMoreTracks = createEffect(async (query: string) => {
  const tracksData = await searchTracksByQuery(query)

  // Serialize tracks to appropriate format
  const serializedTracks = serializeTracks(tracksData.tracks.items)

  return serializedTracks
})
