import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { inject } from '@vercel/analytics'
import 'lenis/dist/lenis.css'
import './index.css'
import App from './App.jsx'

// Cookie-less page-view counts; only reports from the deployed site once Web Analytics is enabled in Vercel
inject()

console.log(
  '%c👾 Hey, fellow builder!%c\nYou opened the console, so you might be exactly who I want to build agents with.\nSay hi: amala2627@gmail.com',
  'background:#2b4eff;color:#fff;padding:6px 12px;border-radius:6px;font-weight:600;font-size:13px',
  'color:#94a3b8;font-size:12px;line-height:1.6',
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
