import { FC, useState } from 'react'
import { useStore } from 'effector-react'
import { searchStore } from '../../models/combinedStore'

// Content sections
import { Tracks } from '../UI/Tracks/Tracks'
import { Artists } from '../UI/Artists/Artists'
import { ContentNavigation } from '../UI/ContentNavigation/ContentNavigation'

export const SearchResultsSection: FC = () => {
  const [visibleSection, setVisibleSection] = useState<string>('tracks')
  const { inputQuery } = useStore(searchStore)

  const showContentSection = () => {
    if (visibleSection === 'tracks') return <Tracks />
    if (visibleSection === 'artists') return <Artists />
  }

  const showResultsSection = () => {
    return inputQuery ? (
      <section>
        <ContentNavigation
          active={visibleSection}
          setActive={setVisibleSection}
        />
        {showContentSection()}
      </section>
    ) : (
      <h1 style={{ color: '#fff' }}>No results :(</h1>
    )
  }

  return <>{showResultsSection()}</>
}
