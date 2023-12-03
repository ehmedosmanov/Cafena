import React, { createContext, useState } from 'react'

export const WishlistContext=createContext();

const WishlistProvider = ({children}) => {
    const [wishlist, setWishlist] = useState([])

    function addWishlist(item) {
        const finditem = wishlist.find((x) => x.id === item.id);
    
        if (finditem) {
          finditem.count++
          setWishlist([...wishlist]);
          return
        }
        setWishlist([...wishlist,{...item,count: 1}]);
      }
  return (
    <WishlistContext.Provider value={{wishlist,setWishlist,addWishlist}}>
        {children}
    </WishlistContext.Provider>
  )
}

export default WishlistProvider