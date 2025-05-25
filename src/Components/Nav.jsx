import React from 'react'
import Home from './Home'

const Nav = () => {
  return (
    <>
     <div className="flex items-center justify-between bg-white h-28 w-full p-5 shadow-md rounded-lg">
                <img src="/logo1.webp" alt="Logo" className="h-16 w-auto" />
                <p className="text-right text-white p-3 rounded-2xl font-medium bg-blue-600 hover:bg-blue-950 cursor-pointer">
                    Contact
                </p>
            </div>
  <Home/>
  </>
  )
}

export default Nav