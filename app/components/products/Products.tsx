/* eslint-disable @next/next/no-img-element */
import { formatPrice } from '@/lib/formatPrice';
import { IProducts } from '../../interface/products';


interface ProductsProps {
    product: IProducts;
    onClick: () => void;
}


export const Products = ({ product, onClick }: ProductsProps) => {


    const msjWhatsapp = "https://api.whatsapp.com/send?phone=+51992693050&text=🌹🌿☘ *¡Hola! * Quiero comprar este producto * "

    return (
        <article
            className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
            key={product.id}
            aria-labelledby={`product-title-${product.id}`}
        >
            {/* <a
                href="asdadsasda"
                className="block"
                onClick={e => {e.preventDefault(); onClick()} }
            > */}
            <img
                src={product.image || "https://via.placeholder.com/300"}
                alt={`Imagen de ${product.name}`}
                className="h-80 w-72 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3">
                <a
                    href="asdadsasda"
                    className="block"
                    onClick={e => { e.preventDefault(); onClick() }}
                >
                    <h2
                        id={`product-title-${product.id}`}
                        className="text-lg font-bold text-black truncate capitalize"
                    >
                        {product.name}
                    </h2>
                </a>
                <span className="text-gray-400 mr-3 uppercase text-xs">
                    {product.category}
                </span>
                <div className="flex items-center">
                    <p className="text-lg font-semibold text-black my-3">
                        {formatPrice(product.price)}
                    </p>
                    <button
                        className="ml-auto"
                        aria-label={`Añadir ${product.name} al carrito`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-bag-plus"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                            />
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg>
                    </button>
                </div>
                <div>
                    <a
                        href={msjWhatsapp + product.name + "*"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#33CC66] text-white py-3 px-6 rounded-lg shadow-lg hover:bg-[#33cc66ba] transition duration-300 w-full flex items-center justify-center gap-2 no-underline"
                    >
                        <img src="/wassap.svg" alt="WhatsApp" />
                        Comprar
                    </a> 
                </div>
            </div>
            {/* </a> */}
        </article>
    )
}

export default Products
