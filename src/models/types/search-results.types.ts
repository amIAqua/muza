export interface ITrack {
  id: string
  name: string
  image: string
  duration: string
  album: string
  artist: string
}

export interface IArtist {
  id: string
  name: string
  image: string
}

export interface IAlbum {
  id: string
  name: string
  image: string
}

export interface IPlayList {
  id: string
  name: string
  image: string
}

export interface ISeachResults {
  albums: IAlbum[]
  tracks: ITrack[]
  artists: IArtist[]
  playlists: IPlayList[]
}
