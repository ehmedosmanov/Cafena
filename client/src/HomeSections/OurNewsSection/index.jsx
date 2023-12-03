import React from "react";
import "./index.scss";
import News from "../News";

const OurNewsSection = () => {
  return (
    <>
      {/* our newa section start  */}
      <section id="our-news">
        <div className="container">
          <div className="row align-items-end mb-60">
            <div className="col-lg-12">
              <div className="section-heading text-center">
                <span className="sub-title">From our blog</span>
                <h2 className="title">Our News & Articles</h2>
              </div>
            </div>
          </div>
        </div>
        {/* cards container start  */}
        <div className="container">
          <News></News>
        </div>
        {/* cards container start  */}
      </section>
      {/* our newa section end */}
    </>
  );
};

export default OurNewsSection;
