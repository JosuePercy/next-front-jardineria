import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

const Banner = () => {
  // Array de imágenes para el carrusel
 /*  const images = [
    '/banner/1.svg',
    '/banner/2.svg',
    '/banner/3.svg',
    '/banner/4.svg',
  ]; */
  const images = [
    'https://viverokantu.pe/web/wp-content/uploads/2018/04/CABECERA.jpg',
    'https://viverokantu.pe/web/wp-content/uploads/2018/04/CABECERA.jpg',
    'https://viverokantu.pe/web/wp-content/uploads/2018/04/CABECERA.jpg',
    'https://viverokantu.pe/web/wp-content/uploads/2018/04/CABECERA.jpg',
  ];

  return (
    <Carousel className="w-full h-dvh">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="">
              <Card>
                <CardContent className="relative flex items-center justify-center p-0">
                  {/* Imagen de fondo */}
                  <div
                    className="w-full bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${image})` }}
                  >
                    {/* Overlay oscuro */}
                    <div className="absolute inset-0"></div>

                    {/* Contenido del banner */}
                    <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                 
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Banner;






{/* <section
  className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl sm:text-left text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
        Especialistas en Jardinería
        y amantes de la ecología

      </h1>


      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          className=" block w-full sm:w-auto  bg-[#FF9900] hover:bg-orange-500  text-white font-bold py-2 px-4 rounded  items-center"
        >
          Contáctanos
        </a>

        <a
          href="#"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>  */}