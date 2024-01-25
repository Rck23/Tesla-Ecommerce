import { ProductGrid, Tittle } from "@/components";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import Image from "next/image";

const products = initialData.products; 

export default function Home() {
  return (
    < >
      <Tittle
        title="Tienda"
        subtitle="Todos los productos"
        className="mb-2"
      />

      <ProductGrid
        products={products}
      />
    </>
  );
}