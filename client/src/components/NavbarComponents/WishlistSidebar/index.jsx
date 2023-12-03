import React, { useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalContext'
import WishlistProduct from './WishlistProduct'
import { IoMdClose } from 'react-icons/io'
import Button from '../../CommonComponents/Button'
import './index.scss'

const WishlistSidebar = () => {
  const { isVisible, handleOpenWishlistSidebar } = useContext(GlobalContext)
  return (
    <aside id='wishlist-sidebar' className={`${isVisible ? 'show' : ''}`}>
      <div className='wishlist-sideber_top'>
        <button
          className='wishlist-sideber_close'
          onClick={handleOpenWishlistSidebar}>
          <IoMdClose />
        </button>
      </div>
      <div className='wishlist-sidebar_content'>
        <div className='wishlist-sidebar_heading pt-3'>
          <h4>Card Items - 0</h4>
        </div>
        <div className='wishlist-sidebar_products'>
          <WishlistProduct />
        </div>
        <div className='wishlist-sidebar_buttons'>
          <Button>View Cart</Button>
          <Button secondary>Checkout</Button>
        </div>
      </div>
    </aside>
  )
}
export default WishlistSidebar
