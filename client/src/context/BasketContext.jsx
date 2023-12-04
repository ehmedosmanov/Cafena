import { createContext, useState } from 'react'
import useLocaleStorage from '../hooks/useLocaleStorage'
export const BasketContext = createContext()

const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useLocaleStorage('basket')
  const [quantity, setQuantity] = useState(1)

  const addToBasket = (product, quantityToAdd = 1) => {
    const findProductFromBasket = basket.find(x => x.id === product.id)

    if (findProductFromBasket) {
      findProductFromBasket.count += quantityToAdd
      setBasket([...basket])
      return
    }

    setBasket([...basket, { ...product, count: quantityToAdd }])
  }

  const handleInc = id => {
    const findProductFromBasket = basket.find(x => x.id === id)
    console.log(findProductFromBasket)
    if (findProductFromBasket) {
      findProductFromBasket.count++
      console.log(findProductFromBasket.count++)
      setBasket([...basket])
    }
  }

  const handleDec = id => {
    const findProductFromBasket = basket.find(x => x.id === id)
    findProductFromBasket.count--
    if (findProductFromBasket.count === 0) {
      setBasket(basket.filter(item => item.id !== id))
      return
    }
    setBasket([...basket])
  }

  const removeFromBasket = id => {
    setBasket(basket.filter(item => item.id !== id))
  }
  const data = {
    basket,
    setBasket,
    addToBasket,
    removeFromBasket,
    handleInc,
    handleDec,
    quantity,
    setQuantity
  }
  return (
    <BasketContext.Provider value={data}>{children}</BasketContext.Provider>
  )
}

export default BasketProvider
