import React, { useContext } from 'react'
import './index.scss'
import { GlobalContext } from '../../../context/GlobalContext'

const Overlay = () => {
  const { isActive, setIsActive, isOpen, setIsOpen } = useContext(GlobalContext)

  const handleCloseSidebar = () => {
    setIsActive(false)
    setIsOpen(false)
  }

  return (
    <div
      className={`${isActive || isOpen ? 'active' : ''} overlay`}
      onClick={handleCloseSidebar}></div>
  )
}

export default Overlay
