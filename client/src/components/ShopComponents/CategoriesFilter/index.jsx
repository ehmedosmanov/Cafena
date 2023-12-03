import React, { useContext } from 'react'
import './index.scss'
import { ShopContext, useShopContext } from '../../../context/ShopContext'
const CategoriesFilter = ({ id, name, count }) => {
  const { handleCategory, setSelectedCategory, selectedCategory } =
    useShopContext()

  const handleClickCategory = () => {}
  return (
    <div className='categories-filter'>
      <div className='category-box'>
        <span className='category-name'>{name}</span>
        <span className='category-name'>{count}</span>
      </div>
    </div>
  )
}

export default CategoriesFilter
