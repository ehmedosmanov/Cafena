import React, { useContext, useEffect } from 'react'
import './index.scss'
import { Slider } from 'antd'
import { ShopContext } from '../../../context/ShopContext'
const PriceFilter = () => {
  const { handlePriceRange, selectedPriceRange, setSelectedPriceRange } =
    useContext(ShopContext)

  const onChange = value => {
    setSelectedPriceRange(value)
  }

  const onAfterChange = value => {
    handlePriceRange(value)
  }

  useEffect(() => {
    handlePriceRange(selectedPriceRange)
  }, [selectedPriceRange])

  return (
    <div className='price-filter'>
      <div className='price-slider'>
        <Slider
          range
          step={5}
          defaultValue={selectedPriceRange}
          allowCross={false}
          onChange={onChange}
          onAfterChange={onAfterChange}
          max={1000}
          min={0}
        />
      </div>
      <div className='price-input d-flex justify-content-between  mt-3'>
        <p>
          Price range: ${selectedPriceRange[0]} - ${selectedPriceRange[1]}
        </p>
      </div>
    </div>
  )
}

export default PriceFilter
