import { createStore } from 'effector'
import { clearSearchResults } from '../search/search-events'
import { ISeachResults, ITrack } from '../types/search-results.types'
import { getTracks } from './tracks-effects'

export const $fetchedTracks = createStore<any>([])
  .on(getTracks.doneData, (state, tracks: ITrack[]) => {
    // Add new tracks to existing
    if (state.length) return [...state, ...tracks]

    return [...tracks]
  })
  .on(clearSearchResults, (state: ISeachResults | null) => [])
