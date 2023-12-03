import React from 'react'
import './index.scss'
const Widget = ({ children, title }) => {
  return (
    <div className='widget'>
      <h2 className='widget-title'>{title}</h2>
      {children}
    </div>
  )
}

export default Widget
