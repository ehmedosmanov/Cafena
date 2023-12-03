import React from 'react'
import { FaSearch } from 'react-icons/fa'
import './index.scss'
const SearchProduct = () => {
  return (
    <form className='search-form'>
      <input type='text' placeholder='Search Product' />
      <button type='submit'>
        <FaSearch />
      </button>
    </form>
  )
}

export default SearchProduct
