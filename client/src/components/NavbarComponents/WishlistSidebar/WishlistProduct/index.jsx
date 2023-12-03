import React from 'react'
import { IoMdClose } from 'react-icons/io'

const WishlistProduct = () => {
  return (
    <div className='wishlist-sidebar_product py-4'>
      <div className='wishlist-sidebar_product-img'>
        <img
          src={
            'https://xpressrow.com/html/cafena/cafena/assets/images/products/shop/s-p-2.png'
          }
          alt=''
        />
      </div>
      <div className='wishlist-sidebar_product-content'>
        <a href='#' className='wishlist-sidebar_product-title'>
          BRAZIL COFFEE GRED
        </a>
        <span className='wishlist-sidebar_price'>
          {/* ${discountedPrice.toFixed(2)} */}
          $325
        </span>
      </div>
      <div className='delete-wishlist ms-auto '>
        <button className='wishlist-sidebar_product-close'>
          <IoMdClose />
        </button>
      </div>
    </div>
  )
}

export default WishlistProduct
