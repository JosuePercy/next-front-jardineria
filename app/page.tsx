
      "use client"

      import Banner from "./shared/components/banner/Banner";
      import products from "../data/products/products.json";
      import { IProducts } from './interface/products';
      import Products from "./components/products/Products";
      import Jobs from "./shared/components/services-job/Jobs";
      import Title from "./shared/components/ui/title/Title";
      import { useState } from "react";
      import ProductModal from "./components/products/ProductModal";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

      export default function Home() {

        const [selectedProduct, setSelectedProduct] = useState<IProducts | null>(null)


        const handleOpenModal = (product: IProducts) => {
          setSelectedProduct(product)
        }

        const handleCloseModal = ()  => {
          setSelectedProduct(null)
        }

        return (
          <main>
            <Banner />
            <section>
              <Title title={"SERVICIOS"} />
              <Jobs/>
            </section>
            <section>
              <Title title={"PRODUCTOS"} />
              <div
                className="w-full mx-auto flex justify-center items-center gap-y-20 gap-x-14 mt-10 mb-5"
                aria-label="Lista de productos"
              >
                <Carousel
                 /*  opts={{
                    align: "start",
                    loop: true,
                    dragFree: true  
                  }} */
                  className="w-full max-w-[1320px] relative"
                >
                  <CarouselContent className="-ml-4 ">
                    { products.map((product, index) => (
                      <CarouselItem key={index} className="flex justify-center items-center basis-1/2 md:basis-1/3 lg:basis-1/4 ">
                        <Products product={product} onClick={() => handleOpenModal} />
                      </CarouselItem>
                    ))
                     }
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 hidden sm:flex"/>
                  <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 hidden sm:flex" />
                </Carousel>

               {/* {
                  products.map((product: IProducts) => (
                    <Products key={product.id} onClick={() => handleOpenModal(product)}  product={product}/>
                  ) 
                )}  */}
              </div>
            </section>
       {
              selectedProduct && (
                <ProductModal 
                  product={selectedProduct}
                  products={products}
                  onClose={handleCloseModal} />
              )
            } 
          </main>
        );
      }
