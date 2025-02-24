"use client"

import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import Navs from './Navs'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const ToggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])


  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white transition-colors duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-white"
        } `} // Altura fija de 64px (4rem)
    >
      <div className='max-w-[1320px] md:justify-between mx-auto sm:items-center md:flex sm:px-4 sm:py-3'>
        <Logo isOpen={isOpen} ToggleNavbar={ToggleNavbar} />
        <Navs isOpen={isOpen} ToggleNavbar={ToggleNavbar} />
      </div>
    </header>
  )
}

export default Navbar
