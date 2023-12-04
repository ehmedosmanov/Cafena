import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const LayoutCoffee = ({ currentPath }) => {
  const getBreadcrumbName = () => {
    switch (currentPath) {
      case "/":
        return "Home";
      case "/Shop":
        return "Shop";
      case "/Reservation":
        return "Reservation";
      case "/About":
        return "About";
      case "/FAQ":
        return "FAQ";
      case "/FAQ":
        return "FAQ";
      case "/Product/ProductDetail/:id":
        return "Product Detail";
      default:
        return "Product Detail";
    }
  };

  return (
    <>
      <section id="layout-coffee">
        <div className="ship1">
          <img
            src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/breadcrumb-shape-1.png"
            alt=""
          />
        </div>
        <div className="ship2">
          <img
            src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/breadcrumb-shape-2.png"
            alt=""
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 text-center">
              <h2 className="page-title">{getBreadcrumbName()}</h2>
              <div className="which-page">
                <ul className="d-flex align-items-center justify-content-center">
                  <li className="begin page">
                    <Link to="/">
                      <span>Home</span>
                    </Link>
                  </li>
                  <li className="end page">
                    <Link to="/product">
                      <span>{getBreadcrumbName()}</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LayoutCoffee;
