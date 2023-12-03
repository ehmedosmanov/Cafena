import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Main from './layout/Main'
import Home from './pages/Home'
import '../src/assets/scss/main.scss'
import Shop from './pages/Shop'
import Faq from './pages/Faq'
import About from './pages/About'
import ReservationPage from './pages/ReservationPage'
import DeatailsPage from './DetailsComponents/DetailsPage'
import Not404 from "./pages/Not404";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />}>
        <Route index element={<Home />} />
        <Route path='/Shop' element={<Shop />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/about' element={<About />} />
        <Route path='/reservation' element={<ReservationPage />} />
        <Route path='/details' element={<DeatailsPage />} />
        {/* ABOUT */}
        {/* MENU */}
        {/* RESERVATION */}
        {/* FAQ */}
        {/* SHOP */}
        {/* CONTACT */}
      </Route>
        <Route path="/*" element={<Not404/>}/>
    </Routes>
  )
}

export default App
