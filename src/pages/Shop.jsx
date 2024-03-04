import React from 'react'
import {products} from '../products'
import ProductCard from '../components/ProductCard'

const Shop = () => {
    return (
        <div className='grid grid-cols-4 gap-4'>
            {products.map(product => <ProductCard key={product.id} product={product}/> )}
        </div>
    )
}

export default Shop
