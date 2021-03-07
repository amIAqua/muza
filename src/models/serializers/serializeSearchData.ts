import { serializeTracks } from './serializeTracks'
import { serializeArtists } from './serializeArtists'

import { ISeachResults } from '../types/search-results.types'

export function serializeData(searchResults: any): any {
  const serializedTracks = serializeTracks(searchResults.tracks.items)
  const serializedArtists = serializeArtists(searchResults.artists.items)

  return {
    tracks: serializedTracks,
    artists: serializedArtists,
  }

  // return {
  //   albums: searchResults.albums.items.map((item: any) => {
  //     return {
  //       id: item.id,
  //       name: item.name,
  //       image: item.images[2],
  //     }
  //   }),
  //   playlists: searchResults.playlists.items.map((item: any) => {
  //     return {
  //       id: item.id,
  //       name: item.name,
  //       image: item.images[0],
  //     }
  //   }),
  // }
}
