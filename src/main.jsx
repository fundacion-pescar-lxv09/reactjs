import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SearchProvider } from './providers/searchContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SearchProvider>
      <App />
    </SearchProvider>
  </StrictMode>,
)
