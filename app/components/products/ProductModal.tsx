import { IProducts } from '@/app/interface/products'
import React, { useState } from 'react'


interface IProductMadalProps {
    product: IProducts;
    products: IProducts[];
    onClose:  () => void;

}




const ProductModal = ({ product, products, onClose }: IProductMadalProps ) => {

    const [currentIndex, setCurrentIndex] = useState(
        products.findIndex((p) => p.id === product.id)
    )

    const handleNext = () => {
        const nextIndex = (currentIndex + 1 ) % products.length;
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
                  <div>
                      <h2 className="text-2xl font-bold">{currentProduct.name}</h2>
                      {/* <p className="text-gray-600 mt-2">{currentProduct.description}</p> */}
                      <p className="text-xl font-semibold text-red-500 mt-4">
                          S/ {currentProduct.price}
                      </p>
                  </div>
                  <button
                      onClick={onClose}
                      className="text-red-500 font-semibold mt-4 self-start"
                  >
                      Cerrar
                  </button>
              </div>
          </div>

          {/* Flechas de navegación */}
          <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl"
              onClick={handlePrev}
          >
              ⬅
          </button>
          <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl"
              onClick={handleNext}
          >
              ➡
          </button>
      </div>
  )
}

export default ProductModal



