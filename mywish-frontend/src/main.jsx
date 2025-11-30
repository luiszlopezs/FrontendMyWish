import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'

import Home from './pages/Home/Home'
import Perfil from './pages/Perfil/Perfil'
import Register from './pages/Register/Register'
import EventosInvitado from './pages/EventosInvitado/EventosInvitado'
import MisEventos from './pages/MisEventos/MisEventos'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="perfil" element={<Perfil />} />
          <Route path="register" element={<Register />} />
          <Route path="eventos-invitado" element={<EventosInvitado />} />
          <Route path="mis-eventos" element={<MisEventos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
