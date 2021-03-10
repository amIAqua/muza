import { createStore } from 'effector'
import { getArtists } from '../artists/artists-effects'
import { getTracks } from '../tracks/tracks-effects'
import { changeInputQuery, clearSearchResults } from './search-events'

// Creating search store
export const $inputQuery = createStore<string>('').on(
  changeInputQuery,
  (state, query) => {
    if (!query) {
      // Clear search results after data unmounting
      clearSearchResults()
      return query
    }
    clearSearchResults()

    getTracks({ query, offset: 0 })
    getArtists({ query, offset: 0 })
    return query
  }
)
