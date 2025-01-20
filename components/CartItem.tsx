'use client'
import { useCartStore } from '@/store/store'
import Image from 'next/image'
import React from 'react'
import { RiDeleteBin5Line } from 'react-icons/ri'

export default function CartItem() {
  const {items,handleRemove} = useCartStore((state)=> state)
  return (
    <div className='px-2'>
      {
        items.map((item)=> {
          return(
    <div key={item.id} className='bg-white shadow-lg p-2 mt-2 mb-2'>
            <div className="flex gap-3 justify-between">
                <Image src={item.image} alt={item.title} width={300} height={300} className='w-[200px] h-[100px] object-contain'/>
                <p className='text-sm flex flex-col'>{item.title}<span className='mt-2 font-bold'>sold by Samuel</span></p>
            </div>
            <div className='flex justify-between px-3 items-center'>
                <div>
                    <p className='text-sm mt-2'>Quantity:{item.quantity}</p>
                    <div className="flex items-center bg-white">
                        <p className='border-[1px] border-gray-400 py-1 px-3'>-</p>
                        <p className='border-[1px] border-gray-400 py-1 px-3'>1</p>
                        <p className='border-[1px] border-gray-400 py-1 px-3'>+</p>
                    </div>
                </div>
                <p className='font-bold flex flex-col'>Price:${item.price} <button onClick={()=> handleRemove(item.id)} className='font-normal border-[1px] border-red-500 py-1 px-6 flex justify-between items-center gap-3 text-red-500'>Remove Item <span className='text-red-500 text-2xl'><RiDeleteBin5Line /></span></button></p>
            </div>
        </div>
          )
        })
      }
    </div>
  )
}
