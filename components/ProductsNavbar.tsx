'use client'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FaRegHeart} from 'react-icons/fa'
import { LuCircleChevronLeft } from "react-icons/lu";
import Link from 'next/link'
import FilterProductsbtn from './FilterProductsbtn';
import { useCartStore } from '@/store/store';

export default function ProductsNavbar() {
  const {items} = useCartStore((state)=> state)
  const itemsInCart = items.length
  return (
    <div className='text-black'>
          <div className='flex justify-between p-2'>
            <Link className='bg-white shadow-lg w-[50px] flex justify-center items-center rounded-full text-lg' href='/Home'><LuCircleChevronLeft /></Link>
            <div className='flex gap-4 text-sm font-bold'>
              <FilterProductsbtn title='Sell Now'/>
              <div className='bg-white shadow-lg w-[50px] flex justify-center items-center rounded-full text-lg'><FaRegHeart /></div>
              <div className='flex justify-center items-center text-2xl relative'>
                <Link href='/Cart'>
                  <AiOutlineShoppingCart/>
                </Link>
                <div className='bg-red-700 text-white w-[20px] h-[20px]absolute top-0 right-0 translate-y-[-10px] translate-x-[-10px] flex justify-center text-sm rounded-full items-center'>{itemsInCart}</div>
              </div>
            </div>
          </div>
    
        </div>
  )
}
