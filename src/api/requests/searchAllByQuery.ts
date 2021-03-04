import { requestInstance } from './axios-request-instance'

const getToken = () => localStorage.getItem('access_token')

export const searchAllByQuery = async (query: string) => {
  const response = await requestInstance.get(`/search`, {
    params: {
      limit: 10,
      q: query,
      type: 'track,album,playlist,artist',
    },
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })

  return response.data
}
