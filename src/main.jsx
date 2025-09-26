import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import './travel-journal-page/components/Journal.css'
// import './contact-card/components/Contact.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
