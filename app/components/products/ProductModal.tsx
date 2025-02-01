/* eslint-disable @next/next/no-img-element */
import { IProducts } from '@/app/interface/products'
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import React, { useState } from 'react'
import { formatPrice } from '../../../lib/formatPrice';
import { msjWhatsapp } from '@/app/config/messageWsp';


interface IProductMadalProps {
    product: IProducts;
    products: IProducts[];
    onClose: () => void;

}



const ProductModal = ({ product, products, onClose }: IProductMadalProps) => {

    const [currentIndex, setCurrentIndex] = useState(
        products.findIndex((p) => p.id === product.id)
    )

    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % products.length;
        setCurrentIndex(nextIndex)
    }

    const handlePrev = () => {
        const prevIndex = (currentIndex - 1) % products.length;
        setCurrentIndex(prevIndex)
    }


    const currentProduct = products[currentIndex]


    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full flex">
                {/* Imagen del producto */}
                <div className="w-1/2 p-4">
                    <img
                        src={currentProduct.image} // Cambia "image" por la propiedad que tengas en tu JSON
                        alt={currentProduct.name}
                        className="w-full h-auto rounded-lg"
                    />
                </div>

                {/* Información del producto */}
                <div className="w-1/2 p-6 flex flex-col justify-between">
                    <div className='relative'>
                        <h2 className="text-2xl mb-4 font-bold">{currentProduct.name}</h2>
                        <button
                            onClick={onClose}
                            className="absolute top-0 right-0 text-red-500 font-semibold hover:scale-110 active:scale-95 transition-transform duration-200 ease-in-out hover:bg-red-100 p-1 rounded-full"
                        >
                            <X />
                        </button>
                        {/* <p className="text-gray-600 mt-2">{currentProduct.description}</p> */}
                        <p>{currentProduct.description}</p>
                        <div className='flex gap-1 mt-3'>
                            <p className="font-semibold mb-2">Precio:</p>
                            <p>{formatPrice(currentProduct.price)}</p>
                        </div>
                    </div>
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

            {/* Flechas de navegación */}
            <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl"
                onClick={handlePrev}
            >
                <ArrowLeft size={30} color={'#FF9900'} />
            </button>
            <button

                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl"
                onClick={handleNext}
            >
                <ArrowRight size={30} color={'#FF9900'} />
            </button>
        </div>
    )
}

export default ProductModal



