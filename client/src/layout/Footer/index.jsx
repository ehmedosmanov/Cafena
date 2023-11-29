import React from "react";
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import "./index.scss";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="top-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12"> 
            <div className="info d-flex">
              <div className="img-tel">
                <img src="https://xpressrow.com/html/cafena/cafena/assets/images/icons/ft-phone.png" alt="" />
              </div>
              <span className="phone">Phone :</span>
              <a className="num">+88019 339 702 520</a>
            </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
            <div className="info d-flex">
              <div className="img-tel">
                <img src="https://xpressrow.com/html/cafena/cafena/assets/images/icons/ft-map-marker.png" alt="" />
              </div>
              <span className="phone">address :</span>
              <a className="num">
30 North West New</a>
            </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12">
<div className="footer-widget">
  <div className="subscribe">
    <form action="">
      <input type="email" placeholder="Enter your email"/>
      <button type="submit">Subscribe    <FaPaperPlane /></button>
   
    </form>
  </div>
</div>
            </div>
          </div>
        </div>
      </div>
      <div className="middle-footer">
        <div className="container">
          <div className="row">

            <div className="col-lg-7">
              <div className="footer__logo--content">
                <img src="https://xpressrow.com/html/cafena/cafena/assets/images/logo/logo.png" alt="" />
                <p>Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut quam quis quam venenatis fringilla. Morbi vestibulum</p>
              </div>
            <div className="col-lg-5 align-self-end"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
