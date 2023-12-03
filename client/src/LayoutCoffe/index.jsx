import React from 'react'
import "./index.scss"


const LayoutCoffee = () => {
  return (
    <>
    <section id='layout-coffee'>
<div className="ship1">
    <img src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/breadcrumb-shape-1.png" alt="" />
</div>
<div className='ship2'>
    <img src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/breadcrumb-shape-2.png" alt="" />
</div>
<div className="container">
    <div className="row">
        <div className='col-xl-12 text-center'>
            <h2 className='page-title'>Product Details</h2>
            <div className='which-page'>
                <ul className= "d-flex align-items-center justify-content-center">
                    <li className='begin page'>
                        <a href=""><span>Home</span></a>
                    </li>
                    <li className='end page'>
                    <a href=""><span>Product</span></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
    </section>
    </>
  )
}

export default LayoutCoffee