import { trackDurationTransform } from '../../utils/trackDurationTransform'
import { ISeachResults, ITrack } from '../types/search-results.types'

export function serializeData(searchResults: any): ISeachResults {
  return {
    tracks: searchResults.tracks.items.map((item: any) => {
      return {
        id: item.id,
        name: item.name,
        album: item.album.name,
        artist: item.artists.map((artist: any) => artist.name),
        image: item.album.images[2].url,
        duration: trackDurationTransform(item.duration_ms),
      }
    }),
    albums: searchResults.albums.items.map((item: any) => {
      return {
        id: item.id,
        name: item.name,
        image: item.images[2],
      }
    }),
    playlists: searchResults.playlists.items.map((item: any) => {
      return {
        id: item.id,
        name: item.name,
        image: item.images[0],
      }
    }),
    artists: searchResults.artists.items.map((item: any) => {
      return {
        id: item.id,
        name: item.name,
        image: item.images[2],
      }
    }),
  }
}
