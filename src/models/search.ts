import { createStore, createEvent, combine } from 'effector'
import { getDataBySearchQuery, getMoreTracks } from './effects/search-effects'
import { ISeachResults, ITrack } from './types/search-results.types'

// Creating events
export const changeInputQuery = createEvent<string>()

export const clearSearchResults = createEvent()

// Creating multiple stores
const $inputQuery = createStore<string>('').on(
  changeInputQuery,
  (state, query) => {
    if (!query) {
      clearSearchResults()
      return query
    }

    getDataBySearchQuery(query)
    return query
  }
)

const $searchResults = createStore<ISeachResults | null>(null)
  .on(
    getDataBySearchQuery.doneData,
    (state: ISeachResults | null, results: ISeachResults) => results
  )
  .on(getMoreTracks.doneData, (state, tracks: ITrack[]) => {
    console.log(tracks)
  })
  .on(clearSearchResults, (state: ISeachResults | null) => null)

// Return one combined store
export const searchStore = combine({
  inputQuery: $inputQuery,
  searchResults: $searchResults,
})
