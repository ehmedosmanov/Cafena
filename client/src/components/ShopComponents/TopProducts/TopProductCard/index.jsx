import React from 'react'
import { CiStar } from 'react-icons/ci'
import { FaStar } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import './index.scss'
const TopProductCard = ({ id, image, name, price, discount, rating }) => {
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

  return (
    <NavLink to={'/ShopDetail'}>
      <div className='top-product pb-2'>
        <div className='top-product-img'>
          <img src={image[0]} alt='' />
        </div>
        <div className='top-product-content'>
          <div className='rating'>
            <div className='stars'>
              {starts &&
                starts.map((star, index) => (
                  <span key={index} className='star'>
                    {star}
                  </span>
                ))}
            </div>
          </div>
          <div className='top-product-title'>
            <h5>
              <a href=''>{name}</a>
            </h5>
          </div>
          <div className='top-product-price'>
            <span className='price'>
              {discount === null ? (
                <p>${price}</p>
              ) : (
                <>
                  ${discountedPrice} /
                  <span className='regular'>
                    <del>${price}</del>
                  </span>
                </>
              )}
            </span>
          </div>
        </div>
      </div>
    </NavLink>
  )
}

export default TopProductCard
