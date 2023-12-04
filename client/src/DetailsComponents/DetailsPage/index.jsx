import React, { useEffect, useState } from 'react'
import Products from '../Products'
import TabDetails from '../TabDetails'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const DeatailsPage = () => {
  const { productId } = useParams() // Use productId here to match the route parameter
  const [detailProducts, setDetailProducts] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchDetailData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/products/${productId}`
        )
        const result = await res.data
        setDetailProducts(result)
      } catch (error) {
        console.error('error', error)
      } finally {
        setLoading(false)
      }
    }

    fetchDetailData()
  }, [productId])

  if (loading) {
    return <p>Loading...</p>
  }
  return (
    <>
      <Products detailProducts={detailProducts}></Products>
      <TabDetails></TabDetails>
    </>
  )
}

export default DeatailsPage
