import {
  computedArtistName,
  computedFollowers,
} from '../../utils/computedProperties'

export const serializeArtists = (artists: any) => {
  // TODO: no render of list with current search query
  const a = artists.map((item: any) => {
    return {
      id: item.id ?? null,
      name: computedArtistName(item.name) ?? null,
      image: item.images[1].url ?? null,
      followers: computedFollowers(item.followers.total) ?? null,
      open_on_spotify_url: item.external_urls.spotify ?? null,
      type: item.type ?? null,
    }
  })

  return a
}
