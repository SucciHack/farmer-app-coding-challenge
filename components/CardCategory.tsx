import { categoryProps } from '@/Types/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CardCategory({categoryProduct}:{categoryProduct:categoryProps}) {
  return (
    <div>
      <div>
      <div className='mt-2 p-2 flex flex-col gap-2'>
        <div className="flex justify-between font-bold px-2 text-lg">
            <p>Popular</p>
            <Link href="/MarketScreen" className='text-blue-500'>See All</Link>
        </div>
        <div className='grid grid-cols-2 gap-2 mt-2 p-2 '>
            <div>
                <div className='border-2 border-green-800 p-2 flex items-center justify-center w-[80%] mx-auto rounded-lg'>
                <Image
                    src={categoryProduct?.image??""}
                    alt={categoryProduct.title}
                    width={300}
                    height={300}
                    className='object-contain h-[70px] w-[70px]'
                />
                </div>
                <p className='text-sm text-center'>{categoryProduct.title}</p>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}
