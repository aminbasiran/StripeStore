import React from 'react'
import { useOutletContext } from 'react-router-dom'

const AddedCard = ({product}) => {

    const {contextValue} = useOutletContext()
    return (
        <div className='flex justify-start gap-4 items-center'>
            <img className='w-28 aspect-square' src={product.img} alt="" />
            <div>
                <h1>{product.name}</h1>
                <h1>$ {product.price}</h1>
                <div className='flex flex-row gap-6 items-center'>
                    <button onClick={()=>contextValue.removeOneFromCart(product.id)}>-</button>
                    <h1>Quantity: {contextValue.getProductQuantity(product.id)} </h1>
                    <button onClick={()=>contextValue.addOneToCart(product.id)}>+</button>
                </div>
            </div>
            <div className='ml-auto'>
                <h1 >$ {contextValue.getTotalCost(product.id,product.price).toFixed(2)}</h1>
                <h3 onClick={()=>contextValue.deleteFromCart(product.id)}>Trash</h3>
            </div>
        </div>
    )
}

export default AddedCard
