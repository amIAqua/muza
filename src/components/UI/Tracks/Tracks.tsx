import { FC } from 'react'
import { TrackItem } from '../TrackItem/TrackItem'
import { searchStore } from '../../../models/search'
import { useStore } from 'effector-react'
import { ITrack } from '../../../models/types/search-results.types'
import classes from './Tracks.module.css'

export const Tracks: FC = () => {
  const { searchResults } = useStore(searchStore)

  const showTracks = () => {
    return searchResults && searchResults.tracks
      ? searchResults.tracks.map((track: ITrack, index: number) => {
          return <TrackItem key={track.id} track={track} index={index + 1} />
        })
      : null
  }

  return (
    <>
      <h2 className='section-title'>Tracks</h2>

      <div className={classes.tracksList}>{showTracks()}</div>
    </>
  )
}
