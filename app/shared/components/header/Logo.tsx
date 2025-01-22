"use client"

import { Menu, X } from 'lucide-react'
import React from 'react'



const Logo = ({ isOpen, ToggleNavbar}: {isOpen: boolean, ToggleNavbar: () => void }) => {


  return (
    <div className='flex items-center w-full justify-between px-4 py-3 sm:p-0'>
      <img src="https://www.jardinerosenlima.com/wp-content/uploads/2021/01/logo2.png" alt="logo" />
      <div className='md:hidden'>
        <button className='p-2 ' onClick={ToggleNavbar}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
    </div>
  )
}

export default Logo
