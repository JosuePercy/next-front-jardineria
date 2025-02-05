import Title from '@/app/shared/components/ui/title/Title'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import React from 'react'
import Products from './Products'
import { IProducts } from '@/app/interface/products'


interface IProductSectionProps {
    title: string;
    products: IProducts[];
    handleOpenModal: (product: IProducts) => void;
}   


const ProductSection = ({ title, products, handleOpenModal }: IProductSectionProps) => {
  return (
      <section>
          <Title title={title} />
          <div
              className="w-full mx-auto flex justify-center items-center gap-y-20 gap-x-14 mt-10 mb-5"
              aria-label={`Lista de ${title.toLowerCase()}`}
          >
              <Carousel className="w-full max-w-[1320px] relative">
                  <CarouselContent className="-ml-4">
                      {products.map((product, index) => (
                          <CarouselItem key={index} className="flex justify-center items-center basis-1/2 my-4   md:basis-1/3 lg:basis-1/4">
                              <Products product={product} onClick={() => handleOpenModal(product)} />
                          </CarouselItem>
                      ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 hidden sm:flex" />
                  <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 hidden sm:flex" />
              </Carousel>
          </div>
      </section>
  )
}

export default ProductSection
