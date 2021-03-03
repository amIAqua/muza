export default {
  clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID!,
  clientSecret: process.env.REACT_APP_SPOTIFY_CLIENT_SECRET!,
  redirectUrl: process.env.REACT_APP_SPOTIFY_REDIRECT_URL!,
  accessToken: localStorage.getItem('access_token') ?? '',
}
