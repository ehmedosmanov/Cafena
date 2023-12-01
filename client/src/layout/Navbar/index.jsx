import React from "react";
import { NavLink } from "react-router-dom";
import { FaSearch, FaShoppingBasket, FaBars } from "react-icons/fa";

import "./index.scss";
import MobileNav from "../../components/MobileNav";
import MobileSidebar from "../../components/MobileSidebar";
import SearchNav from "./SearchNav";

const Navbar = () => {

  
  return (
    <>
      <header id="header">
        <div className="header-content">
          <div className="container">
            <div className="row d-xl-flex d-none align-items-center">
              <div className="col-xl-5 col-lg-4">
                <div className="main-menu_1">
                  <nav id="left-side_nav">
                    <ul className="nav-items d-flex">
                      <li className="nav-item">
                        <NavLink activeClassName="active" to={"/"}>
                          Home
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to={"/About"}>About</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to={"/Menu"}>Menu</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to={"/Reservation"}>Reservation</NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 d-xl-flex justify-content-center d-none">
                <div className="nav-logo d-inline">
                  <NavLink to={"/"}>
                    <img
                      src="https://xpressrow.com/html/cafena/cafena/assets/images/logo/logo.png"
                      alt="Cafena"
                    />
                  </NavLink>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div className="right-side d-flex justify-content-end align-items-center">
                  <nav id="right-side-nav">
                    <ul className="nav-items d-flex">
                      <li className="nav-item">
                        <NavLink to={"/FAQ"}>FAQ</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to={"/Shop"}>SHOP</NavLink>
                        <ul className="sub-menu">
                          <li className="sub-menu__item">
                            <NavLink to={"/Product/:id"}>SHOP DETAIL</NavLink>
                          </li>
                          <li className="sub-menu__item">
                            <NavLink to={"/Blog"}>BLOG</NavLink>
                          </li>
                          <li className="sub-menu__item">
                            <NavLink to={"/Shop"}>SHOP</NavLink>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <NavLink to={"/Contac"}>CONTACT</NavLink>
                      </li>
                    </ul>
                  </nav>
                  <div className="nav-actions d-flex">
                    <SearchNav/>
                    <div className="nav-basket">
                      <FaShoppingBasket />
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
      
    </>
  );
};

export default Navbar;
