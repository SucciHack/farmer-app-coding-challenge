'use client'
import { useCartStore } from '@/store/store'
import { ProductsProps } from '@/Types/types'
import React from 'react'
import { RiDeleteBin5Line } from 'react-icons/ri'

export default function AddToCartButton({title,product}:{title:string, product:ProductsProps}) { 
  const {handleAddToCart,items,handleRemove} = useCartStore((state)=> state)
  const newItem = items.find((item)=> item.id === product.id)
  return (
    <div className='flex justify-center items-center p-2'>
      {
        newItem ? (
          <button onClick={()=> handleRemove(newItem.id)} className='font-normal border-[1px] border-red-500 py-1 px-6 flex justify-between items-center gap-3 text-red-500'><span className='text-red-500 text-2xl'><RiDeleteBin5Line /></span>Remove Item</button>
        ):(
          <button onClick={()=> handleAddToCart(product)} className='py-2 px-12 bg-green-800 text-white rounded-sm'>{title}</button>
        )
      }
    </div>
  )
}
