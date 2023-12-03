import { createContext, useContext, useState } from 'react'

export const ShopContext = createContext()

const ShopProvider = ({ children }) => {
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 1000])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [searchQuery, setSearchQuery] = useState(null)

  const handleCategory = categories => {
    setSelectedCategory(categories)
  }

  const handlePriceRange = priceRange => {
    setSelectedPriceRange(priceRange)
  }

  const handleSearch = searchValue => {
    setSearchQuery(searchValue)
  }

  const data = {
    handlePriceRange,
    selectedPriceRange,
    setSelectedPriceRange,
    handleCategory,
    setSelectedCategory,
    selectedCategory,
    handleSearch,
    setSearchQuery,
    searchQuery
  }
  return <ShopContext.Provider value={data}>{children}</ShopContext.Provider>
}

export default ShopProvider
