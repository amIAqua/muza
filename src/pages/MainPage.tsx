import { FC } from 'react'
import { Col, Row } from 'antd'
import { ContentSection } from '../components/ContentSection/ContentSection'
import { Search } from '../components/Search/Search'
import { ContentDetails } from '../components/UI/ContentDetails/ContentDetails'

export const MainPage: FC = () => {
  return (
    <div className='container'>
      <div className='dashboard'>
        <Row>
          <Col sm={10}>
            <Search />
            <ContentDetails />
          </Col>
          <Col sm={14}>
            <ContentSection />
          </Col>
        </Row>
      </div>
    </div>
  )
}
