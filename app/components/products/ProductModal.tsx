/* eslint-disable @next/next/no-img-element */
import { IProducts } from '@/app/interface/products';
import { formatPrice } from '../../../lib/formatPrice';
import { msjWhatsapp } from '@/app/config/messageWsp';
import { DialogHeader } from '@/components/ui/dialog';
import { DialogTitle } from '@radix-ui/react-dialog';

interface IProductModalProps {
  product: IProducts;
  handleCloseModal: () => void;
}

const ProductModal = ({ product, handleCloseModal }: IProductModalProps) => {
  if (!product) return null;

  return (
    
    <div className=" w-full max-w-4xl overflow-y-auto inset-0 z-[999] bg-white rounded-xl  p-4 md:p-6 relative flex flex-col gap-6 sm:flex-row">
      <div className="w-full sm:w-1/2 flex w- justify-center items-start">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-xl w-[200px] sm:h-[70%] m-auto md:h-full sm:w-full h-full object-cover shadow-md"
        />
      </div>

      <div className="w-full flex sm:w-1/2  flex-col relative ">
        <DialogHeader>
          <DialogTitle className="sm:text-1xl md:text-[1.3rem] text-[1rem] font-bold mb-2">
            {product.name}
          </DialogTitle>
        </DialogHeader>

        <p className="text-gray-700 mb-4 text-sm leading-relaxed">
          {product.description}
        </p>

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

        <div className="mb-6 flex gap-2 items-center text-sm">
          <span className="font-semibold">Precio:</span>
          <span>{formatPrice(product.price)}</span>
        </div>

        <a
          href={msjWhatsapp + product.name + '*'}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full text-1xl text-center flex text-[0.9rem] items-center justify-center gap-2 shadow-md transition"
        >
          <img src="/wassap.svg" alt="WhatsApp" className="w-5 h-5" />
          Comprar por WhatsApp
        </a>
          <button
            onClick={handleCloseModal}
            className="mt-4 text-gray-400 mx-auto w-fit hover:text-slate-500 text-sm"
          >
            Cerrar
          </button>
      </div>
    </div>
  );
};

export default ProductModal;