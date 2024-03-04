import { Outlet,Link } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import { useState } from 'react'
import { products } from './products'

function App() {

  // [{id:1,quantityInCart: 2},{id:2,quantityInCart: 3}]
  const [cart,setCart] = useState([])

  const getProductQuantity = (productID) => {
      const quantitySpecificID = cart.find(product => product.id === productID)?.quantityInCart
      if(quantitySpecificID === undefined){
        return 0
      }

      return quantitySpecificID
  }

  const addOneToCart = (productID) => {
      const quantity =  getProductQuantity(productID)

      if(quantity == 0){ // product is not in cart
        setCart([
          ...cart,
          {
            id: productID,
            quantityInCart : 1
          }
        ])
      }

      else{             // product is in cart
        setCart(
          cart.map(product => 
            product.id === productID
            ? {...product,quantityInCart : product.quantityInCart + 1 }
            : product
            )
        )

      }
  }

  const removeOneFromCart = (productID) => {
    setCart(
      cart.map(product => 
        product.id === productID
        ? {...product,quantityInCart : product.quantityInCart - 1 }
        : product
        )
    )

  }

  const deleteFromCart = (productID) => {
    setCart(
      cart.filter(product => product.id !== productID)
    )
  }

  const getTotalCost = (productID,price) => {
    const quantity =  getProductQuantity(productID)
    const subTotal = quantity * price
    return subTotal
  }


  const getGrandTotalCost = () => {
    let grandTotal = 0

    products.forEach(product => {
      if(cart[product.id - 1 ] !== 0 ){
        grandTotal += getProductQuantity(product.id) * product.price
      }
    })

    return grandTotal
  }




  const contextValue = {
      items: cart,
      getProductQuantity,
      addOneToCart,
      removeOneFromCart,
      deleteFromCart,
      getTotalCost,
      getGrandTotalCost
  }


  return (
    <div>
      <Navbar/>
      <h1 className='text-4xl'>Welcome to <span className='font-extrabold text-indigo-600'>StripeStore.</span> This store is set up for shopping cart system management and how to integrate Stripe payment.</h1>
      <Outlet context={{contextValue}}/>
    </div>
  )
}

export default App
