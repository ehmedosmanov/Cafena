import React, { useState } from "react";
import "./index.scss"
import { FaStar } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";
import { FaShare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Products = () => {
    const [bigImageSrc, setBigImageSrc] = useState(
        "https://xpressrow.com/html/cafena/cafena/assets/images/products/pp-1.png"
      );
      const handleImageClick = (event,newSrc) => {
        event.preventDefault()
        setBigImageSrc(newSrc);
      };
  return (
    <>
      <div id="product-det-first">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-12 col-md-12 col-12">
              <div className="product-details__wrapper">
                <div className="pd-img">
                  <div className="big-img">
                    <img
                      src={bigImageSrc}
                      alt=""
                    />
                  </div>
                </div>
                <div className="pd-tab">
                  <nav>
                    <div className="tab-list">
                      <a href="" onClick={(e) => handleImageClick(e, "https://xpressrow.com/html/cafena/cafena/assets/images/products/pp-1.png")}>
                        <img
                          src="https://xpressrow.com/html/cafena/cafena/assets/images/products/pp-1.png"
                          alt=""
                        />
                      </a>
                      <a href="" onClick={(e) => handleImageClick(e, "https://xpressrow.com/html/cafena/cafena/assets/images/products/pp-2.png")}>
                        <img
                          src="https://xpressrow.com/html/cafena/cafena/assets/images/products/pp-2.png"
                          alt=""
                        />
                      </a>
                      <a href="" onClick={(e) => handleImageClick(e, "https://xpressrow.com/html/cafena/cafena/assets/images/products/shop/s-p-3.png")}>
                        <img
                          src="https://xpressrow.com/html/cafena/cafena/assets/images/products/shop/s-p-3.png"
                          alt=""
                        />
                      </a>
                      <a href="" onClick={(e) => handleImageClick(e, "https://xpressrow.com/html/cafena/cafena/assets/images/products/shop/s-p-4.png")}>
                        <img
                          src="https://xpressrow.com/html/cafena/cafena/assets/images/products/shop/s-p-4.png"
                          alt=""
                        />
                      </a>
                      <a href="" onClick={(e) => handleImageClick(e, "https://xpressrow.com/html/cafena/cafena/assets/images/products/shop/s-p-5.png")}>
                        <img
                          src="https://xpressrow.com/html/cafena/cafena/assets/images/products/shop/s-p-5.png"
                          alt=""
                        />
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12 col-md-12 col-12">
                <div className="product-details__content">
                    <div className="tr-wrapper d-flex align-items-center justify-content-between">
                        <h2 className="title">Americano Coffee Beans</h2>
                        <div className="rating-wrapper">
                            <div className="rattings d-flex align-items-center">
<span className="star-pd"><FaStar /></span>
<span className="star-pd"><FaStar /></span>
<span className="star-pd"><FaStar /></span>
<span className="star-pd"><FaStar /></span>
<span className="star-pd"><FaStar /></span>
                            </div>
                            <span className="rt-num">04 - Customar Review</span>
                        </div>
                    </div>
                    <p className="text-pd">The coffee is brewed by first roasting the green coffee beans over hot coals in  brazier.Once the beans are roasted each participant is given an opportunity to sample The coffee is brewed. </p>
                    <span className="in-stock"><IoCheckmark className="st" /> In Stock</span>
                    <h3 className="price">$25</h3>
                    <div className="colors">
                        <span className="color1"></span>
                        <span className="color2"></span>
                        <span className="color3"></span>
                    </div>
                    <div className="product-quantity d-flex align-items-center">
                        <span>Quantity</span>
                        <input className="inp-quantity" type="number" placeholder="1" />
                        <a className="site-btn" href="">add to cart</a>
                    </div>
                    <a className="wishlist" href="">
                    <IoMdHeart />
                    Add to watch list
                    </a>
                    <div className="pd-social-wrapper">
                        <span className="share">
                        <FaShare />
                        Share
                        </span>
                        <div className="social-links d-flex align-items-center">
                            <a href=""><FaTwitter /></a>
                            <a href=""><FaFacebookF /></a>
                            <a href=""><FaYoutube /></a>
                            <a href=""><FaGooglePlusG /></a>
                            <a href=""><FaInstagram /></a>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
