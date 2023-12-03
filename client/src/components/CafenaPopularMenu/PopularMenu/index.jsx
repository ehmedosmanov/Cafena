import React from 'react'

const PopularMenu = ({ price, image, title }) => {
  return (
    <div className='col-lg-6  col-md-6  bigBox'>
      <div className='box'>
        <div className='imgContent'>
          <img src={image} alt='' />
        </div>
        <div className='smallBox'>
          <p className='text'>{title}</p>
          <div className='price'>${price}</div>
        </div>
      </div>
    </div>
  )
}

export default PopularMenu
