import { FC } from 'react'
import { useStore } from 'effector-react'
import { searchStore } from '../../../models/search'
import { IArtist } from '../../../models/types/search-results.types'
import { ArtistItem } from '../ArtistItem/ArtistItem'
import classes from './Artists.module.css'
import { Col, Row } from 'antd'

export const Artists: FC = () => {
  const { searchResults } = useStore(searchStore)

  const showArtists = () => {
    return searchResults && searchResults.artists
      ? searchResults.artists.map((artist: IArtist) => {
          return (
            <Col className='gutter-row' span={8} key={artist.id}>
              <ArtistItem artist={artist} />
            </Col>
          )
        })
      : null
  }
  return (
    <>
      <div className={classes.artistsList}>
        <Row gutter={16}>{showArtists()}</Row>
      </div>
    </>
  )
}
