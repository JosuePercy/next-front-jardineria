/* eslint-disable @next/next/no-img-element */
"use client"

import { Menu, X } from 'lucide-react'
import React from 'react'



const Logo = ({ isOpen, ToggleNavbar}: {isOpen: boolean, ToggleNavbar: () => void }) => {


  return (
    <div className='flex items-center w-full justify-between px-4 py-3 sm:p-0'>
      <a href={"/"}>
        <img className='w-[200px]' src="/logo.png" alt="logo" />
      </a>
      <div className='md:hidden'>
        <button className='p-2 ' onClick={ToggleNavbar}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
    </div>
  )
}

export default Logo
