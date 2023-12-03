import React, { useEffect, useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { FaSearch, FaShoppingBasket, FaBars, FaHeart } from 'react-icons/fa'
import './index.scss'
import MobileNav from '../../components/NavbarComponents/MobileNav'
import MobileSidebar from '../../components/NavbarComponents/MobileSidebar'
import SearchNav from './SearchNav'
import { GlobalContext } from '../../context/GlobalContext'
import { BasketContext } from '../../context/BasketContext'
import BasketSidebar from '../../components/NavbarComponents/BasketSidebar'
import WishlistSidebar from '../../components/NavbarComponents/WishlistSidebar'

const Navbar = ({ home }) => {
  const { handleOpenBasketSidebar, handleOpenWishlistSidebar } =
    useContext(GlobalContext)
  const { basket } = useContext(BasketContext)
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (scrollPosition > 300) {
        setIsSticky(scrollPosition > 300)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const headerClassNames = `header ${home ? 'home' : ''} ${
    isSticky ? 'header-sticky' : ''
  }`
  const sumCount = basket.reduce((acc, x) => acc + x.count, 0)

  return (
    <>
      <header className={headerClassNames}>
        <div className='header-content'>
          <div className='container'>
            <div className='row d-xl-flex d-none align-items-center'>
              <div className='col-xl-5 col-lg-4'>
                <div className='main-menu_1'>
                  <nav id='left-side_nav'>
                    <ul className='nav-items d-flex'>
                      <li className='nav-item'>
                        <NavLink to={'/'}>Home</NavLink>
                      </li>
                      <li className='nav-item'>
                        <NavLink to={'/About'}>About</NavLink>
                      </li>
                      <li className='nav-item'>
                        <NavLink to={'/Menu'}>Menu</NavLink>
                      </li>
                      <li className='nav-item'>
                        <NavLink to={'/Reservation'}>Reservation</NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className='col-xl-2 col-lg-2 d-xl-flex justify-content-center d-none'>
                <div className='nav-logo d-inline'>
                  <NavLink to={'/'}>
                    <img
                      src={
                        home
                          ? 'https://xpressrow.com/html/cafena/cafena/assets/images/logo/logo.png'
                          : 'https://xpressrow.com/html/cafena/cafena/assets/images/logo/logo-black.png'
                      }
                      alt='Cafena'
                    />
                  </NavLink>
                </div>
              </div>
              <div className='col-xl-5 col-lg-6'>
                <div className='right-side d-flex justify-content-end align-items-center'>
                  <nav id='right-side-nav'>
                    <ul className='nav-items d-flex'>
                      <li className='nav-item'>
                        <NavLink to={'/FAQ'}>FAQ</NavLink>
                      </li>
                      <li className='nav-item'>
                        <NavLink to={'/Shop'}>SHOP</NavLink>
                        <ul className='sub-menu'>
                          <li className='sub-menu__item'>
                            <NavLink to={'/Product/:id'}>SHOP DETAIL</NavLink>
                          </li>
                          <li className='sub-menu__item'>
                            <NavLink to={'/Blog'}>BLOG</NavLink>
                          </li>
                          <li className='sub-menu__item'>
                            <NavLink to={'/Shop'}>SHOP</NavLink>
                          </li>
                        </ul>
                      </li>
                      <li className='nav-item'>
                        <NavLink to={'/Contac'}>CONTACT</NavLink>
                      </li>
                    </ul>
                  </nav>
                  <div className='nav-actions d-flex'>
                    <SearchNav />
                    <div
                      className='nav-basket'
                      onClick={handleOpenBasketSidebar}>
                      <span className='position-relative'>
                        <FaShoppingBasket />
                        <span className='basket_count'>{sumCount}</span>
                      </span>
                    </div>
                    <div
                      className='nav-wishlist'
                      onClick={handleOpenWishlistSidebar}>
                      <span className='position-relative'>
                        <FaHeart />
                        <span className='wishlist_count'>0</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <MobileNav />
          </div>
        </div>
      </header>
      <MobileSidebar />
      <BasketSidebar />
      <WishlistSidebar />
    </>
  )
}

export default Navbar
