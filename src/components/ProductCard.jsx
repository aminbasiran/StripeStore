import React from 'react'
import { useOutletContext } from 'react-router-dom'

const ProductCard = ({product}) => {

    const {contextValue} = useOutletContext()


    return (
        <div className='p-4  shadow-lg flex flex-col gap-4 bg-[#2f2f31]'>
            <img src={product.img} alt="" />
            <h1>{product.name}</h1>
            <h2>$ {product.price}</h2>
            <button onClick={()=>{contextValue.addOneToCart(product.id)}} className="text-white p-2 bg-indigo-700 rounded-full font-semibold cursor-pointer" type='button'>Add to cart ({contextValue.getProductQuantity(product.id)})</button>
        </div>
    )
}

export default ProductCard
