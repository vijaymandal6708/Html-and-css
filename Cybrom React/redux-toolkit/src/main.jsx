import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Appstore from './Appstore.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Appstore}>
    <App />
    </Provider>
  </StrictMode>,
)
