import Image from 'next/image'
import React from 'react'
import { CiBellOn } from "react-icons/ci";
export default function Navbar() {
  return (
    <div>
      <div className="flex flex-col">
        <Image src="/IMG_2872.jpg" alt=""  width={100} height={100}/>
        <p text-sm>Welcome</p>
        <p text-sm>Mr. Ramesh</p>
      </div>
      <div>
        <CiBellOn/>
      </div>

    </div>
  )
}
