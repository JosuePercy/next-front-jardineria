import Link from 'next/link';

interface NavLinkProps {
    text: string;
    href: string;
}

const links = [
    { name: "Inicio", href: "" },
    { name: "Servicios", href: "#services" },
    { name: "Productos", href: "#products" },
    { name: "Nosotros", href: "#about" },
    { name: "Contactar", href: "#contact" },
];

const NavLink = ({ href, text }: NavLinkProps) => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        if (href === "") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            const elem = document.querySelector(href);
            elem?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Link
            href={href}
            onClick={handleScroll}
            className="relative font-semibold text-gray-800 px-3 py-2 group"
        >
            <span className="transition-all duration-300 ease-in-out">{text}</span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-green-500 to-amber-500 scale-x-0 group-hover:scale-x-100 transition-all duration-500 ease-in-out"></span>
        </Link>
    );
};

const Navs = ({ isOpen }: { isOpen: boolean, ToggleNavbar: () => void }) => {
    return (
        <nav className={`md:flex ${isOpen ? "block" : "hidden"} ` }>
            <div className="flex flex-col md:flex-row md:space-x-6 w-full">
                {links.map((link) => (
                    <NavLink key={link.name} href={link.href} text={link.name} />
                ))}
            </div>
        </nav>
    );
};

export default Navs;