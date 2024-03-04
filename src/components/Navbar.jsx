import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = ({getNumberOfItemInCart}) => {



    return (
        <div className='flex flex-row justify-between place-items-center'>
            <Link to='/shop'>
            <h1 className='text-3xl font-bold'>StripeStore</h1>
            
            </Link>
            <Link to='/cart'>
            <h1 className='font-bold'>Cart ({getNumberOfItemInCart()})</h1>
            
            </Link>
        </div>
    )
}

export default Navbar
