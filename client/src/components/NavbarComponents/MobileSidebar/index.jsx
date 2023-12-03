import React, { useContext, useEffect, useRef } from 'react'
import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'

import './index.scss'
import { GlobalContext } from '../../../context/GlobalContext'
const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const { isActive, handleOpenSidebar } = useContext(GlobalContext)
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* // {toggle && <Overlay />} */}
      <aside id='sidebar-nav' className={`${isActive ? 'open' : ''}`}>
        <div className='sidebar-nav_info'>
          <div className='sidebar-nav_logo'>
            <img
              src='
                https://xpressrow.com/html/cafena/cafena/assets/images/logo/logo-black.png'
              alt=''
            />
          </div>
          <span className='sidebar-nav_close' onClick={handleOpenSidebar}>
            <FaTimes />
          </span>
        </div>
        <div className='sidebar-nav_content'>
          <nav className='sidebar_menu'>
            <ul className='sidebar-items'>
              <li className='sidebar-item'>
                <NavLink to={'/'}>HOME</NavLink>
              </li>
              <li className='sidebar-item'>
                <NavLink to={'/'}>ABOUT</NavLink>
              </li>
              <li className='sidebar-item'>
                <NavLink to={'/'}>MENU</NavLink>
              </li>
              <li className='sidebar-item'>
                <NavLink to={'/'}>RESERVATION</NavLink>
              </li>
              <li className='sidebar-item' onClick={handleToggle}>
                <NavLink to={'/'}>SHOP</NavLink>
                <ul className={`${isOpen ? 'show' : ''} accordion-menu`}>
                  <li className='accordion-item'>
                    <NavLink to={'/'}>SHOP DETAIL</NavLink>
                  </li>
                  <li className='accordion-item'>
                    <NavLink to={'/'}>BLOG</NavLink>
                  </li>
                  <li className='accordion-item'>
                    <NavLink to={'/'}>SHOP</NavLink>
                  </li>
                </ul>

                <span className='accordion-open'>
                  <FaPlus />
                </span>
              </li>
              <li className='sidebar-item'>
                <NavLink to={'/'}>CONTACT</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  )
}

export default MobileSidebar
