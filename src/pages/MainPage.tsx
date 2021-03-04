import { FC } from 'react'
import { Col, Row } from 'antd'
import { SearchSection } from '../components/SearchSection/SearchSection'
import { ContentSection } from '../components/ContentSection/ContentSection'

export const MainPage: FC = () => {
  return (
    <div className='container'>
      <div className='dashboard'>
        <Row>
          <Col sm={10}>
            <SearchSection />
          </Col>
          <Col sm={14}>
            <ContentSection />
          </Col>
        </Row>
      </div>
    </div>
  )
}
