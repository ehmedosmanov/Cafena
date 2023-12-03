import React, { useContext } from 'react'
import './index.scss'
import { IoMdClose } from 'react-icons/io'
import { BasketContext } from '../../../../context/BasketContext'
const BasketProduct = ({ id, image, name, price, discount, count }) => {
  const { basket, removeFromBasket, handleInc, handleDec } =
    useContext(BasketContext)

  const calcDiscountedPrice = (price, discount) => {
    const discountedAmount = (price * discount) / 100
    return price - discountedAmount
  }
  const discountedPrice = calcDiscountedPrice(price, discount)

  return (
    <div className='basket-sidebar_product py-4'>
      <div className='basket-sidebar_product-img'>
        <img src={image[0]} alt='' />
      </div>
      <div className='basket-sidebar_product-content'>
        <a href='#' className='basket-sidebar_product-title'>
          {name}
        </a>
        <span className='basket-sidebar_price'>
          ${discountedPrice.toFixed(2)}/ COUNT: {count}
        </span>
        <span className='total'>
          TOTAL: ${(discountedPrice * count).toFixed(2)}
        </span>
        <div
          className='counter pt-1 d-flex align-items-center'
          onClick={() => handleDec(id)}>
          <button>-</button>
          <span className='px-2'>{count}</span>
          <button onClick={() => handleInc(id)}>+</button>
        </div>
      </div>
      <div className='delete-basket ms-auto '>
        <button
          className='basket-sidebar_product-close'
          onClick={() => removeFromBasket(id)}>
          <IoMdClose />
        </button>
      </div>
    </div>
  )
}

export default BasketProduct
