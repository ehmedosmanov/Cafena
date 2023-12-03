import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'

import './index.scss'
const SearchNav = () => {
  const [isActive, setIsActive] = useState(false)
  const handleActiveSearch = () => {
    setIsActive(!isActive)
  }
  return (
    <div className='nav-search'>
      <span onClick={handleActiveSearch}>
        {!isActive ? <FaSearch /> : <FaTimes />}
      </span>
      <div className={`${isActive ? 'active' : ''} search-input `}>
        <input type='text' placeholder='Search Keywords' />
        <span className='search-box'>
          <FaSearch />
        </span>
      </div>
    </div>
  )
}

export default SearchNav
