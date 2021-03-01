import { FC } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Pages
import { MainPage } from './pages/MainPage'

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/'} component={MainPage} exact />
      </Switch>
    </BrowserRouter>
  )
}
