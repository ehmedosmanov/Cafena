import React from 'react'
import TopProductCard from './TopProductCard'
import useFetch from '../../../hooks/useFetch'
const TopProducts = () => {
  const baseUrl = 'https://cafenaserver.onrender.com/products'
  const { data, loading } = useFetch(baseUrl)
  if (loading) {
    return <p>...LOADING</p>
  }

  const filterTopProducts = data
    ? data.filter(product => product.rating === 5)
    : []
  return (
    <div className='top-products'>
      {filterTopProducts &&
        filterTopProducts.map(item => (
          <TopProductCard key={item.id} {...item} />
        ))}
    </div>
  )
}

export default TopProducts
