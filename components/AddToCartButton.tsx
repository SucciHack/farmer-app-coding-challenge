'use client'
import { useCartStore } from '@/store/store'
import { ProductsProps } from '@/Types/types'
import React from 'react'

export default function AddToCartButton({title,product}:{title:string, product:ProductsProps}) { 
  const {handleAddToCart} = useCartStore((state)=> state)
  return (
    <div className='flex justify-center items-center p-2'>
      <button onClick={()=> handleAddToCart(product)} className='py-2 px-12 bg-green-800 text-white rounded-sm'>{title}</button>
    </div>
  )
}
