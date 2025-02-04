'use client'
import { useCartStore } from '@/store/store'
import Image from 'next/image'
import React from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { RiDeleteBin5Line } from 'react-icons/ri'

export default function CartItem() {
  const {items,handleRemove,updateQty} = useCartStore((state)=> state)

  const totalExpression = items.map(item => `(${item.price} * ${item.quantity})`).join(' + ');
  const total = eval(totalExpression);

  return (
    <div>
      <p className='py-4 bg-white flex justify-between items-center px-3 font-bold'>Sub total items ({items.length} items) <span>Total: $ {total?? 0}</span></p>
      <button className='m-2 px-6 py-2 bg-transparent border-[1px] border-green-800 flex justify-between items-center gap-2'><FaArrowLeftLong /> Continue Shopping</button>
      {
        items.map((item)=> {
          const newPrice = item.quantity * item.price
          return(
    <div key={item.id} className='bg-white shadow-lg p-2 mt-2 mb-2'>
            <div className="flex gap-3 justify-between px-2">
                <Image src={item.image} alt={item.title} width={300} height={300} className='w-[200px] h-[100px] object-contain'/>
                <p className='text-sm flex flex-col'>{item.title}<span className='mt-2 font-bold'>sold by Samuel</span></p>
            </div>
            <div className='flex justify-between px-3 items-center'>
                <div>
                    <p className='text-sm mt-2'>Quantity:{item.quantity}</p>
                    <div className="flex items-center bg-white">
                        <button onClick={()=> updateQty("decrement",item.id)} className='border-[1px] border-gray-400 py-1 px-3'>-</button>
                        <p className='border-[1px] border-gray-400 py-1 px-3'>{item.quantity}</p>
                        <button onClick={()=> updateQty("increment",item.id)} className='border-[1px] border-gray-400 py-1 px-3'>+</button>
                    </div>
                </div>
                <p className='font-bold flex flex-col'>Price:${newPrice} <button onClick={()=> handleRemove(item.id)} className='font-normal border-[1px] border-red-500 py-1 px-6 flex justify-between items-center gap-3 text-red-500'><span className='text-red-500 text-2xl'><RiDeleteBin5Line /></span>Remove Item</button></p>
            </div>
        </div>
          )
        })
      }
    </div>
  )
}
