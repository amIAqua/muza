interface IAlbum {
  name: string
  artist: string
}

interface ITracks {}

interface IArtists {}

interface IPlayLists {}

export interface ISeachResults {
  albums: IAlbum[]
  tracks: ITracks[]
  artists: IArtists[]
  playlists: IPlayLists[]
}
