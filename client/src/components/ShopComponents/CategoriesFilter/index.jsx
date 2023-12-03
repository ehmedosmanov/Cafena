import React, { useContext } from 'react'
import './index.scss'
import { ShopContext } from '../../../context/ShopContext'
const CategoriesFilter = ({ id, name, count }) => {
  const { handleCategory, setSelectedCategory, selectedCategory } =
    useContext(ShopContext)

  return (
    <div
      className={`categories-filter ${selectedCategory === id ? 'active' : ''}`}
      onClick={() => handleCategory(id)}>
      <div className='category-box'>
        <span className='category-name'>{name}</span>
        <span className='category-name'>{count}</span>
      </div>
    </div>
  )
}

export default CategoriesFilter
