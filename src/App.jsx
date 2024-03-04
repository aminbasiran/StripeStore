import { Outlet,Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div>
      <div className='flex flex-row justify-between place-items-center'>
        <Link to='/shop'>
          <h1 className='text-3xl font-bold'>StripeStore</h1>
        
        </Link>
        <Link to='/cart'>
          <h1 className='font-bold'>Cart</h1>
        
        </Link>
      </div>
      <h1 className='text-4xl'>Welcome to <span className='font-extrabold text-indigo-600'>StripeStore.</span> This store is set up for shopping cart system management and how to integrate Stripe payment.</h1>
      <Outlet/>
    </div>
  )
}

export default App
