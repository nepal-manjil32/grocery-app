import React from 'react'
import App from './App'
import './index.css'
import ReactDOM from'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppAfterLog from './AppAfterLog'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    <AppAfterLog/>
  </BrowserRouter>,
)
export default main