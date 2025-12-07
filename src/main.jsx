import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import './index.css'
import AppEnglish from './AppEnglish.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppEnglish />
    <Analytics />
  </StrictMode>,
)
// Force rebuild Sat Nov 22 15:06:21 EST 2025
