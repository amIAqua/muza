import { FC, useEffect } from 'react'
import { useStore } from 'effector-react'
import { detailsStore, clearContentDetails } from '../../../models/details'
import { searchStore } from '../../../models/search'
import { Button, Card } from 'antd'
import { HeartFilled } from '@ant-design/icons'
import classes from './ContentDetails.module.css'

export const ContentDetails: FC = () => {
  const { contentDetails } = useStore(detailsStore)
  const { inputQuery } = useStore(searchStore)

  // Clear details card after unmount
  useEffect(() => {
    return () => clearContentDetails()
  }, [])

  // If no content
  if (!contentDetails) return null

  // Clear content state if no search query
  if (!inputQuery) clearContentDetails()

  const computedImageSrc = () =>
    contentDetails.type === 'track'
      ? contentDetails.detail_image
      : contentDetails.image

  const showDetails = () => (
    <Card
      style={{
        width: '100%',
        background: '#535353',
        border: '#535353',
        marginTop: '1rem',
      }}
    >
      <div className={classes.headSection}>
        <h2 className={classes.contentName}>{contentDetails.name}</h2>
        <p className={classes.contentType}>{contentDetails.type}</p>
      </div>
      <div className={classes.detailImageContainer}>
        <img
          alt='content_img'
          width={200}
          height={200}
          className={classes.detailImage}
          src={computedImageSrc()}
        />
      </div>
      <div className={classes.bottomButtons}>
        <Button
          className={classes.button}
          size='large'
          shape='round'
          style={{
            background: 'rgb(14, 162, 48)',
            border: 'none',
            color: '#fff',
            fontWeight: 600,
          }}
        >
          <a target='_blank' href={contentDetails.open_on_spotify_url}>
            Listen on Spotify
          </a>
        </Button>
        <Button
          className={classes.button}
          size='large'
          icon={<HeartFilled />}
          shape='round'
          style={{
            background: 'rgb(14, 162, 48)',
            border: 'none',
            color: '#fff',
            fontWeight: 600,
          }}
        >
          Like
        </Button>
      </div>
    </Card>
  )

  return <>{showDetails()}</>
}
