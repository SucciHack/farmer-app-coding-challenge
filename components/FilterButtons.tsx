import React from 'react'
import AddToCartButton from './AddToCartButton'

export default function FilterButtons() {
  return (
    <div className='flex justify-between overflow-scroll text-sm p-2 items-center'>
      <AddToCartButton title = "All"/>
      <AddToCartButton title = "Mangoes"/>
      <AddToCartButton title = "Bananas"/>
      <AddToCartButton title = "Melons"/>
    </div>
  )
}
