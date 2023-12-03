import { useContext, useState } from 'react'
import { CiShoppingBasket } from 'react-icons/ci'
import { CiHeart } from 'react-icons/ci'
import { FaEye } from 'react-icons/fa'
import { CiStar } from 'react-icons/ci'
import { FaStar } from 'react-icons/fa'
import './index.scss'
import { BasketContext } from '../../../context/BasketContext'

const ProductCard = ({
  id,
  cafenaProduct,
  product,
  image,
  name,
  price,
  discount,
  sku,
  rating,
  categoryId
}) => {
  const [isHover, setIsHover] = useState(false)
  const { addToBasket } = useContext(BasketContext)

  const handleMouseEnter = () => {
    setIsHover(true)
  }

  const handleMouseLeave = () => {
    setIsHover(false)
  }

  //Generate Rating Stars
  const generateStart = rating => {
    const startsArray = []
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        startsArray.push(<FaStar />)
      } else {
        startsArray.push(<CiStar />)
      }
    }
    return startsArray
  }
  const starts = generateStart(rating)

  const calcDiscountedAmount = (price * discount) / 100
  const discountedPrice = price - calcDiscountedAmount
  const classNames = `${
    cafenaProduct ? 'col-xl-4 col-lg-6 col-12' : 'col-lg-4 col-md-6 col-12'
  } pb-2 ${isHover ? 'hovered' : ''}`

  return (
    <div className={classNames}>
      <div
        className={`${cafenaProduct ? 'cafena-product' : ''} product`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <div className='product_actions'>
          <button className='add-basket' onClick={() => addToBasket(product)}>
            <CiShoppingBasket />
          </button>
          <button className='wishlist-btn'>
            <CiHeart />
          </button>
          <button className='detail-modal'>
            <FaEye />
          </button>
        </div>
        <div className='product_imgs'>
          {isHover ? (
            <img src={image[0]} className='on-hover' />
          ) : (
            <img src={image[1]} className='default-img' />
          )}
        </div>
        <div className='product_content'>
          <div className='product_rating'>
            {cafenaProduct ? (
              ''
            ) : (
              <>
                <div className='product-rating'>
                  <span>COFFE</span>
                </div>
                <div className='stars'>
                  {starts &&
                    starts.map((star, index) => (
                      <span key={index} className='star'>
                        {star}
                      </span>
                    ))}
                </div>
              </>
            )}
          </div>
          {/* <span>{cate</span> */}
          <div className='product_name py-1'>
            <a href='#'>{name}</a>
          </div>
          <div className='product_price pb-4'>
            <span className='price-title'>PRICE - </span>
            <span className='price'>
              {discount === null ? (
                <p>${price}</p>
              ) : (
                <>
                  ${discountedPrice} /
                  <span className='dis-price'>
                    <del>${price}</del>
                  </span>
                </>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
