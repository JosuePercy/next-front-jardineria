/* eslint-disable @next/next/no-img-element */
import { IProducts } from '@/app/interface/products'
import React from 'react'
import { formatPrice } from '../../../lib/formatPrice';
import { msjWhatsapp } from '@/app/config/messageWsp';
import { DialogHeader } from '@/components/ui/dialog';
import {  DialogClose, DialogTitle } from '@radix-ui/react-dialog';
import { X } from 'lucide-react';


interface IProductMadalProps {
    product: IProducts;
    handleCloseModal: () => void;
}


const ProductModal = ({ product, handleCloseModal }: IProductMadalProps) => {


    return (
        <>
                <img src={product.image} alt={product.name} className=" md:w-1/2  sm:w-1/3  w-48 h-48 md:h-auto object-cover rounded-md mb-4 md:mb-0" />
                <div className="md:ml-6 flex flex-col h-full w-full md:w-1/2">
                  <DialogHeader className='flex flex-row justify-between items-center'>
                    <DialogTitle className="font-semibold">{product.name}</DialogTitle>
                    <DialogClose className='absolute'  asChild>
                      <button onClick={handleCloseModal} className="top-2 right-2 text-lg"><X /></button>
                    </DialogClose>
                  </DialogHeader>
                  <p className="text-gray-700 mt-3 mb-2">{product.description}</p>
                  <div className="mb-6 flex gap-1">
                    <p className="font-semibold mb-2">Precio:</p>
                    <p>{formatPrice(product.price)}</p>
                  </div>
                  <a
                    href={msjWhatsapp + product.name + "*"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#33CC66] text-white py-3 px-6 rounded-lg shadow-lg hover:bg-[#33cc66ba] transition duration-300 w-full flex items-center justify-center gap-2 no-underline mt-auto"
                  >
                    <img src="/wassap.svg" alt="WhatsApp" />
                    Comprar
                  </a>
                </div>
        </>
    )
}

export default ProductModal



