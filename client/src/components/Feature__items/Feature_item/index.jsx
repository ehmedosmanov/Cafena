import React from "react";
import "./index.scss";
const Feature_item = ({ id, name, title, image }) => {
  return (
    <div className="col-xl-4 col-lg-6 col-12 pb-4">
      <div
        className="feature_item"
        style={{ backgroundImage: `url('${image}')` }}
      >
        <div className="feature_item_shape">
          <img
            src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/f-shape-1.png"
            alt=""
          />
        </div>
        <div className="feature_item_big_box">
          <div className="feature_item_box">
            <p className="feature_item_p_id">0{id}</p>
            <h3>{name}</h3>
            <p>{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature_item;
