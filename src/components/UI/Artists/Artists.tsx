import { FC, useMemo } from 'react'
import { useStore } from 'effector-react'
import { searchStore } from '../../../models/combinedStore'
import { IArtist } from '../../../models/types/search-results.types'
import { ArtistItem } from '../ArtistItem/ArtistItem'
import classes from './Artists.module.css'
import { Col, Row } from 'antd'
import { getArtists } from '../../../models/artists/artists-effects'

export const Artists: FC = () => {
  const { inputQuery, fetchedArtists } = useStore(searchStore)

  const showArtists = () => {
    return fetchedArtists
      ? fetchedArtists.map((artist: IArtist) => {
          return (
            <Col className='gutter-row' span={8} key={artist.id}>
              <ArtistItem artist={artist} />
            </Col>
          )
        })
      : null
  }

  const loadMoreArtists = () =>
    fetchedArtists.length >= 10 ? (
      <p
        className='more'
        onClick={() =>
          getArtists({ query: inputQuery, offset: fetchedArtists.length + 1 })
        }
      >
        more
      </p>
    ) : null

  return (
    <>
      <div className={classes.artistsList}>
        <Row gutter={16}>{showArtists()}</Row>
        {loadMoreArtists()}
      </div>
    </>
  )
}
