import { createStore } from 'effector'
import { clearSearchResults } from '../search/search-events'
import { IArtist, ISeachResults } from '../types/search-results.types'
import { getArtists } from './artists-effects'

export const $fetchedArtists = createStore<any>([])
  .on(getArtists.doneData, (state, artists: IArtist[]) => {
    // Add new artists to existing
    if (state.length) return [...state, ...artists]

    return [...artists]
  })
  .on(clearSearchResults, (state: ISeachResults | null) => [])
