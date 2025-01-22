import Banner from "./shared/components/banner/Banner";
import products from "../data/products/products.json";
import { IProducts } from "./interface/products";
import Products from "./components/products/Products";
import Jobs from "./shared/components/services-job/Jobs";
import Title from "./shared/components/ui/title/Title";

export default function Home() {
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
          className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
          aria-label="Lista de productos"
        >
          {
            products.map((product: IProducts) => (
              <Products key={product.id} product={product}/>
            )
          )}
        </div>
      </section>
    </main>
  );
}
