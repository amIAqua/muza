import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from './router'
import { authAPI } from './api/spotify-auth/auth-api'
import 'antd/dist/antd.css'
import './global.css'

// Getting spotify access token with the app initializing
authAPI.getAccessToken()

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
)
