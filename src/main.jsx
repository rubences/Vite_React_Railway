import React from 'react'
import ReactDOM from 'react-dom/client'
import { HomeScreen } from './screens/HomeScreen'
import { LadingPageScreen } from './screens/LadingPageScreen'
import './styles.css'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { GastonFenskeApp } from './GastonFenskeApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <GastonFenskeApp />
    </HashRouter>
  </React.StrictMode>
)
