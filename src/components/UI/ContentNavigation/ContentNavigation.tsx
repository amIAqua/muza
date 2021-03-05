import { Dispatch, FC, SetStateAction, useEffect } from 'react'
import classes from './ContentNavigation.module.css'

type NavProps = {
  active: string
  setActive: Dispatch<SetStateAction<string>>
}

export const ContentNavigation: FC<NavProps> = ({ active, setActive }) => {
  const showNavigation = () => {
    return (
      <div style={{ display: 'flex' }}>
        <h2
          onClick={() => setActive('tracks')}
          className={`${classes.navItem} ${
            active === 'tracks' ? 'activeNavItem' : ''
          }`}
        >
          Tracks
        </h2>
        <h2
          onClick={() => setActive('artists')}
          className={`${classes.navItem} ${
            active === 'artists' ? 'activeNavItem' : ''
          }`}
        >
          Artists
        </h2>
      </div>
    )
  }

  return <>{showNavigation()}</>
}
