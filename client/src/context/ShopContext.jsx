import { createContext, useContext, useState } from 'react'

export const ShopContext = createContext()

const ShopProvider = ({ children }) => {
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 1000])
  const [selectedCategory, setSelectedCategory] = useState(null)

  const handleCategory = categories => {
    setSelectedCategory(categories)
  }

  const handlePriceRange = priceRange => {
    setSelectedPriceRange(priceRange)
  }

  const data = {
    handlePriceRange,
    selectedPriceRange,
    setSelectedPriceRange,
    handleCategory,
    setSelectedCategory,
    selectedCategory
  }
  return <ShopContext.Provider value={data}>{children}</ShopContext.Provider>
}

export default ShopProvider

export const useShopContext = () => useContext(ShopContext)
