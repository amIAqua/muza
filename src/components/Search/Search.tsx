import { ChangeEvent, FC, useEffect, useState } from 'react'
import { changeInputQuery } from '../../models/search/search-events'
import { Card, Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

export const Search: FC = () => {
  const [inputQuery, setInputQuery] = useState('')

  const inputQueryHadler = (event: ChangeEvent<HTMLInputElement>) => {
    setInputQuery(event.target.value)
  }

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      changeInputQuery(inputQuery)
    }, 300)

    return () => clearTimeout(delayDebounceFn)
  }, [inputQuery])

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
          onChange={inputQueryHadler}
        />
      </Card>
    </>
  )
}
