import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import './index.css'
import { AppWrapper } from './AppWrapper.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWrapper />
    <Analytics />
  </StrictMode>,
)
// Force rebuild Sat Nov 22 15:06:21 EST 2025
