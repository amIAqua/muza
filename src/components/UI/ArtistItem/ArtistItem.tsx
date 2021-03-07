import { FC } from 'react'
import { IArtist } from '../../../models/types/search-results.types'
import { setContentDetails } from '../../../models/details'
import classes from './ArtistItem.module.css'

type ArtistItemProps = {
  artist: IArtist
}

export const ArtistItem: FC<ArtistItemProps> = ({ artist }) => {
  return (
    <>
      <div
        className={classes.artistItem}
        onClick={() => setContentDetails(artist)}
      >
        <img
          src={artist.image}
          alt='artist_img'
          width={170}
          height={170}
          style={{
            marginTop: '1rem',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
          }}
        />
        <h3 className={classes.artistName}>{artist.name}</h3>
        <p className={classes.artistFollowers}>
          {artist.followers}&nbsp;followers
        </p>
      </div>
    </>
  )
}
