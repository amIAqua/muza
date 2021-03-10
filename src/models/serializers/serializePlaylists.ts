import { trackDurationTransform } from '../../utils/trackDurationTransform'
import { computedTrackName } from '../../utils/computedProperties'

export const serializePlaylists = (playlists: any) => {
  return playlists.map((item: any) => {
    return {
      id: item.id,
      name: computedTrackName(item.name),
      album: item.album.name,
      artist: item.artists.map((artist: any) => artist.name),
      image: item.album.images[2].url,
      detail_image: item.album.images[1].url,
      duration: trackDurationTransform(item.duration_ms),
      open_on_spotify_url: item.external_urls.spotify,
      uri: item.uri,
      type: item.type,
    }
  })
}
