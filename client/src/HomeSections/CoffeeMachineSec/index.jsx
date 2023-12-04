import  Button  from '../../components/CommonComponents/Button';
import React from 'react'
import { LuPlus } from "react-icons/lu";
import "./index.scss"

const CoffeMachineSection = () => {
  return (
    <>
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
       <Button>Discover now</Button>
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
    </>
  )
}

export default CoffeMachineSection