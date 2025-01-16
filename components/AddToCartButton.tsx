import React from 'react'

export default function AddToCartButton({title}:{title:string}) {
  return (
    <div className='flex justify-center items-center p-2'>
      <button className='py-2 px-12 bg-green-800 text-white rounded-md'>{title}</button>
    </div>
  )
}
