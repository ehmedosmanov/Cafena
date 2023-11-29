import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

const Navbar = () => {
  return (
    <header id="header">
      <div className="header-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <nav id="left-side_nav">
                <ul className="nav-items">
                  <li className="nav-item">
                    <NavLink activeClassName="active" to={"/"}>
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="active">About</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="active">Menu</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="active">Reservation</NavLink>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-2">
              <div className="nav-logo">
                <NavLink to={"/"}>
                  <img
                    src="https://xpressrow.com/html/cafena/cafena/assets/images/logo/logo.png"
                    alt="Cafena"
                  />
                </NavLink>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right-side">
              <nav id="right-side-nav">
                <ul className="nav-items">
                  <li className="nav-item">
                    <NavLink activeClassName="active" to={"/"}>
                      FAQ
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="active">SHOP</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="active">CONTACT</NavLink>
                  </li>
                </ul>
              </nav>
              <div className="nav-actions">
                <div className="nav-search"></div>
                <div className="nav-burger"></div>
                <div className="nav-basket"></div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
