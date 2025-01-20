import CartItem from '@/components/CartItem'
import ProductsNavbar from '@/components/ProductsNavbar'
import React from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'

export default function CartPage() {
  return (
    <div className='bg-[#F2F2F2] h-screen'>
      <ProductsNavbar/>
      <h1 className='py-6 px-2 text-black font-bold'>Shopping Cart</h1>
      <p className='py-4 bg-white flex justify-between items-center px-3 font-bold'>Sub total items (1 item) <span>$ 300</span></p>
      <div className="cartContainer px-3 pt-2">
        <button className='px-6 py-2 bg-transparent border-[1px] border-green-800 flex justify-between items-center gap-2'><FaArrowLeftLong /> Continue Shopping</button>
      </div>

      <div className="cartItem">
        <CartItem/>
      </div>
    </div>
  )
}
