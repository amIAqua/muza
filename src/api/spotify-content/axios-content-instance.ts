import axios from 'axios'

// Spotify content instance
export const spotifyInstance = axios.create({
  baseURL: 'https://accounts.spotify.com',
})
