import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { AppProvider } from './context/AppContext.jsx'
import App from './App.jsx'
import './styles/global.css'

// HashRouter : routage 100 % client, robuste sur tout hébergement statique (GitHub Pages),
// sans configuration serveur ni page 404. Le rafraîchissement et les liens profonds marchent.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </HashRouter>
  </React.StrictMode>
)
