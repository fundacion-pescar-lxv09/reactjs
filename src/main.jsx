import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StateProvider } from './providers/stateContext'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </StrictMode>,
)
