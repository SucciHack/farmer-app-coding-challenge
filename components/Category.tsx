import React from 'react'
import { fetchCategory } from '@/Actions/Categoryfetch'
import Link from 'next/link'
import CardCategory from './CardCategory'

export default async function Category() {
    const categoryData = await fetchCategory()
  return (
    <>
    <div className="flex justify-between font-bold px-2 text-lg">
            <p>Popular</p>
            <Link href="/MarketScreen" className='text-blue-500'>See All</Link>
        </div>
    <div  className='grid grid-cols-2 gap-2 mt-2 p-2 '>
        {
            categoryData?.map((item)=> {
                return(<CardCategory key={item.id} categoryProduct = {item}/>)
            })
        }
    </div>
  </>
  )
}

