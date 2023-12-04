import React, { useContext, useState } from 'react'
import './index.scss'
import { FaStar } from 'react-icons/fa'
import { IoCheckmark } from 'react-icons/io5'
import { MdOutlineDoNotDisturbAlt } from 'react-icons/md'

import { IoMdHeart } from 'react-icons/io'
import { FaShare } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaGooglePlusG } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { CiStar } from 'react-icons/ci'
import { BasketContext } from '../../context/BasketContext'
import { WishlistContext } from '../../context/WishlistContext'
import Button from '../../components/CommonComponents/Button'

const Products = ({ detailProducts }) => {
  const {
    basket,
    setBasket,
    addToBasket,
    removeFromBasket,
    handleInc,
    handleDec,
    quantity,
    setQuantity
  } = useContext(BasketContext)

  const { addToWishlist } = useContext(WishlistContext)

  console.log(basket)

  console.log(quantity)

  const handleAddBasket = e => {
    e.preventDefault()
    // addToBasket(detailProducts, { count: quantity })
    addToBasket(detailProducts, quantity)
  }

  const handleWishlist = e => {
    e.preventDefault()
    addToWishlist(detailProducts)
  }

  const { discount, image, name, price, rating, desc, isStock, count } =
    detailProducts || {}

  const [bigImageSrc, setBigImageSrc] = useState(
    'https://xpressrow.com/html/cafena/cafena/assets/images/products/pp-1.png'
  )
  const handleImageClick = (event, newSrc) => {
    event.preventDefault()
    setBigImageSrc(newSrc)
  }

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

  //Calculate Discount Price
  const calcDiscountedAmount = (price * discount) / 100
  const discountedPrice = price - calcDiscountedAmount
  return (
    <>
      <div id='product-det-first'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-6 col-lg-12 col-md-12 col-12'>
              <div className='product-details__wrapper'>
                <div className='pd-img'>
                  <div className='big-img'>
                    <img src={bigImageSrc} alt='' />
                  </div>
                </div>
                <div className='pd-tab'>
                  <nav>
                    <div className='tab-list'>
                      {image?.map((img, index) => (
                        <a
                          key={index}
                          href=''
                          onClick={e => handleImageClick(e, img)}>
                          <img src={img} alt='' />
                        </a>
                      ))}
                    </div>
                  </nav>
                </div>
              </div>
            </div>
            <div className='col-xl-6 col-lg-12 col-md-12 col-12'>
              <div className='product-details__content'>
                <div className='tr-wrapper d-flex align-items-center '>
                  <h2 className='title'>{name}</h2>
                  <div className='rating-wrapper'>
                    <div className='rattings d-flex align-items-center'>
                      {starts &&
                        starts.map((star, index) => (
                          <span key={index} className='star'>
                            {star}
                          </span>
                        ))}
                    </div>
                    <span className='rt-num'>04 - Customar Review</span>
                  </div>
                </div>
                <p className='text-pd'>{desc}</p>
                <span className='in-stock'>
                  <>
                    {isStock ? (
                      <>
                        <IoCheckmark className='st' /> <span>In Stock</span>{' '}
                      </>
                    ) : (
                      <>
                        <MdOutlineDoNotDisturbAlt />
                        <span>Empty</span>
                      </>
                    )}
                  </>
                </span>
                <h3 className='price'>
                  ${discountedPrice} <del className='del'>${price}</del>
                </h3>

                <div className='product-quantity d-flex align-items-center'>
                  <span>Quantity</span>
                  <input
                    className='inp-quantity'
                    type='number'
                    placeholder='1'
                    min={1}
                    onChange={e =>
                      setQuantity(Math.max(1, parseInt(e.target.value, 10)))
                    }
                  />

                  <Button onClick={handleAddBasket}>
                    add to cart
                  </Button>
                </div>
                <a className='wishlist' href='' onClick={handleWishlist}>
                  <IoMdHeart />
                  Add to watch list
                </a>
                <div className='pd-social-wrapper'>
                  <span className='share'>
                    <FaShare />
                    Share
                  </span>
                  <div className='social-links d-flex align-items-center'>
                    <a href=''>
                      <FaTwitter />
                    </a>
                    <a href=''>
                      <FaFacebookF />
                    </a>
                    <a href=''>
                      <FaYoutube />
                    </a>
                    <a href=''>
                      <FaGooglePlusG />
                    </a>
                    <a href=''>
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products
