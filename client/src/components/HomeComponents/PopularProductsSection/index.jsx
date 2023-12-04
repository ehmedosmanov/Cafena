import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './index.scss'
import Button from '../../CommonComponents/Button'
import ProductCard from '../../CommonComponents/ProductCard'
import useFetch from '../../../hooks/useFetch'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const PopularProductsSection = () => {
  const baseUrl = `http://localhost:3000/products/`
  const { data, loading } = useFetch(baseUrl)
  if (loading) {
    return <p>...LOADING</p>
  }
  const filteredPopularProducts = data
    ? data.filter(product => product.rating === 5)
    : []

  console.log(filteredPopularProducts)

  return (
    <section id='popular-products'>
      <div className='container'>
        <div className='products-title d-flex justify-content-between align-items-center py-4'>
          <div className='products-title_left'>
            <span className='banner'>POPULAR PRODUCT</span>
            <h2>CAFENA POPULAR PRODUCT</h2>
          </div>
          <div className='products-title_right'>
            <NavLink to={'/Shop'}>
              <Button>VIEW ALL PRODUCT</Button>
            </NavLink>
          </div>
        </div>
        <div className='row pt-2'>
          {filteredPopularProducts &&
            filteredPopularProducts.map(product => (
              <ProductCard key={product.id} {...product} product={product} />
            ))}
        </div>
      </div>
    </section>
  )
}

export default PopularProductsSection
