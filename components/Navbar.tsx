'use client'
import Image from 'next/image'
import React from 'react'
import { CiBellOn } from "react-icons/ci";
import { MdOutlineMessage } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from 'next/link';
import { useCartStore } from '@/store/store';

export default function Navbar() {
  const {items} = useCartStore((state)=> state)
  const itemsInCart = items.length
  return (
    <div className='flex justify-between items-center text-black p-2'>
      <div className="flex gap-2">
        <Image className='w-[50px] h-[50px] rounded-full' src="/IMG_2872.jpg" alt=""  width={100} height={100}/>
        <div className='flex flex-col font-bold items-center justify-center'>
        <p className='text-sm'>Welcome</p>
        <p>Mr. Samuel</p>
        </div>
      </div>
      <div className='flex gap-4 text-xl font-bold'>
        <div className='bg-white shadow-lg p-2 rounded-full'><CiBellOn/></div>
        <div className='bg-white shadow-lg p-2 rounded-full'><MdOutlineMessage/></div>
        <div className='flex justify-center items-center text-2xl relative'>
                <Link href='/Cart'>
                  <AiOutlineShoppingCart/>
                </Link>
                <div className='bg-red-700 text-white w-[20px] h-[20px]absolute top-0 right-0 translate-y-[-10px] translate-x-[-10px] flex justify-center text-sm rounded-full items-center'>{itemsInCart}</div>
              </div>
      </div>

    </div>
  )
}
