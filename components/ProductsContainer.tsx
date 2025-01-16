import React from 'react'
import ProductCard from './ProductCard'
import Link from 'next/link'

export default function ProductsContainer() {
  return (
    <>
        <div className="flex justify-between font-bold px-2 mt-4 text-lg">
            <p>Popular</p>
            <Link href="/MarketScreen" className='text-blue-500'>See All</Link>
        </div>
        <div className='grid grid-cols-2 gap-2 mt-2 p-2 mb-20'>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        </div>
    </>
  )
}
