import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../Footer'
import Navbar from '../Navbar'
import GlobalContextProvider from '../../context/GlobalContext'
import Overlay from '../../components/CommonComponents/Overlay'
import BasketProvider from '../../context/BasketContext'
import ShopProvider from '../../context/ShopContext'

const Main = () => {
  const location = useLocation()
  console.log(location.pathname)
  const isHome = location.pathname === '/'
  return (
    <>
      <GlobalContextProvider>
        <BasketProvider>
          <ShopProvider>
            {isHome ? <Navbar home /> : <Navbar />}
            <Overlay />
            <Outlet />
            <Footer />
          </ShopProvider>
        </BasketProvider>
      </GlobalContextProvider>
    </>
  )
}

export default Main
