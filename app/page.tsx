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


      <ProductSection title="PRODUCTOS" products={products} handleOpenModal={handleOpenModal} />
      <ProductSection title="PRODUCTOS" products={products} handleOpenModal={handleOpenModal} />
      <ProductSection title="PRODUCTOS" products={products} handleOpenModal={handleOpenModal} />
      <ProductSection title="PRODUCTOS" products={products} handleOpenModal={handleOpenModal} />


      {/* MODAL CON SHADCN */}
      <Dialog open={!!selectedProduct} onOpenChange={handleCloseModal}>
        <DialogContent className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full flex flex-col md:flex-row items-center md:items-start">
            {selectedProduct && (
              <ProductModal  handleCloseModal={handleCloseModal} product={selectedProduct} />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}
