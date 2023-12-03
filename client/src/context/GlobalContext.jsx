import { useEffect, useRef } from 'react'
import { createContext, useState } from 'react'

export const GlobalContext = createContext()

const GlobalContextProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const handleOpenSidebar = () => {
    setIsActive(!isActive)
  }

  const handleOpenBasketSidebar = () => {
    setIsOpen(!isOpen)
  }

  const handleOpenWishlistSidebar = () => {
    setIsVisible(!isVisible)
  }

  const data = {
    handleOpenSidebar,
    setIsActive,
    isActive,
    isOpen,
    setIsOpen,
    handleOpenBasketSidebar,
    isVisible,
    handleOpenWishlistSidebar,
    setIsVisible
  }
  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  )
}

export default GlobalContextProvider
