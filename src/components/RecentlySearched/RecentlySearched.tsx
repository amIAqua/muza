import { FC } from 'react'
import { Card } from 'antd'

export const RecentlySearched: FC = () => {
  return (
    <>
      <Card
        style={{
          width: '100%',
          background: '#535353',
          border: '#535353',
          marginTop: '2rem',
        }}
      >
        Recently Searched
      </Card>
    </>
  )
}
