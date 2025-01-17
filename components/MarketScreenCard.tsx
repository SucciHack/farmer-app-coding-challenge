import React from 'react'
import { FaRegStar, FaStarHalfAlt } from 'react-icons/fa'
import { FaRegHeart, FaStar } from 'react-icons/fa6'
import AddToCartButton from './AddToCartButton'
import Image from 'next/image'
import { ProductsProps } from '@/Types/types'

export default function MarketScreenCard({marketProductsData}:{marketProductsData:ProductsProps}) {
  return (
    <div className='bg-white shadow-lg rounded-md overflow-hidden flex gap-2'>
        <div className='w-[40%]'>
            <Image className='h-full w-[100%] object-cover' src={marketProductsData.images[2]} alt="" width={300} height={300}/>
        </div>
        <div className='w-[60%]'>
        <div className='flex justify-between items-center p-2'>
            <p>{marketProductsData.title}</p>
            <p className='text-black'>
            <FaRegHeart />
            </p>
            </div>
            <p className='px-2'>{marketProductsData.description}</p>
            <div className='p-2 flex justify-between'>
                <div className="flex gap-1 items-center text-sm text-yellow-300">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStarHalfAlt/>
                <FaRegStar/>
                <p>($500)</p>
                </div>
                <p>{marketProductsData.price}</p>
            </div>
            <div className="flex justify-between px-2">
                <p className='text-green-600'>In stock</p>
                <p className='font-bold text-lg'>{marketProductsData.quantity}</p>
            </div>
            <AddToCartButton/>
        </div>
    </div>
  )
}
