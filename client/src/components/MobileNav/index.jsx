import React from 'react'
import { NavLink } from "react-router-dom";
import { FaSearch, FaShoppingBasket, FaBars } from "react-icons/fa";
import './index.scss'
import Dropdown from '../CommonComponents/Dropdown';

const MobileNav = () => {
  const dropdownData = [
      { label: 'CHEFS', link: '/Chefs' },
      { label: 'BLOG', link: '/Blog' },
      { label: 'Gallery', link: '/' },
  ]
  return (
    <div className="row d-xl-none d-lg-flex align-items-center">
    <div className="col-lg-9 col-10">
      <div className="mobile-left_side">
        <div className="nav-logo d-lg-none d-block">
          <NavLink to={"/"}>
            <img
              src="https://xpressrow.com/html/cafena/cafena/assets/images/logo/logo.png"
              alt="Cafena"
            />
          </NavLink>
        </div>
        <nav className="mobile-nav d-none d-lg-block">
          <ul className="d-flex">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"/"}>Menu</NavLink>
            </li>
            <li>
              <NavLink to={"/"}>Reservation</NavLink>
            </li>
            <li>
              <NavLink to={"/"}>FAQ</NavLink>
            </li>
            <li>
              <NavLink to={"/"}>SHOP</NavLink>
              <Dropdown items={dropdownData}/>
            </li>
            <li>
              <NavLink to={"/"}>CONTACT</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div className="col-lg-3 col-2">
      <div className="nav-actions d-flex  justify-content-end">
        <div className="nav-search">
          <FaSearch />
        </div>
        <div className="nav-burger">
          <FaBars />
        </div>
        <div className="nav-basket">
          <FaShoppingBasket />
        </div>
      </div>
    </div>
  </div>
  )
}

export default MobileNav