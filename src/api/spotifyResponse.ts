import { SpotifyGraphQLClient } from 'spotify-graphql'
import config from './spotify-config'

export const q = (query: string) =>
  SpotifyGraphQLClient(config)
    .query(
      `
  {
    track(name: "${query}") {
      name
      artists {
        name
      }
    }
  }
`
    )
    .then((result: any) => {
      console.log(result)
    })
