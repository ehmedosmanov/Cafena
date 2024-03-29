import React, { useContext } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { FaSearch, FaShoppingBasket, FaBars, FaHeart } from 'react-icons/fa'
import './index.scss'
import Dropdown from '../../CommonComponents/Dropdown'
import { GlobalContext } from '../../../context/GlobalContext'
import SearchNav from '../../../layout/Navbar/SearchNav'
import { useState } from 'react'
import { BasketContext } from '../../../context/BasketContext'
import { WishlistContext } from '../../../context/WishlistContext'

const MobileNav = () => {
  const dropdownData = [
    { label: 'CHEFS', link: '/Chefs' },
    { label: 'BLOG', link: '/Blog' },
    { label: 'Gallery', link: '/' }
  ]

  const { basket } = useContext(BasketContext)
  const { wishlist } = useContext(WishlistContext)
  const {
    handleOpenSidebar,
    handleOpenBasketSidebar,
    handleOpenWishlistSidebar
  } = useContext(GlobalContext)
  const sumCount = basket.reduce((acc, x) => acc + x.count, 0)

  const wishlistTotal = wishlist.length
  return (
    <div className='row d-xl-none d-lg-flex align-items-center'>
      <div className='col-lg-9 col-8'>
        <div className='mobile-left_side'>
          <div className='nav-logo d-lg-none d-block'>
            <NavLink to={'/'}>
              <img
                src='https://xpressrow.com/html/cafena/cafena/assets/images/logo/logo.png'
                alt='Cafena'
              />
            </NavLink>
          </div>
          <nav className='mobile-nav d-none d-lg-block'>
            <ul className='d-flex'>
              <li>
                <NavLink to={'/'}>Home</NavLink>
              </li>
              <li>
                <NavLink to={'/About'}>About</NavLink>
              </li>
              <li>
                <NavLink to={'/Menu'}>Menu</NavLink>
              </li>
              <li>
                <NavLink to={'/Reservation'}>Reservation</NavLink>
              </li>
              <li>
                <NavLink to={'/FAQ'}>FAQ</NavLink>
              </li>
              <li>
                <NavLink to={'/Shop'}>SHOP</NavLink>
                <Dropdown items={dropdownData} />
              </li>
              <li>
                <NavLink to={'/Contact'}>CONTACT</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className='col-lg-3 col-4'>
        <div className='nav-actions d-flex  justify-content-end'>
          <SearchNav />
          <div className='nav-burger' onClick={handleOpenSidebar}>
            <FaBars />
          </div>
          <div className='nav-basket' onClick={handleOpenBasketSidebar}>
            <span className='position-relative'>
              <FaShoppingBasket />
              <span className='basket_count'>{sumCount}</span>
            </span>
          </div>
          <div className='nav-wishlist' onClick={handleOpenWishlistSidebar}>
            <span className='position-relative'>
              <FaHeart />
              <span className='wishlist_count'>{wishlistTotal}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileNav
