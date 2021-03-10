import { ChangeEvent, FC } from 'react'
import { changeInputQuery } from '../../models/search/search-events'
import { Card, Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

export const Search: FC = () => {
  return (
    <>
      <Card
        style={{
          width: '100%',
          background: '#535353',
          border: '#535353',
        }}
      >
        <h2 style={{ color: '#fff', fontWeight: 'bold' }}>Search</h2>
        <Input
          placeholder='Find tracks, albums, podcasts'
          style={{ borderRadius: '2rem' }}
          prefix={<SearchOutlined />}
          size='large'
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            changeInputQuery(event.target.value)
          }
        />
      </Card>
    </>
  )
}
