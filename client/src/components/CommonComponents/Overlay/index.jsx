import React, { useContext } from 'react'
import './index.scss'
import { GlobalContext } from '../../../context/GlobalContext'

const Overlay = () => {
  const { isActive, setIsActive, isOpen, setIsOpen, isVisible, setIsVisible } =
    useContext(GlobalContext)

  const handleCloseSidebar = () => {
    setIsActive(false)
    setIsOpen(false)
    setIsVisible(false)
  }

  return (
    <div
      className={`${isVisible || isActive || isOpen ? 'active' : ''} overlay`}
      onClick={handleCloseSidebar}></div>
  )
}

export default Overlay
