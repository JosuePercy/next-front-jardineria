/* "use client" */

/* import { Menu, X } from 'lucide-react' */
import Link from 'next/link'
/* import { useState } from 'react' */

const NavLinks = () => {

    const links = [
        { name: "Inicio", href: "" },
        { name: "Tienda", href: "" },
        { name: "Servicios", href: "" },
        { name: "Contactar", href: "" },
        { name: "Blog", href: "" }
    ];


    return (
        <div className="flex flex-col md:flex-row md:space-x-6 w-full"> {/* Alineación en columna en pantallas pequeñas y en fila en pantallas grandes */}

            {
                links.map(link => (
                    <Link key={link.name}
                        href={""}
                        className="relative font-semibold text-gray-800 px-3 py-2 bg-white- group"
                    >
                        <span className="transition-all duration-300 ease-in-out ">
                            {link.name}
                        </span>
                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-green-500 to-amber-500 
                         scale-x-0 group-hover:scale-x-100 transition-all duration-500 ease-in-out"></span>
                    </Link>
                ))
            }
        </div>
    )
}

const Navs = ({ isOpen }: { isOpen: boolean, ToggleNavbar: () => void }) => {

    return (
        <>
            <nav className={` md:flex ${isOpen ? "block" : "hidden"}`}>
                <NavLinks />
            </nav> 
        </>
    )
}

export default Navs
