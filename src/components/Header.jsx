import React, { useState } from 'react'
import { IoClose, IoSearchOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { LuBellRing, LuSearch } from "react-icons/lu";
import { wreen_busylady } from '../assets/images';

export default function Header() {
    const [showSearch, setShowSearch] = useState(false)
  return (
    <header className="px-4 bg-primary relative">
        <div className="container mx-auto py-3 px-4 flex justify-between items-center">
          <div className="flex flex-col text-gray-700">
            <h2 className="font-semibold capitalize">Elder John Doe</h2>
            <p className="text-xs sm:text-sm opacity-70">Here you can manage your online store</p>
          </div>
          <div className={`fixed lg:static bg-white lg:bg-transparent ${showSearch ? 'top-0' : '-top-[200%]'} left-0 w-full lg:max-w-2xl flex-1 z-10 p-4 shadow-default lg:shadow-none`}>
            <IoClose onClick={() => setShowSearch(prev => !prev)} className='absolute t-2 r-2 cursor-pointer  ' />
            <form action="" className="bg-white py-2 px-4 hover:drop-shadow-sm max-w-md lg:max-w-full w-full rounded-md flex items-center gap-2 text-slate-600 mx-auto border border-slate-100">
              <IoSearchOutline />
              <input type="search" placeholder="Search..." id="" className="flex-1 text-xs sm:text-sm outline-none p-2" />
            </form>
          </div>
          <div className="flex item-center justify-end gap-2 rounded-md w-max">
            <button onClick={() => setShowSearch(prev => !prev)} className='text-gray-800 text-xs p-2 rounded-md lg:hidden'><LuSearch /></button>
            <button className='text-gray-800 text-xs p-2 rounded-md'><LuBellRing /></button>
            <div className="flex justify-center items-center gap-2 text-gray-600">
              <h6 className="text-xs">Emily Duncan</h6>
              <img src={wreen_busylady} alt="" className="h-7 w-7 rounded-full cursor-pointer object-cover" />
            </div>
          </div>
        </div>
      </header>
  )
}
