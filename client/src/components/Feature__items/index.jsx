import React from 'react'
import Feature_item from './Feature_item'
import useFetch from '../../hooks/useFetch'
import './index.scss'
function Feature__items() {
  const baseUrl = 'http://localhost:3000/features'
  const { data } = useFetch(baseUrl)
  return (
    <>
      <section id='feature-items' style={{ backgroundColor: 'black' }}>
        <div className='container'>
          <div className='row '>
            {data && data.map(item => <Feature_item key={item.id} {...item} />)}
          </div>
        </div>
      </section>
    </>
  )
}

export default Feature__items
