import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../Footer'
import Navbar from '../Navbar'
import GlobalContextProvider from '../../context/GlobalContext'
import Overlay from '../../components/CommonComponents/Overlay'
import BasketProvider from '../../context/BasketContext'
import ShopProvider from '../../context/ShopContext'
import WishlistProvider from '../../context/WishlistContext'

const Main = () => {
  const location = useLocation()
  console.log(location.pathname)
  const isHome = location.pathname === '/'
  return (
    <>
      <GlobalContextProvider>
        <BasketProvider>
          <WishlistProvider>
            <ShopProvider>
              {isHome ? <Navbar home /> : <Navbar />}
              <Overlay />
              <Outlet />
              <Footer />
            </ShopProvider>
          </WishlistProvider>
        </BasketProvider>
      </GlobalContextProvider>
    </>
  )
}

export default Main
