import { FC } from 'react'
import { RecentlySearched } from '../RecentlySearched/RecentlySearched'
import { Search } from '../Search/Search'

export const SearchSection: FC = () => {
  return (
    <>
      <Search />
      <RecentlySearched />
    </>
  )
}
