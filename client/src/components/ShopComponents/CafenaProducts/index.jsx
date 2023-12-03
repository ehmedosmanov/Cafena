import React, { useContext } from 'react'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import { FaListUl } from 'react-icons/fa'
import ProductCard from '../../CommonComponents/ProductCard'
import './index.scss'
import useFetch from '../../../hooks/useFetch'
import SearchProduct from '../SearchProduct'
import Widget from '../../CommonComponents/Widget'
import CategoriesFilter from '../CategoriesFilter'
import PriceFilter from '../PriceFilter'
import { ShopContext } from '../../../context/ShopContext'
import TopProducts from '../TopProducts'
const CafenaProducts = () => {
  //Urls
  const baseUrl = 'http://localhost:3000/products'
  const categoryUrl = 'http://localhost:3000/category'
  //Fethcing Datas
  const { data } = useFetch(baseUrl)
  const { data: categoryData } = useFetch(categoryUrl)
  //Contexts
  const { handlePriceRange, selectedPriceRange, setSelectedPriceRange } =
    useContext(ShopContext)

  //Calculate Category Size
  const calculateCountCategory = categoryData
    ? categoryData.reduce((acc, cat) => {
        acc[cat.id] = data.filter(
          product => product.categoryId === cat.id
        ).length
        return acc
      }, {})
    : {}

  //Calculate Discount Price
  const calcDiscountedPrice = (price, discount) => {
    if (discount !== null) {
      const discountedAmount = (price * discount) / 100
      return price - discountedAmount
    }
    return price
  }

  //Filters
  const filteredProducts =
    data?.filter(
      product =>
        calcDiscountedPrice(product?.price, product?.discount) >=
          selectedPriceRange[0] &&
        calcDiscountedPrice(product?.price, product?.discount) <=
          selectedPriceRange[1]
    ) || []

  return (
    <section id='cafena-products'>
      <div className='container'>
        <div className='cafena-products-info'>
          <div className='cafena-products-info_left'>
            <span className='showing'>Showing 1–12 of 54 results</span>
          </div>
          <div className='cafena-products-info_right'>
            <div className='d-flex align-items-center gap-3'>
              <div className='grid-layout'>
                <span>
                  <BsFillGrid3X3GapFill />
                </span>
                <span>
                  <FaListUl />
                </span>
              </div>
              <div className='sort-products'>
                <select name='products' id='products'>
                  <option value='HightoLow'>High to Low</option>
                  <option value='LowtoHigh'>Low to High</option>
                  <option value='AtoZ'>A to Z</option>
                  <option value='ZtoA'>Z to A</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className='cafena-products-main pt-4'>
          <div className='row'>
            <div className='col-xl-8'>
              <div className='cafena-products-content'>
                <div className='all-cafena-products'>
                  <div className='row'>
                    {filteredProducts.length === 0 ? (
                      <p className='text-center'>No Products</p>
                    ) : (
                      filteredProducts &&
                      filteredProducts.map(product => (
                        <ProductCard
                          product={product}
                          cafenaProduct
                          key={product.id}
                          {...product}
                        />
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-4'>
              <div className='cafena-products-filters'>
                <Widget title={'Search Here'}>
                  <SearchProduct />
                </Widget>
                <Widget title={'Categories'}>
                  {categoryData &&
                    categoryData.map(category => (
                      <CategoriesFilter
                        key={category.id}
                        name={category.name}
                        count={calculateCountCategory[category.id] || 0}
                      />
                    ))}
                </Widget>
                <Widget title={'Price Filter'}>
                  <PriceFilter />
                </Widget>
                <Widget title={'Top Product'}>
                  <TopProducts />
                </Widget>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CafenaProducts
