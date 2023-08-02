import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)

// El StrictMode de React renderiza dos veces los componentes (de forman intencional) para ayudarte a detectar efectos secundarios de la renderización.
// Sólo ocurre durante el desarrollo.
// https://es.stackoverflow.com/questions/531783/useeffect-se-renderiza-2-veces
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
