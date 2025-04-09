/* eslint-disable @next/next/no-img-element */
import { IProducts } from '@/app/interface/products';
import { formatPrice } from '../../../lib/formatPrice';
import { msjWhatsapp } from '@/app/config/messageWsp';
import { DialogHeader } from '@/components/ui/dialog';
import { DialogClose, DialogTitle } from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

interface IProductModalProps {
  product: IProducts;
  handleCloseModal: () => void;
}

const ProductModal = ({ product, handleCloseModal }: IProductModalProps) => {
  if (!product) return null;

  return (
    <div className="w-full max-w-4xl overflow-y-auto bg-white rounded-xl shadow-lg p-4 md:p-6 relative flex flex-col gap-6 sm:flex-row">

      {/* Imagen del producto */}
      <div className="w-full sm:w-1/2 flex justify-center items-start">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-xl w-full max-w-xs sm:max-w-sm object-cover shadow-md"
        />
      </div>

      {/* Contenido */}
      <div className="w-full sm:w-1/2 flex flex-col relative px-2 sm:px-4 md:px-6">
        {/* Botón cerrar */}
        <DialogClose asChild>
          <button
            onClick={handleCloseModal}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 transition z-10"
          >
            <X className="w-6 h-6" />
          </button>
        </DialogClose>

        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-2">
            {product.name}
          </DialogTitle>
        </DialogHeader>

        <p className="text-gray-700 mb-4 text-sm leading-relaxed">
          {product.description}
        </p>

        {/* Medidas */}
         {product.medidas && product.medidas.length > 0 && (
          <div className="mb-4">
            <p className="font-semibold text-sm">Medidas disponibles:</p>
            <ul className="list-disc list-inside text-sm text-gray-700 max-h-32 overflow-y-auto pr-2">
              {product.medidas.map((medida, index) => (
                <li key={index}>{medida}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Precio */}
        <div className="mb-6 flex gap-2 items-center text-sm">
          <span className="font-semibold">Precio:</span>
          <span>{formatPrice(product.price)}</span>
        </div>

        {/* Botón WhatsApp */}
        <a
          href={msjWhatsapp + product.name + '*'}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full text-center flex items-center justify-center gap-2 shadow-md transition"
        >
          <img src="/wassap.svg" alt="WhatsApp" className="w-5 h-5" />
          Comprar por WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ProductModal;