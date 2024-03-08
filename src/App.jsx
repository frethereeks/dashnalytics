import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'

export default function App() {
  return (
    <div>
      <header className="px-4 bg-primary relative">
        <div className="container mx-auto py-3 flex justify-between items-center">
          <div className="flex flex-col text-gray-700">
            <h2 className="font-semibold capitalize">Elder John Doe</h2>
            <p className="text-xs sm:text-sm opacity-70">Here you can manage your online store</p>
          </div>
          <form action="" className="bg-white py-2 px-4 drop-shadow-xl rounded-md flex items-center gap-2 text-slate-600">
            <IoSearchOutline />
            <input type="search" placeholder="Search..." id="" className="flex-1 text-xs sm:text-sm outline-none p-2" />
          </form>
          <div className="bg-white p-4 rounded-md"></div>
        </div>
      </header>
    </div>
  )
}
