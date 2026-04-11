import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function AddCart() {
  const cartItems = useSelector((state) => state.cart.cart)
  const navigate = useNavigate()

  return (
    <div className='min-h-screen bg-gray-50 p-8'>
      <div className='max-w-4xl mx-auto'>
        <button 
          onClick={() => navigate('/')}
          className='mb-6 text-indigo-600 font-semibold hover:underline flex items-center gap-2'
        >
          ← Back to Shop
        </button>
        
        <h1 className='text-3xl font-bold text-gray-800 mb-8'>Your Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className='bg-white p-12 rounded-2xl shadow-sm text-center'>
            <p className='text-gray-500 text-lg'>Your cart is empty.</p>
          </div>
        ) : (
          <div className='space-y-4'>
            {cartItems.map((item, index) => (
              <div key={index} className='bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                  <img src={item.image} alt={item.name} className='w-20 h-20 rounded-xl object-cover' />
                  <div>
                    <h3 className='font-bold text-gray-800'>{item.name}</h3>
                    <p className='text-gray-400 text-sm'>Qty: {item.quantity}</p>
                  </div>
                </div>
                <div className='text-right'>
                  <p className='text-indigo-600 font-bold text-lg'>${item.price * item.quantity}</p>
                  <p className='text-gray-400 text-sm'>${item.price} each</p>
                </div>
              </div>
            ))}
            
            <div className='mt-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100'>
              <div className='flex justify-between items-center text-xl font-bold text-gray-800'>
                <span>Total</span>
                <span>${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AddCart