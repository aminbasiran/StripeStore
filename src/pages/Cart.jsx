import React from 'react'
import { useOutletContext } from 'react-router-dom'
import AddedCard from '../components/AddedCard'
import { products } from '../products'

const Cart = () => {

    const {contextValue} = useOutletContext()

    return (
        <div>
            <h1>Shopping Cart!</h1>
            {products.map(product => {
                if(contextValue.getProductQuantity(product.id) !== 0 ){
                    return <AddedCard key={product.id} product={product} />
                }
            })}
            <h1 className='text-right '>Grand total: $ {contextValue.getGrandTotalCost().toFixed(2)}  </h1> 
        </div>
    )
}

export default Cart
