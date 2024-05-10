import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'


export default function App() {

  return (
    <main className='bg-main flex'>
      <Sidebar />
      <div className="flex-1 flex flex-col gap-4 relative">
        <Header />
        <div className="flex flex-col gap-4 md:flex-row my-5 mx-4 py-5">
          <div className="flex-1 shadow-default md:flex-3 bg-white shad rounded-md p-4 grid sm:grid-cols-2 md:grid-cols-3 gap-4"></div>
          <div className="flex-1 shadow-default bg-white shad p-4"></div>
        </div>
        <Footer />
      </div>
    </main>
  )
}
