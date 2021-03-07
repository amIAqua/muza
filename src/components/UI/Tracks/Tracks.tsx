import { FC } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import { TrackItem } from '../TrackItem/TrackItem'
import { searchStore } from '../../../models/search'
import { getMoreTracks } from '../../../models/effects/search-effects'
import { useStore } from 'effector-react'
import { ITrack } from '../../../models/types/search-results.types'
import classes from './Tracks.module.css'

export const Tracks: FC = () => {
  const { searchResults, inputQuery } = useStore(searchStore)

  const showTracks = () => {
    return searchResults && searchResults.tracks
      ? searchResults.tracks.map((track: ITrack, index: number) => {
          return <TrackItem key={track.id} track={track} index={index + 1} />
        })
      : null
  }

  return (
    <>
      <div className={classes.tracksList}>
        <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={() => getMoreTracks(inputQuery)}
          useWindow={false}
          hasMore={true}
          loader={<></>}
        >
          {showTracks()}
        </InfiniteScroll>
      </div>
    </>
  )
}
