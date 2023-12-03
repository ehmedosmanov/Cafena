import { createContext } from 'react'
import useLocaleStorage from '../hooks/useLocaleStorage'
export const BasketContext = createContext()

const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useLocaleStorage('basket')

  const addToBasket = product => {
    const findProductFromBasket = basket.find(x => x.id === product.id)
    if (findProductFromBasket) {
      findProductFromBasket.count++
      setBasket([...basket])
      return
    }
    setBasket([...basket, { ...product, count: 1 }])
  }

  const removeFromBasket = id => {
    setBasket(basket.filter(item => item.id !== id))
  }
  const data = {
    basket,
    setBasket,
    addToBasket,
    removeFromBasket
  }
  return (
    <BasketContext.Provider value={data}>{children}</BasketContext.Provider>
  )
}

export default BasketProvider
