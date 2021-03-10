import { FC } from 'react'
import { TrackItem } from '../TrackItem/TrackItem'
import { searchStore } from '../../../models/combinedStore'
import { getTracks } from '../../../models/tracks/tracks-effects'
import { useStore } from 'effector-react'
import { ITrack } from '../../../models/types/search-results.types'
import classes from './Tracks.module.css'

export const Tracks: FC = () => {
  const { fetchedTracks, inputQuery } = useStore(searchStore)

  const showTracks = () => {
    return fetchedTracks
      ? fetchedTracks.map((track: ITrack, index: number) => {
          return <TrackItem key={track.id} track={track} index={index + 1} />
        })
      : null
  }

  return (
    <>
      <div className={classes.tracksList}>
        {showTracks()}
        <p
          className='more'
          onClick={() =>
            getTracks({ query: inputQuery, offset: fetchedTracks.length })
          }
        >
          more
        </p>
      </div>
    </>
  )
}
