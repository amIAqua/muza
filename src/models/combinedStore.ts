import { combine } from 'effector'
import { $inputQuery } from './search/search-model'
import { $fetchedTracks } from './tracks/tracks-model'
import { $fetchedArtists } from './artists/artists-model'

// Return one combined store
export const searchStore = combine({
  inputQuery: $inputQuery,
  fetchedTracks: $fetchedTracks,
  fetchedArtists: $fetchedArtists,
})
