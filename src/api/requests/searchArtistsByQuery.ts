import { requestInstance } from './axios-request-instance'
import config from '../spotify-config'

export const searchArtistsByQuery = async (query: string, offset: number) => {
  const response = await requestInstance.get(`/search`, {
    params: {
      limit: 10,
      offset,
      q: query,
      type: 'artist',
    },
    headers: {
      Authorization: `Bearer ${config.accessToken}`,
    },
  })

  return response.data
}
