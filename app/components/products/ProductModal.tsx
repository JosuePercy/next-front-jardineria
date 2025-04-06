/* eslint-disable @next/next/no-img-element */
import { IProducts } from '@/app/interface/products'
import React from 'react'
import { formatPrice } from '../../../lib/formatPrice';
import { msjWhatsapp } from '@/app/config/messageWsp';
import { DialogHeader } from '@/components/ui/dialog';
import { DialogClose, DialogTitle } from '@radix-ui/react-dialog';
import { X } from 'lucide-react';


interface IProductMadalProps {
  product: IProducts;
  handleCloseModal: () => void;
}

const ProductModal = ({ product, handleCloseModal }: IProductMadalProps) => {
  if (!product) return null;
  
  return (
      <div className='max-h-[90hv] overflow-y-auto max-w-[95vw]'>
        <div className='flex flex-col md:flex-row'>
          <img src={product.image} alt={product.name} className=" md:w-1/2 m-auto sm:w-1/3  w-48 h-48 md:h-auto object-cover rounded-md mb-4 md:mb-0" />
          <div className="md:ml-6 flex flex-col h-full w-full md:w-1/2">
            <DialogHeader className='flex flex-row justify-between items-center'>
              <DialogTitle style={{ fontSize: 19 }} about='' className="font-semibold md:text-center">{product.name}</DialogTitle>
              <DialogClose className='absolute top-4 right-4' asChild>
                <button onClick={handleCloseModal} className="top-2 right-2 text-lg"><X /></button>
              </DialogClose>
            </DialogHeader>
            <p className="text-gray-700 text-sm mt-3 mb-2">{product.description}</p>
          {product.medidas && product.medidas.length > 0 && (
            <div className="mt-2 mb-4">
              <p className="font-semibold">Medidas disponibles:</p>
              <ul className="list-disc list-inside text-sm text-gray-700">
                {product.medidas.map((medida, index) => (
                  <li key={index}>{medida}</li>
                ))}
              </ul>
            </div>
          )}
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
        </div>
      </div>
  )
}

export default ProductModal



