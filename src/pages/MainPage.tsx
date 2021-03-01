import { FC } from 'react'
import { Col, Row } from 'antd'
import { SearchSection } from '../components/SearchSection/SearchSection'
import { PlayerSection } from '../components/PlayerSection/PlayerSection'

export const MainPage: FC = () => {
  return (
    <div className='container'>
      <div className='dashboard'>
        <Row>
          <Col sm={10}>
            <SearchSection />
          </Col>
          <Col sm={14}>
            <PlayerSection />
          </Col>
        </Row>
      </div>
    </div>
  )
}
