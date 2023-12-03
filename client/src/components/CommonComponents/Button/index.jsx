import React from 'react'
import './index.scss'
const Button = ({ secondary, children, onClick }) => {
  const btnClassName = secondary
    ? 'custom-btn custom-btn_secondary'
    : 'custom-btn'
  return (
    <button className={btnClassName} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
