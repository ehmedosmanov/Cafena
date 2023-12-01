import React from "react";
import { IoMdClose } from "react-icons/io";

import "./index.scss";
const BasketSidebar = () => {
  return (
    <aside id="basket-sidebar">
      <div className="basket-sideber_top">
        <button className="basket-sideber_close">
        <IoMdClose />
        </button>
      </div>
      <div className="basket-sidebar_content">
        <div className="basket-sidebar_heading">
          <h4>Card Items - 4</h4>
        </div>
        <div className="basket-sidebar_products">
          <div className="basket-sidebar_product">
            <div className="basket-sidebar_product-img">
              <img
                src="https://xpressrow.com/html/cafena/cafena/assets/images/top-grade/tg-1.png"
                alt=""
              />
            </div>
            <div className="basket-sidebar_product-content">
              <h4 className="basket-sidebar_product-title">
                ROREM IPSUM DOLOR SIT AMET.
              </h4>
              <span className="basket-sidebar_price">$19.00</span>
            <button className="basket-sidebar_product-close">
                <IoMdClose/>
            </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default BasketSidebar;
