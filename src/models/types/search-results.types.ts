export interface ITrack {
  id: string
  name: string
  image: string
  detail_image: string
  duration: string
  album: string
  open_on_spotify_url: string
  artist: string
  uri: string
  type: string
}

export interface IArtist {
  id: string
  name: string
  image: string
  detail_image: string
  open_on_spotify_url: string
  followers: number
  type: string
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
