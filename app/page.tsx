/* eslint-disable @next/next/no-img-element */

"use client"

import Banner from "./shared/components/banner/Banner";
import products from "../data/products/products.json";
import { IProducts } from './interface/products';
/* import Products from "./components/products/Products"; */
import Jobs from "./shared/components/services-job/Jobs";
import Title from "./shared/components/ui/title/Title";
import { useState } from "react";
import { Dialog} from "@/components/ui/dialog";
import { DialogContent } from "@radix-ui/react-dialog";

import ProductModal from "./components/products/ProductModal";
import ProductSection from "./components/products/ProductSection";
import About from "./shared/components/about/About";

export default function Home() {

  const [selectedProduct, setSelectedProduct] = useState<IProducts | null>(null)


  const handleOpenModal = (product: IProducts) => {
    setSelectedProduct(product)
  }

  const handleCloseModal = () => {
    setSelectedProduct(null)
  }

  return (
    <main>
      <Banner />
      <section>
        <Title title={"SERVICIOS"} />
        <Jobs />
      </section>
      <section>
         <Title title="PRODUCTOS" />
      <ProductSection title="PLANTAS" products={products} handleOpenModal={handleOpenModal} />

      <ProductSection title="MACETAS" products={products} handleOpenModal={handleOpenModal} />  
      <ProductSection title="ABONO" products={products} handleOpenModal={handleOpenModal} />

      {/* MODAL CON SHADCN */}
      <Dialog open={!!selectedProduct} onOpenChange={handleCloseModal}>
        <DialogContent className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white relative p-6 rounded-lg shadow-lg max-w-4xl w-full flex flex-col md:flex-row items-center md:items-start">
            {selectedProduct && (
              <ProductModal  handleCloseModal={handleCloseModal} product={selectedProduct} />
            )}
          </div>
        </DialogContent>
      </Dialog>
      </section>    
      <section className="bg-gray-50 py-20">
       <About />
      </section>
      <section>
        <div className="p-4 mx-auto max-w-xl bg-white font-[sans-serif]">
          <h1 className="text-2xl text-gray-800 font-bold text-center">Contact us</h1>
          <form className="mt-8 space-y-4">
            <input type='text' placeholder='Name'
              className="w-full py-2.5 px-4 text-gray-800 bg-gray-100 border focus:border-black focus:bg-transparent text-sm outline-none transition-all" />
            <input type='email' placeholder='Email'
              className="w-full py-2.5 px-4 text-gray-800 bg-gray-100 border focus:border-black focus:bg-transparent text-sm outline-none transition-all" />
            <input type='text' placeholder='Subject'
              className="w-full py-2.5 px-4 text-gray-800 bg-gray-100 border focus:border-black focus:bg-transparent text-sm outline-none transition-all" />
            <textarea placeholder='Message' rows={4}
              className="w-full px-4 text-gray-800 bg-gray-100 border focus:border-black focus:bg-transparent text-sm pt-3 outline-none transition-all"></textarea>
            <button type='button'
              className="text-white bg-black hover:bg-gray-900 tracking-wide text-sm px-4 py-2.5 w-full outline-none">Send</button>
          </form>
        </div>
      </section>
    </main>
  );
}
