import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'; // Asegúrate de que la ruta sea correcta
import { Card, CardContent } from '@/components/ui/card';

const Banner = () => {
  // Array de imágenes para el carrusel
  const images = [
    'images/banner/1.jpg',
    'images/banner/2.jpg',
    'images/banner/3.jpg',
    'images/banner/4.jpg',
  ];

  return (
    <div className="w-full pt-5 lg:h-dvh  relative overflow-hidden"> {/* Contenedor principal con overflow-hidden */}
      <Carousel
        className="w-full h-full"
        opts={{
          dragFree: false, // Deshabilita el arrastrar y soltar
        }}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="w-full h-full"> {/* Asegura que cada ítem ocupe todo el espacio */}
              <Card className="w-full h-full">
                <CardContent className="relative flex items-center justify-center p-0 w-full h-full">
                  {/* Imagen de fondo */}
                  <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${image})` }}
                  >
                    {/* Overlay oscuro */}
                    <div className="absolute inset-0 bg-black bg-opacity-30"></div>

                    {/* Contenido del banner */}
                    <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                      <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                          SERVICIO DE JARDINERIA
                        </h1>
                        <p className="mt-4 max-w-xl mx-auto text-lg text-white sm:text-xl lg:mx-0">
                          Transformamos tus espacios verdes en lugares mágicos.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Flechas de navegación */}
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/50 p-2 rounded-full hover:bg-white/80 transition-colors" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/50 p-2 rounded-full hover:bg-white/80 transition-colors" />
      </Carousel>
    </div>
  );
};

export default Banner;