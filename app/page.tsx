"use client"
/* eslint-disable @next/next/no-img-element */

import Banner from "./shared/components/banner/Banner";

import products from "../data/products/plantas/plantas.json";
import macetasFibra from "../data/products/macetas/macetas-fibra.json";
import macetasCemento from "../data/products/macetas/macetas-cemento.json";
import macetasArcilla from "../data/products/macetas/macetas-arcilla.json";
import bañitoEcologico from "../data/products/mascota/bañito-ecologico.json";
import AdornosFlorales from "../data/products/flores/adornos.json";
import Grass from "../data/products/grass/grass.json";


import { IProducts } from './interface/products';
/* import Products from "./components/products/Products"; */
import Jobs from "./shared/components/services-job/Jobs";
import Title from "./shared/components/ui/title/Title";
import { useState } from "react";
import { Dialog, DialogHeader } from "@/components/ui/dialog";
import { DialogClose, DialogContent, DialogTitle } from "@radix-ui/react-dialog";

import ProductModal from "./components/products/ProductModal";
import ProductSection from "./components/products/ProductSection";
import About from "./shared/components/about/About";
import Container from "./shared/components/ui/Container";
import Contact from "./shared/components/contact/Contact";
import Link from "next/link";
import { MessageCircle, X } from "lucide-react";

export default function Home() {


  const [selectedProduct, setSelectedProduct] = useState<IProducts | null>(null)

  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false); // Estado para el dialog de WhatsApp

  const handleOpenModal = (product: IProducts) => {
    setSelectedProduct(product)
  }

  const handleCloseModal = () => {
    setSelectedProduct(null)
  }

  return (
    <main>
      <Banner />
      <Container className="m-auto">
        <section id="services">
          <Title title={"SERVICIOS"} />
          <Jobs />
        </section>
        <section id="products">
          <Title title="PRODUCTOS" />
          <ProductSection title="PLANTAS" products={products} handleOpenModal={handleOpenModal} />
          <ProductSection title="MACETAS" products={macetasFibra} handleOpenModal={handleOpenModal} />
          <ProductSection title="MACETAS" products={macetasCemento} handleOpenModal={handleOpenModal} />
          <ProductSection title="MACETAS" products={macetasArcilla} handleOpenModal={handleOpenModal} />
          <ProductSection title="MACETAS" products={bañitoEcologico} handleOpenModal={handleOpenModal} />
          <ProductSection title="MACETAS" products={Grass} handleOpenModal={handleOpenModal} />
          <ProductSection title="MACETAS" products={AdornosFlorales} handleOpenModal={handleOpenModal} />
          <Dialog open={!!selectedProduct} onOpenChange={handleCloseModal}>
            <DialogContent className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
              <div className="bg-white relative mb:p-6 p-4 rounded-lg shadow-lg max-w-4xl w-full flex flex-col md:flex-row items-center md:items-start">
                {selectedProduct && (
                  <ProductModal handleCloseModal={handleCloseModal} product={selectedProduct} />
                )}
              </div>
            </DialogContent>
          </Dialog>
        </section>
        <About />
        <Contact />
      </Container>

      <button
        onClick={() => setIsWhatsAppOpen(true)}
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-8 h-8"
        />
      </button>

      <Dialog open={isWhatsAppOpen} onOpenChange={setIsWhatsAppOpen}>
        <DialogContent className="fixed bottom-6 right-6 rounded-[30px] shadow-lg w-[90vw] max-w-[400px] max-h-[80vh] bg-white flex flex-col">
          {/* Encabezado del chat */}
          <DialogHeader className="bg-green-500 p-4 rounded-t-[30px] flex items-center flex-row justify-between">
            <div className="flex items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="w-9 h-9"
              />
              <DialogTitle>
                <p className="text-white text-[1.2rem] font-semibold">WhatsApp</p>
              </DialogTitle>
            </div>
            <DialogClose asChild>
              <button className="m-0 text-white hover:text-gray-200 transition-colors">
                <X className="w-6 h-6" /> {/* Ícono de cierre */}
              </button>
            </DialogClose>
          </DialogHeader>

          {/* Cuerpo del chat */}
          <div className="w-[calc(100%+4px)] py-[20px] pb-[4  0px]">
            <div
              className="joinchat__message p-[15px_20px] relative min-h-[56px] mx-[26px] mb-[26px] rounded-[26px] text-[#4a4a4a] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.3)] transform translate-z-0 break-words"
              style={{
                position: "relative", // Asegura que el pseudo-elemento se posicione correctamente
              }}
            >
              {/* Contenido del mensaje */}
              <p>Hola</p>
              <p>Realice su consulta de nuestros servicios de jardinería <strong>AHORA!!!!</strong></p>

            </div>
          </div>


          {/* Pie del chat (opcional) */}
          <div className="flex justify-end w-full mb-5 px-2">
            <div className="flex items-center justify-center bg-green-500 text-white w-48 h-14 rounded-full shadow-lg hover:bg-green-600 transition duration-300">
              <Link
                href="https://wa.me/992693050"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full justify-evenly items-center space-x-2"
              >
                <span className="text-lg">Abrir chat</span>
                <MessageCircle className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}
