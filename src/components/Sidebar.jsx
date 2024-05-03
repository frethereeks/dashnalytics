import React from 'react'
import { Link } from 'react-router-dom'
import { FaChartPie } from 'react-icons/fa6'
import { sidebarLinks } from '../data/sidebarLinks'

export default function Sidebar() {
  return (
    <nav className="min-h-screen relative shad z-40 w-[15rem] overflow-hidden">
      <div className="bg-white flex flex-col justify-betweeen gap-2 fixed left-0 top-0 min-h-screen w-[15rem] px-4 py-10">
        <a href={'/'} className='flex items-center gap-2'>
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-600 to-main flex justify-center items-center text-xl text-white">
            <FaChartPie />
          </div>
          <h1 className="text-lg md:text-xl text-main font-bold">Dashnalytics</h1>
        </a>
        <div className="flex flex-col">
          {
            sidebarLinks.map(el => (
              <a key={el.id} href={el.link} className='flex gap-2 items-center rounded-md py-2 px-4 text-dark/80 bg-transparent hover:bg-primary hover:text-main'><span className="text-lg md:text-xl w-8 flex-shrink-0">{el.icon}</span>{el.title}</a>
            ))
          }
        </div>
      </div>
    </nav>
    
  )
}
