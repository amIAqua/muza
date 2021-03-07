import {
  computedArtistName,
  computedFollowers,
} from '../../utils/computedProperties'

export const serializeArtists = (artists: any) => {
  return artists.map((item: any) => {
    return {
      id: item.id,
      name: computedArtistName(item.name),
      image: item.images[1].url,
      followers: computedFollowers(item.followers.total),
      open_on_spotify_url: item.external_urls.spotify,
      type: item.type,
    }
  })
}
