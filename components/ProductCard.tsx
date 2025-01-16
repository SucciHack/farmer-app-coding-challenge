import Image from 'next/image'
import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import AddToCartButton from './AddToCartButton';

export default function ProductCard() {
  return (
    <div className='bg-white shadow-lg rounded-md overflow-hidden'>
      <Image className='h-[150px] object-cover' src="/farmer1.jpg" alt="" width={300} height={300}/>
        <div className='flex justify-between items-center p-2'>
        <p>Kaweesi Samuel</p>
        <p className='text-green-400'>
        <FaCircleCheck/>
        </p>
        </div>
        <p className='px-2'>Organic Mango</p>
        <div className='p-2 flex justify-between'>
            <div className="flex gap-1 items-center text-sm text-yellow-300">
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStarHalfAlt/>
            <FaRegStar/>
            <p>($500)</p>
            </div>
            <p>$500</p>
        </div>
        <div className="flex justify-between px-2">
            <p className='text-green-600'>In stock</p>
            <p className='font-bold text-lg'>$500</p>
        </div>
        <AddToCartButton/>
    </div>

  )
}
