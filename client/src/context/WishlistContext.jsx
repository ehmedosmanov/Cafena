import { createContext, useEffect, useState } from 'react'
import useLocaleStorage from '../../src/hooks/useLocaleStorage'
export const WishlistContext = createContext()

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useLocaleStorage('wishlist')

  const addToWishlist = product => {
    const findWishlistProduct = wishlist.find(x => x.id === product.id)
    if (!findWishlistProduct) {
      setWishlist([...wishlist, product])
    }
  }

  const removeFromWishlist = itemId => {
    setWishlist(wishlist.filter(item => item.id !== itemId))
  }

  const data = {
    wishlist,
    addToWishlist,
    removeFromWishlist
  }

  return (
    <WishlistContext.Provider value={data}>{children}</WishlistContext.Provider>
  )
}

export default WishlistProvider
