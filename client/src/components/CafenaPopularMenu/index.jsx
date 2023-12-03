import React from 'react'
import './index.scss'
import PopularMenu from './PopularMenu'
import useFetch from '../../hooks/useFetch'
function Manu() {
  const baseUrlMenu = 'http://localhost:3000/popularMenu'
  const { data, loading } = useFetch(baseUrlMenu)
  if (loading) {
    return <p>...Loading</p>
  }
  return (
    <div id='manu'>
      <div className='container'>
        <div className='row top'>
          <p className='title'>manu</p>
          <h2>CAFENA POPULAR MENU</h2>
        </div>
        <div className='row down'>
          {data && data.map(item => <PopularMenu key={item.id} {...item} />)}
        </div>
      </div>
    </div>
  )
}

export default Manu
