import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') ?? document.getElementsByTagName("body")[0]).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
