import { FC } from 'react'
import { Card } from 'antd'
import { searchStore } from '../../models/search'
import { SearchResultsSection } from './SearchResultsSection'
import { useStore } from 'effector-react'

export const ContentSection: FC = () => {
  const { inputQuery } = useStore(searchStore)

  const showResultsSection = () => {
    return inputQuery ? (
      <Card
        style={{
          width: '100%',
          background: '#535353',
          border: '#535353',
          marginLeft: '1rem',
        }}
      >
        <SearchResultsSection />
      </Card>
    ) : null
  }

  return <>{showResultsSection()}</>
}
