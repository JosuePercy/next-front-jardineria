
import { IProducts } from '@/app/interface/products';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import React from 'react'
import Products from './Products';

interface IProductsSectionProps {
    title: string;
    products: IProducts[];
    handleOpenModal: (product: IProducts) => void;
}



const ProductSection = ({title, products, handleOpenModal}: IProductsSectionProps) => {
  return (
      <div className="w-full flex flex-col items-center">       
          {/* Contenedor principal con tamaño fijo */}
          <div className="w-full mb:px-4 px-0 ">
              <h1 className="  text-3xl font-bold  mt-10">{title}</h1>

              {/* Carrusel dentro del contenedor principal */}
              <div
                  className="w-full flex justify-center items-center gap-y-20 gap-x-14"
                  aria-label={`Lista de ${title.toLowerCase()}`}
              >
                  <Carousel className="w-full relative">
                      <CarouselContent className="-ml-4">
                          {products.map((product, index) => (
                              <CarouselItem key={index} className="flex justify-center items-center basis-1/2 my-4 md:basis-1/3 lg:basis-1/4">
                                  <Products product={product} onClick={() => handleOpenModal(product)} />
                              </CarouselItem>
                          ))}
                      </CarouselContent>
                      <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 hidden sm:flex" />
                      <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 hidden sm:flex" />
                  </Carousel>
              </div>
          </div>
      </div>
  )
}

export default ProductSection
