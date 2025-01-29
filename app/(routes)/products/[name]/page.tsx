/* eslint-disable @next/next/no-img-element */
"use client"
import { useState } from "react";



const ProductPage = () => {
  const [mainImage, setMainImage] = useState(
    "https://www.jardinerosenlima.com/wp-content/uploads/2024/06/Maceta-de-fibra-de-vidrio-conica-1%C3%9740-v2.png"
  );

  const changeImage = (src: string) => {
    setMainImage(src);
  };




  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          {/* Product Images */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <img
              src={mainImage}
              alt="Product"
              className="w-full h-auto rounded-lg shadow-md mb-4"
            />
            <div className="flex gap-4 py-4 justify-center overflow-x-auto">
              <img
                src="https://www.jardinerosenlima.com/wp-content/uploads/2024/06/Maceta-de-fibra-de-vidrio-conica-1%C3%9740-v2.png"
                alt="Thumbnail 1"
                className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                onClick={() =>
                  changeImage(
                    "https://www.jardinerosenlima.com/wp-content/uploads/2024/06/Maceta-de-fibra-de-vidrio-conica-1%C3%9740-v2.png"
                  )
                }
              />
              <img
                src="https://www.jardinerosenlima.com/wp-content/uploads/2024/06/maceta-de-fibra-de-vidrio-conica4.png"
                alt="Thumbnail 2"
                className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                onClick={() =>
                  changeImage(
                    "https://www.jardinerosenlima.com/wp-content/uploads/2024/06/maceta-de-fibra-de-vidrio-conica4.png"
                  )
                }
              />
              <img
                src="https://www.jardinerosenlima.com/wp-content/uploads/2024/06/maceta-de-fibra-de-vidrio-conica7.png"
                alt="Thumbnail 3"
                className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                onClick={() =>
                  changeImage(
                    "https://www.jardinerosenlima.com/wp-content/uploads/2024/06/maceta-de-fibra-de-vidrio-conica7.png"
                  )
                }
              />
              <img
                src="https://www.jardinerosenlima.com/wp-content/uploads/2024/06/maceta-de-fibra-de-vidrio-conica8.png"
                alt="Thumbnail 4"
                className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                onClick={() =>
                  changeImage(
                    "https://www.jardinerosenlima.com/wp-content/uploads/2024/06/maceta-de-fibra-de-vidrio-conica8.png"
                  )
                }
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-3xl font-bold mb-2">Maceta de fibra de vidrio cónica 1×40</h2>
            <p className="text-gray-600 mb-4">PLANTA</p>
            <div className="mb-1">  
              <span className="text-1xl font-bold mr-2">Boca:</span>
              <span className="text-gray-500 ">40 cm aproximado</span>
            </div>
            <div className="mb-1">
              <span className="text-1xl font-bold mr-2">Altura:</span>
              <span className="text-gray-500 ">1 m aproximado</span>
            </div>
            <div className="mb-1">
              <span className="text-1xl font-bold mr-2">Color:</span>
              <span className="text-gray-500 ">blanco, negro, gris y otros</span>
            </div>
            <div className="mb-1">
              <span className="text-1xl font-bold mr-2">Delivery:</span>
              <span className="text-gray-500 ">no incluye</span>
            </div>
            <div className="flex items-center mb-4">
              {/* Star Rating */}
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
              <span className="ml-2 text-gray-600">4.5 (120 reviews)</span>
            </div>
            <p className="text-gray-700 mb-6">
              Maceta decorativa modelo cónica de fibra de vidrio de 1×40 para interior y exterior
            </p>
            <div className="mb-6 flex gap-1">
              <p className="font-semibold mb-2">Precio:</p> 
              <p>S/259.00</p>
            {/*   <div className="flex space-x-2">
                <button className="w-8 h-8 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"></button>
                <button className="w-8 h-8 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"></button>
                <button className="w-8 h-8 bg-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"></button>
              </div> */}
            </div>
          
            <button className="bg-[#33CC66] text-white py-3 px-6 rounded-lg shadow-lg hover:bg-[#33cc66ba] transition duration-300 w-full">
              Comprar por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
