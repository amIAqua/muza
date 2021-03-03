import axios from 'axios'

export const authInstance = axios.create({
  baseURL: 'https://accounts.spotify.com',
})
