import React, { useContext } from 'react'
import { IoMdClose } from 'react-icons/io'
import Button from '../../CommonComponents/Button'
import './index.scss'
import { GlobalContext } from '../../../context/GlobalContext'
import BasketProduct from './BasketProduct'
import { BasketContext } from '../../../context/BasketContext'
const BasketSidebar = () => {
  const { handleOpenBasketSidebar, isOpen } = useContext(GlobalContext)
  const { basket } = useContext(BasketContext)

  const calcDiscountedPrice = (price, discount) => {
    const discountedAmount = (price * discount) / 100
    return price - discountedAmount
  }

  const subTotal = basket.reduce(
    (acc, x) => acc + calcDiscountedPrice(x.price, x.discount) * x.count,
    0
  )

  return (
    <aside id='basket-sidebar' className={`${isOpen ? 'show' : ''}`}>
      <div className='basket-sideber_top'>
        <button
          className='basket-sideber_close'
          onClick={handleOpenBasketSidebar}>
          <IoMdClose />
        </button>
      </div>
      <div className='basket-sidebar_content'>
        <div className='basket-sidebar_heading pt-3'>
          <h4>Card Items - {basket.length}</h4>
        </div>
        <div className='basket-sidebar_products'>
          {basket.length === 0 ? (
            <p className='text-center py-5'>NO ITEMS</p>
          ) : (
            basket.map(basketProduct => (
              <BasketProduct
                key={basketProduct.id}
                id={basketProduct.id}
                name={basketProduct.name}
                price={basketProduct.price}
                discount={basketProduct.discount}
                image={basketProduct.image}
                count={basketProduct.count}
              />
            ))
          )}
        </div>
        <div className='basket-sidebar_bottom'>
          <span className='basket-sidebar_label'>SUB TOTAL: </span>
          <span className='basket-sidebar_subtotal'>${subTotal}</span>
        </div>
        <div className='basket-sidebar_buttons'>
          <Button>View Cart</Button>
          <Button secondary>Checkout</Button>
        </div>
      </div>
    </aside>
  )
}

export default BasketSidebar
