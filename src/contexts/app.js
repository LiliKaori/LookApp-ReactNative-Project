import PropTypes from 'prop-types'
import React, {createContext, useState} from 'react'

export const AppContext = createContext({})

export default function ContextProvider({children}) {
  const discountPercentage = 0.1
  const deliveryTax = 10
  const orderNumber = new Date().getTime()

  const [user, setUser] = useState({})
  const [cart, setCart] = useState([])

  const addToCart = product => {
    const existentIndex = cart?.findIndex(p => p.id === product.id)
    const oldCart = cart

    if (existentIndex !== -1) {
      oldCart[existentIndex] = product
    } else {
      oldCart.push(product)
    }

    setCart(oldCart)
  }

  const removeToCart = productId => {
    const filteredProducts = cart?.filter(p => p.id !== productId)
    setCart(filteredProducts)
  }

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        cart,
        addToCart,
        removeToCart,
        discountPercentage,
        deliveryTax,
        orderNumber,
      }}>
      {children}
    </AppContext.Provider>
  )
}

ContextProvider.propTypes = {
  children: PropTypes.node,
}
