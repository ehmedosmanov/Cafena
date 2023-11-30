import { useEffect, useRef } from 'react'
import { createContext, useState } from 'react'

export const GlobalContext = createContext()

import React from 'react'

const GlobalContextProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false)

  const handleOpenSidebar = () => {
    setIsActive(!isActive)
  }
  const data = {
    handleOpenSidebar,
    setIsActive,
    isActive
  }
  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  )
}

export default GlobalContextProvider
