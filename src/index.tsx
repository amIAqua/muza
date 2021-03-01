import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from './router'
import reportWebVitals from './reportWebVitals'
import 'antd/dist/antd.css'
import './global.css'

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
