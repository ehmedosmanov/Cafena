import React, { useContext } from 'react'
import { IoMdClose } from 'react-icons/io'
import { WishlistContext } from '../../../../context/WishlistContext'

const WishlistProduct = ({ id, name, image, price, discount, item }) => {
  const calcDiscountedPrice = (price, discount) => {
    const discountedAmount = (price * discount) / 100
    return price - discountedAmount
  }
  const discountedPrice = calcDiscountedPrice(price, discount)

  const { removeFromWishlist } = useContext(WishlistContext)

  return (
    <div className='wishlist-sidebar_product py-4'>
      <div className='wishlist-sidebar_product-img'>
        {image && image[0] ? (
          <img src={image[0]} alt='' />
        ) : (
          <span>No image available</span>
        )}
      </div>
      <div className='wishlist-sidebar_product-content'>
        <a href='#' className='wishlist-sidebar_product-title'>
          {name}
        </a>
        <span className='wishlist-sidebar_price'>
          ${discountedPrice.toFixed(2)}
          <del>${price}</del>
        </span>
      </div>
      <div className='delete-wishlist ms-auto '>
        <button
          className='wishlist-sidebar_product-close'
          onClick={() => removeFromWishlist(id)}>
          <IoMdClose />
        </button>
      </div>
    </div>
  )
}

export default WishlistProduct
