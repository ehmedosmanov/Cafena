import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import Navbar from '../Navbar'
import GlobalContextProvider from '../../context/GlobalContext'
import Overlay from '../../components/Overlay'

const Main = () => {
  return (
    <>
      <GlobalContextProvider>
        <Navbar />
        <Overlay />
        <Outlet />
        <Footer />
      </GlobalContextProvider>
    </>
  )
}

export default Main
