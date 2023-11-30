import React from 'react'
import News from '../../News'

// machine section icon 
import { LuPlus } from "react-icons/lu";

import "./index.scss"
const Home = () => {
  return (
    <>
    {/* Home */}
    {/* coffee-machine section start  */}
    <section id='coffee-machine'>
<div className="container">
  <div className="row">
    <div className="machine-content col-lg-6 col-md-12 col-12 order-lg-1 order-md-2 order-2">
      <div className="about">
        <div className="heading">
          <h2 className='title'>COFFEE MACHINE,BUY FOR HOME</h2>
          <p>Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut quam quis quam venenatis fringilla. Morbi vestibulum id tellus mmodo mattis. Aliquam erat volutpat. <br />                                mattis nunc. Praesent ut quam quis quam venenatis fringilla. Morbi vestibulum id tellus mmodo mattis.</p>
        </div>
        <div className="btn-m d-flex align-items-center"><a href="">Discover now</a></div>
      </div>
    </div>
    <div className='machine-img col-lg-6 col-md-12 col-12 order-lg-2 order-md-1 '>
      <div className='big-product-wrapper position-relative'>
        <div className="img2"> <img src="https://xpressrow.com/html/cafena/cafena/assets/images/products/product-big.png" alt="" />
         <div className='ph-wrapper'>
          <div className="product-highlite1">
            <span className='product-highlight__trigger'>
            <LuPlus />
            </span>
          </div>
          <div className="product-highlite2">
            <span className='product-highlight__trigger'>
            <LuPlus />
            </span>
          </div>
        </div></div>
       
       
      </div>
    </div>
  </div>
</div>
</section>
{/* coffee-machine section end  */}
    {/* our newa section start  */}
    <section id='our-news'>
<div className="container">
  <div className='row align-items-end mb-60'>
    <div className="col-lg-12">
      <div className='section-heading text-center'>
        <span className='sub-title'>From our blog</span>
        <h2 className='title'>Our News & Articles</h2>
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
  )
}

export default Home