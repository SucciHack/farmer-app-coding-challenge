import React from 'react'
import CardCategory from './CardCategory'
import { fetchCategory } from '@/Actions/Categoryfetch'

export default async function Category() {
    const categoryData = await fetchCategory()
  console.log(categoryData)
  return (
    <div>
        {
            categoryData?.map((item)=> {
                return(<CardCategory key={item.id} categoryProduct = {item}/>)
            })
        }
    </div>
  )
}

