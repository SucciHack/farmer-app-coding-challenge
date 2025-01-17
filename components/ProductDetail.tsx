
import { ProductsProps } from '@/Types/types'
import Image from 'next/image'
import React from 'react'
import { FaAirFreshener, FaHome, FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa'
import AddToCartButton from './AddToCartButton'
import { CgProfile } from 'react-icons/cg'
import { MdDeliveryDining } from 'react-icons/md'
import { SiCodefresh } from 'react-icons/si'

export default async function ProductDetail({product}:{product:ProductsProps}) {

  return (
    <div className='px-2 mt-4 text-black mb-28'>
      <div className='relative'>
        <Image src={product?.images[0]} alt={product?.title} width={500} height={500} className=''/>
      </div>
      <div className='flex justify-between items-center p-2'>
        <p className='text-2xl font-bold'>{product.title}</p>
        <AddToCartButton title='Add Cart'/>
      </div>
      <div className='p-2 flex justify-between'>
                  <div className="flex gap-1 items-center text-lg text-yellow-600">
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStarHalfAlt/>
                  <FaRegStar/>
                  <p>Price: ${product.price}</p>
                  </div>
                  <p>Qty:{product.quantity}</p>
              </div>
              <p>{product.description}</p>
              <div className='mt-2'>
                <p className='font-bold'>Highlights</p>
                <div className="flex justify-between mt-4">
                <p className='bg-green-800 text-white h-[50px] w-[50px] rounded-full  flex flex-col items-center justify-center text-lg'>
                      <FaHome/>
                      <a href="/Home" className='text-sm'>Home</a>
                      </p>
                      <p className='bg-green-800 text-white h-[50px] w-[50px] rounded-full  flex flex-col items-center justify-center '>
                      <FaAirFreshener/>
                      <a href="#" className='text-sm'>Fresh</a>
                      </p>
                      <p className='bg-green-800 text-white h-[50px] w-[50px] rounded-full  flex flex-col items-center justify-center '>
                      <SiCodefresh/>
                      </p>
                      <p className='bg-green-800 text-white h-[50px] w-[50px] rounded-full  flex flex-col items-center justify-center '>
                      <MdDeliveryDining/>
                      <a href="#" className='text-sm'>Rental</a>
                      </p>
                      <p className='bg-green-800 text-white h-[50px] w-[50px] rounded-full  flex flex-col items-center justify-center'>
                      <CgProfile/>
                      <a href="#" className='text-sm'>Profile</a>
                      </p>
                </div>
              </div>
    </div>
  )
}
