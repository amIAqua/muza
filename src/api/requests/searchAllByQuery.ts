import { requestInstance } from './axios-request-instance'
import config from '../spotify-config'

export const searchAllByQuery = async (query: string) => {
  const response = await requestInstance.get(`/search`, {
    params: {
      limit: 20,
      q: query,
      type: 'track,album,playlist,artist',
    },
    headers: {
      Authorization: `Bearer ${config.accessToken}`,
    },
  })

  return response.data
}
