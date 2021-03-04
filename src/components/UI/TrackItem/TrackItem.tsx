import { FC } from 'react'
import { ITrack } from '../../../models/types/search-results.types'
import classes from './TrackItem.module.css'

type TrackItemProps = {
  track: ITrack
  index: number
}

export const TrackItem: FC<TrackItemProps> = ({ track, index }) => {
  return (
    <>
      <div className={classes.trackItem}>
        <h3 className={classes.index}>{index}</h3>
        <img
          src={track.image}
          alt='track_img'
          width={45}
          height={45}
          style={{ borderRadius: '50%' }}
        />
        <div>
          <h3 className={classes.trackName}>{track.name}</h3>
          <p className={classes.trackArtist}>{track.artist}</p>
        </div>
        <div>
          <p className={classes.trackDuration}>{track.duration}</p>
        </div>
      </div>
    </>
  )
}
