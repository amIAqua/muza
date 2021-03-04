import { FC } from 'react'

// Content sections
import { Tracks } from '../UI/Tracks/Tracks'
import { Artists } from './Artists'
import { Albums } from './Albums'
import { Playlists } from './Playlists'

export const SearchResultsSection: FC = () => (
  <section>
    <Tracks />
    <Artists />
    <Albums />
    <Playlists />
  </section>
)
