import { requestInstance } from './axios-request-instance'
import config from '../spotify-config'

export const searchTracksByQuery = async (query: string) => {
  const response = await requestInstance.get(`/search`, {
    params: {
      limit: 20,
      offset: 20,
      q: query,
      type: 'track',
    },
    headers: {
      Authorization: `Bearer ${config.accessToken}`,
    },
  })

  return response.data
}
