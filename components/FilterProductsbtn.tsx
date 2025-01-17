import React from 'react'

export default function FilterProductsbtn({title}:{title:string}) {
  return (
    <div>
      <div className='flex justify-center items-center p-2'>
      <button className='py-1 px-6 text-sm border-[1.5px] border-green-800 text-black rounded-md'>{title}</button>
    </div>
    </div>
  )
}
