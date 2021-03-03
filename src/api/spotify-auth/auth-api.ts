import { authInstance } from './axios-auth-instance'

// split up client spotify credentials
export const getBase64ClientCredentials = () =>
  btoa(
    `${process.env.REACT_APP_SPOTIFY_CLIENT_ID}:${process.env.REACT_APP_SPOTIFY_CLIENT_SECRET}`
  )

// Set access_token to local storage after request
const setTokenToLocalStorage = (accessToken: string) => {
  localStorage.setItem('access_token', accessToken)
}

export const authAPI = {
  // Request spotify access token
  getAccessToken: async () => {
    try {
      const response = await authInstance('/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${getBase64ClientCredentials()}`,
        },
        data: 'grant_type=client_credentials',
      })

      setTokenToLocalStorage(response.data.access_token)
    } catch (error) {
      throw error
    }
  },
}
