import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaAirFreshener } from "react-icons/fa";
import { SiCodefresh } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { MdDeliveryDining } from "react-icons/md";

export default function BottomNav() {
  return (
    <div className='bg-white shadow-xl py-4 flex justify-between fixed bottom-0 left-0 right-0 text-lg px-4 text-gray-500'>
      <p className='hover:bg-green-500 hover:text-white hover:h-[50px] hover:w-[50px] hover:rounded-full flex flex-col items-center justify-center text-lg'>
      <FaHome/>
      <a href="/Home" className='text-sm'>Home</a>
      </p>
      <p className='hover:bg-green-500 hover:text-white hover:h-[50px] hover:w-[50px] hover:rounded-full flex flex-col items-center justify-center '>
      <FaAirFreshener/>
      <a href="#" className='text-sm'>Fresh</a>
      </p>
      <p className='hover:bg-green-500 hover:text-white hover:h-[50px] hover:w-[50px] hover:rounded-full flex flex-col items-center justify-center '>
      <SiCodefresh/>
      </p>
      <p className='hover:bg-green-500 hover:text-white hover:h-[50px] hover:w-[50px] hover:rounded-full flex flex-col items-center justify-center '>
      <MdDeliveryDining/>
      <a href="#" className='text-sm'>Rental</a>
      </p>
      <p className='hover:bg-green-500 hover:text-white hover:h-[50px] hover:w-[50px] hover:rounded-full flex flex-col items-center justify-center'>
      <CgProfile/>
      <a href="#" className='text-sm'>Profile</a>
      </p>
    </div>
  )
}
