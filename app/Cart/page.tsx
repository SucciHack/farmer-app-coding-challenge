import CartItem from '@/components/CartItem'
import ProductsNavbar from '@/components/ProductsNavbar'
import React from 'react'

export default function CartPage() {
  return (
    <div className='bg-[#F2F2F2] h-screen'>
      <ProductsNavbar/>
      <h1 className='py-6 px-2 text-black font-bold'>Shopping Cart</h1>
      <div className="cartContainer px-3 pt-2">
        
      </div>

      <div className="cartItem">
        <CartItem/>
      </div>
    </div>
  )
}
