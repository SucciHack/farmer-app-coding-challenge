import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FaRegHeart} from 'react-icons/fa'
import { LuCircleChevronLeft } from "react-icons/lu";
import AddToCartButton from './AddToCartButton'
import Link from 'next/link'

export default function ProductsNavbar() {
  return (
    <div className='text-black'>
          <div className='flex justify-between p-2'>
            <Link className='bg-white shadow-lg w-[50px] flex justify-center items-center rounded-full text-lg' href='/Home'><LuCircleChevronLeft /></Link>
            <div className='flex gap-4 text-sm font-bold'>
              <AddToCartButton title='Sell Now'/>
              <div className='bg-white shadow-lg w-[50px] flex justify-center items-center rounded-full text-lg'><FaRegHeart /></div>
              <div className='bg-white shadow-lg w-[50px] flex justify-center items-center rounded-full text-lg'><AiOutlineShoppingCart/></div>
            </div>
          </div>
    
        </div>
  )
}
