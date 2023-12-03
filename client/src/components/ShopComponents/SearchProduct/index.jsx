import React, { useContext } from 'react'
import { FaSearch } from 'react-icons/fa'
import './index.scss'
import { ShopContext } from '../../../context/ShopContext'
const SearchProduct = () => {
  const { handleSearch, setSearchQuery, searchQuery } = useContext(ShopContext)

  const handleChange = e => {
    setSearchQuery(e.target.value)
  }
  return (
    <form className='search-form'>
      <input
        type='text'
        placeholder='Search Product'
        onChange={e => handleChange(e)}
      />
      <button type='submit'>
        <FaSearch />
      </button>
    </form>
  )
}

export default SearchProduct
