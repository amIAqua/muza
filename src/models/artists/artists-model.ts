import { createStore } from 'effector'
import { clearSearchResults } from '../search/search-events'
import { IArtist, ISeachResults } from '../types/search-results.types'
import { getArtists } from './artists-effects'

export const $fetchedArtists = createStore<any>([])
  .on(getArtists.doneData, (state, artists: IArtist[]) => [
    ...state,
    ...artists,
  ])
  .on(clearSearchResults, (state: IArtist[] | null) => [])
