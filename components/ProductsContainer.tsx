import React from 'react'
import Link from 'next/link'
import ProductCard from './ProductCard'
import { fetchProducts } from '@/Actions/Categoryfetch'

export default async function ProductsContainer() {
  const productsData = await fetchProducts()
  return (
    <>
        <div className="flex justify-between font-bold px-2 mt-4 text-lg">
            <p>Popular</p>
            <Link href="/MarketScreen" className='text-blue-500'>See All</Link>
        </div>
        <div className='grid grid-cols-2 gap-2 p-2 mb-20'>
          {
                      productsData?.map((item)=> {
                          return(<ProductCard key={item.id} productsData = {item}/>)
                      })
                  }
        </div>
    </>
  )
}
