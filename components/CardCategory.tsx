import { categoryProps } from '@/Types/types'
import Image from 'next/image'
import React from 'react'

export default function CardCategory({categoryProduct}:{categoryProduct:categoryProps}) {
  return (
    <div>
      <div>
      <div className='mt-2 p-2 flex flex-col gap-2'>
        
            <div>
                <div className=' h-[100px] p-2 flex items-center justify-center w-[80%] mx-auto rounded-lg'>
                <Image src={categoryProduct?.image??"/farmer.png"} width={500} height={500} alt={categoryProduct.title} className='h-full w-full object-cover'/>
                </div>
                <p className='text-sm text-center'>{categoryProduct.title}</p>
            </div>
    </div>
    </div>
    </div>
  )
}
