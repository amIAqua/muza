import { FC } from 'react'
import { IArtist } from '../../../models/types/search-results.types'
import classes from './ArtistItem.module.css'

type ArtistItemProps = {
  artist: IArtist
}

export const ArtistItem: FC<ArtistItemProps> = ({ artist }) => {
  return (
    <>
      <div className={classes.artistItem}>
        <img
          src={artist.image}
          alt='artist_img'
          width={170}
          height={170}
          style={{ border: '2px solid #fff', marginTop: '1rem' }}
        />
        <h3 className={classes.artistName}>{artist.name}</h3>
        <p className={classes.artistFollowers}>
          {artist.followers}&nbsp;followers
        </p>
      </div>
    </>
  )
}
