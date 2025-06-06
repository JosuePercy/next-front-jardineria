'use client';
/* eslint-disable @next/next/no-img-element */
import { formatPrice } from '@/lib/formatPrice';
import { IProducts } from '../../interface/products';

interface ProductsProps {
    product: IProducts;
    onClick: () => void;
}

export const Products = ({ product, onClick }: ProductsProps) => {
    return (
        <article
            className="w-full bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
            aria-labelledby={`product-title-${product.id}`}
            role="article"
        >
            <img
                src={product.image || "https://via.placeholder.com/300"}
                alt={`Imagen de ${product.name}`}
                className=" h-60 sm:h-80 w-full object-cover rounded-t-xl"
            />
            <div className="px-[0.55rem] mb:px-4  py-3">
                <a
                    href="asdadsasda"
                    className="block"
                    onClick={e => { e.preventDefault(); onClick(); }}
                >
                    <h3
                        id={`product-title-${product.id}`}
                        className="font-bold text-black truncate text-sm capitalize"
                    >
                        {product.name}
                    </h3>
                </a>
                <span className="text-gray-400 mr-3 uppercase text-xs">
                    {product.category}
                </span>
                <div className="flex items-center">
                    <p
                        className="text-lg font-semibold text-black my-3"
                        aria-label={`Precio del producto: ${formatPrice(product.price)}`}
                    >
                        {formatPrice(product.price)}
                    </p>
                    <button
                        className="ml-auto"
                        aria-label={`Añadir ${product.name} al carrito`}
                        title={`Añadir ${product.name} al carrito`}
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
                        href={`/api/whatsapp-link?product=${encodeURIComponent(product.name)}`}
                        target="_blank"
                        aria-label={`Comprar ${product.name} por WhatsApp`}
                        rel="noopener noreferrer"
                        className="bg-[#99CC66] hover:bg-[#a7e16d] text-white py-3 px-6 rounded-lg shadow-lg transition duration-300 w-full flex items-center justify-center gap-2 no-underline"
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
