import axios from 'axios'

export const requestInstance = axios.create({
  baseURL: 'https://api.spotify.com/v1',
})
