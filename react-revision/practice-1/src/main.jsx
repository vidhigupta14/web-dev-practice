import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from './modules/Nav.jsx'
import Home from './modules/Home.jsx'
import Card from './modules/Card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <App />
    <Home />
    <Card title="My Card"/>
  </StrictMode>,
)
