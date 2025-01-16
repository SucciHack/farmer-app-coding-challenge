import Image from 'next/image'
import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import AddToCartButton from './AddToCartButton';
import Link from 'next/link';
import { ProductsProps } from '@/Types/types';

export default function ProductCard({productsData}: {productsData:ProductsProps}) {
  return (
    <div className='bg-white shadow-lg rounded-md overflow-hidden'>
      <Link href='/ProductPage'>
        <Image className='h-[150px] object-cover' src={productsData.images[0]} alt={productsData.title} width={300} height={300}/>
      </Link>
        <div className='flex justify-between items-center p-2'>
        <p>{productsData.title}</p>
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
            <p>${productsData.price}</p>
            </div>
            <p>{productsData.quantity}</p>
        </div>
        <div className="flex justify-between px-2">
            <p className='text-green-600'>In stock</p>
            <p className='font-bold text-lg'>{productsData.price}</p>
        </div>
        <AddToCartButton title='Add Cart'/>
    </div>

  )
}
