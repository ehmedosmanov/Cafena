import React from 'react'
import "./index.scss"
import { FaArrowRight } from "react-icons/fa6";

const WhyChooseUs = () => {
  return (
    <>
<section id='why-choose-us'>
    <div className="container">
        <div className="row">
            <div className='col-lg-12 text-center'>
                <div className='section-heading'>
                    <span className='sub-title'>
                    why choose us
                    </span>
                    <h2 className='title'>We are Provide Best Service <br />
                                in your city </h2>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 text-center">
                    <div className="wcu__item">
                        <div className="icon">
                            <img src="https://xpressrow.com/html/cafena/cafena/assets/images/icons/wcu-1.png" alt="" />
                        </div>
                        <div className="content">
                            <h2 className='title'>testy coffee recipe</h2>
                            <p>Accumsa nfringilla. Morbi vestibulum id tellus mmodo mattis. Aliquam erat volutpat. Aenean accumsany.</p>
                            <a href="" className='inline-btn'>
                            <FaArrowRight />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 text-center">
                    <div className="wcu__item">
                        <div className="icon">
                            <img src="https://xpressrow.com/html/cafena/cafena/assets/images/icons/wcu-2.png" alt="" />
                        </div>
                        <div className="content">
                            <h2 className='title'>Great Location</h2>
                            <p>Accumsa nfringilla. Morbi vestibulum id tellus mmodo mattis. Aliquam erat volutpat. Aenean accumsany.</p>
                            <a href="" className='inline-btn'>
                            <FaArrowRight />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 text-center">
                    <div className="wcu__item">
                        <div className="icon">
                            <img src="https://xpressrow.com/html/cafena/cafena/assets/images/icons/wcu-1.png" alt="" />
                        </div>
                        <div className="content">
                            <h2 className='title'>Professional Chef</h2>
                            <p>Accumsa nfringilla. Morbi vestibulum id tellus mmodo mattis. Aliquam erat volutpat. Aenean accumsany.</p>
                            <a href="" className='inline-btn'>
                            <FaArrowRight />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default WhyChooseUs