import React from 'react'

export default function Search() {
  return (
    <div>
        <div className="flex items-center relative w-[90%] mx-auto mt-4">
        <svg className="absolute left-4 fill-[#9e9ea7] w-4 h-4" aria-hidden="true" viewBox="0 0 24 24">
            <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
        </svg>
        <input placeholder="Search" type="search" className="w-full h-[50px] pl-[2.5rem] pr-4 text-[#0d0c22] bg-[#f3f3f4] border-2 border-transparent rounded-lg outline-none focus:border-[#ea4c89]/40 focus:bg-white focus:ring-4 focus:ring-[#ea4c89]/10 placeholder:text-[#9e9ea7] transition-all duration-300 ease-in-out shadow-sm"/>
        </div>

    </div>
  )
}
