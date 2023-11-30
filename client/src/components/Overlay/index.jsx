import React, { useContext } from 'react'
import './index.scss'
import { GlobalContext } from '../../context/GlobalContext'

const Overlay = () => {
  const { isActive, setIsActive } = useContext(GlobalContext)

  const handleCloseSidebar = () => {
    setIsActive(false)
  }

  return (
    <div
      className={`${isActive ? 'active' : ''} overlay`}
      onClick={handleCloseSidebar}></div>
  )
}

export default Overlay
