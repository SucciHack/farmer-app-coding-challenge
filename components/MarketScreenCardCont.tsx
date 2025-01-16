import React from 'react'
import MarketScreenCard from './MarketScreenCard'
import { fetchProducts } from '@/Actions/Categoryfetch'

export default async function MarketScreenCardCont() {
  const productsData = await fetchProducts()
  return (
    <div className='mt-2 p-2 mb-20 flex flex-col gap-2'>
      {
        productsData?.map((product)=> {
          return(<MarketScreenCard key={product.id} marketProductsData = {product}/>)
        })
      }
    </div>
  )
}
