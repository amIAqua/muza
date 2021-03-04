import { FC, useState } from 'react'
import { Card } from 'antd'
import { SearchResultsSection } from './SearchResultsSection'

export const ContentSection: FC = () => {
  const [showSec, setShowSec] = useState(true)

  const showResultsSection = () => {
    return showSec ? <SearchResultsSection /> : null
  }

  return (
    <>
      <Card
        style={{
          width: '100%',
          background: '#535353',
          border: '#535353',
        }}
      >
        {showResultsSection()}
      </Card>
    </>
  )
}
