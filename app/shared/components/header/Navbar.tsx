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
      className=
      {`sticky top-0 z-50 bg-white transition-colors duration-300 ${isScrolled ? "bg-whit shadow-md" : "bg-white"
        }`}
    >
      <div className='max-w-[1320] md:justify-between m-auto sm:items-center md:flex  sm:px-4 sm:py-3 '>
        <Logo isOpen={isOpen} ToggleNavbar={ToggleNavbar} />
        <Navs isOpen={isOpen} ToggleNavbar={ToggleNavbar} />
      </div>
    </header>
  )
}

export default Navbar
