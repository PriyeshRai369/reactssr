import React from 'react'
import ReactDOM, { hydrateRoot } from 'react-dom/client'
import App from './App.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

// const root = document.getElementById('root')

hydrateRoot(document.getElementById('root'), <App />)
