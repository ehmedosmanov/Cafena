import React, { useContext, useEffect, useState } from 'react'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import { FaListUl } from 'react-icons/fa'
import ProductCard from '../../CommonComponents/ProductCard'
import useFetch from '../../../hooks/useFetch'
import SearchProduct from '../SearchProduct'
import Widget from '../../CommonComponents/Widget'
import CategoriesFilter from '../CategoriesFilter'
import PriceFilter from '../PriceFilter'
import { ShopContext } from '../../../context/ShopContext'
import TopProducts from '../TopProducts'
import './index.scss'

const CafenaProducts = () => {
  //Urls
  const baseUrl = 'http://localhost:3000/products'
  const categoryUrl = 'http://localhost:3000/category'

  //Fethcing Datas
  const { data, loading } = useFetch(baseUrl)
  const { data: categoryData } = useFetch(categoryUrl)

  //Contexts
  const {
    selectedPriceRange,
    handleCategory,
    setSelectedCategory,
    selectedCategory,
    setSearchQuery,
    searchQuery
  } = useContext(ShopContext)

  //States
  const [selectedOption, setselectedOption] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [pagePerData, setPagePerData] = useState(3)
  const [pageNumbers, setPageNumbers] = useState([])

  //Calculate Category Size
  const calculateCountCategory = categoryData
    ? categoryData.reduce((acc, cat) => {
        const filteredProducts = data
          ? data.filter(product => product.categoryId === cat.id)
          : []
        acc[cat.id] = filteredProducts.length
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

  //Filters Category, Price and Search
  const filteredProducts =
    data?.filter(
      product =>
        (!searchQuery ||
          product?.name.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (!selectedCategory || product?.categoryId === selectedCategory) &&
        calcDiscountedPrice(product?.price, product?.discount) >=
          selectedPriceRange[0] &&
        calcDiscountedPrice(product?.price, product?.discount) <=
          selectedPriceRange[1]
    ) || []

  //Handle All products
  const handleAll = () => {
    setSelectedCategory(null)
  }

  //Sort OnChange
  const handleSortChange = e => {
    const selectedOption = e.target.value
    setselectedOption(selectedOption)
  }

  //Sorting Products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (selectedOption === 'HightoLow') {
      return (
        calcDiscountedPrice(b.price, b.discount) -
        calcDiscountedPrice(a.price, a.discount)
      )
    } else if (selectedOption === 'LowtoHigh') {
      return (
        calcDiscountedPrice(a.price, a.discount) -
        calcDiscountedPrice(b.price, b.discount)
      )
    } else if (selectedOption === 'AtoZ') {
      return a.name.localeCompare(b.name)
    } else if (selectedOption === 'ZtoA') {
      return b.name.localeCompare(a.name)
    } else {
      return 0
    }
  })

  useEffect(() => {
    const numbers = []
    for (
      let i = 1;
      i < Math.ceil((sortedProducts?.length || 1) / pagePerData);
      i++
    ) {
      numbers.push(i)
    }
    setPageNumbers(numbers)
  }, [data])

  const lastElementIndex = currentPage * pagePerData
  const firstElementIndex = lastElementIndex - pagePerData

  const pageData = (sortedProducts || []).slice(
    firstElementIndex,
    lastElementIndex
  )

  const handlePaginationClick = num => {
    setCurrentPage(num)
  }
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <section id='cafena-products'>
      <div className='container'>
        <div className='cafena-products-info'>
          <div className='cafena-products-info_left'>
            <span className='showing'>
              Showing 1– {loading ? 'Loading...' : filteredProducts.length} of
              54 results
            </span>
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
                <select
                  value={selectedOption}
                  onChange={handleSortChange}
                  id='products'>
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
                    {loading ? (
                      <p>...Loading</p>
                    ) : pageData.length === 0 ? (
                      <p className='text-center'>No Products</p>
                    ) : (
                      pageData &&
                      pageData.map(product => (
                        <ProductCard
                          productId={product.id}
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
              <div className='pagination mt-5 d-flex justify-content-center  align-items-center'>
                <button onClick={handlePrevPage}>&laquo; Prev</button>
                {pageNumbers.map(num => (
                  <button
                    key={num}
                    onClick={() => handlePaginationClick(num)}
                    className={currentPage === num ? 'active' : ''}>
                    {num}
                  </button>
                ))}
                <button onClick={handleNextPage}>Next &raquo;</button>
              </div>
            </div>
            <div className='col-xl-4'>
              <div className='cafena-products-filters'>
                <Widget title={'Search Here'}>
                  <SearchProduct />
                </Widget>
                <Widget title={'Categories'}>
                  <div className='categories-filter' onClick={handleAll}>
                    <div className='category-box'>
                      <span className='category-name'>All</span>
                    </div>
                  </div>
                  {categoryData &&
                    categoryData.map(category => (
                      <CategoriesFilter
                        key={category.id}
                        id={category.id}
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
