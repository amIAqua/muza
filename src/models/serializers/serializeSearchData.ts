export function serializeData(searchResults: any): any {
  return {
    tracks: searchResults.tracks.items.map((item: any) => {
      return {
        id: item.id,
        name: item.name,
        album: item.album.name,
        artist: item.artists.map((artist: any) => artist.name),
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
