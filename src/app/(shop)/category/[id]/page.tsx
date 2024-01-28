import { ProductGrid, Tittle } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

const seedProducts = initialData.products; 
interface Props {
  params:{
    id:Category;
  }
}
export default function({params}: Props) {
  
  const {id} = params; 

  const products = seedProducts.filter( product => product.gender === id )

  const labels: Record<Category, string> ={
    'men': 'Hombres',
    'women': 'Mujeres',
    'kid': 'Niños',
    'unisex': 'Unisex'
  }

  const subTitulo = {
    'men': 'para el',
    'women': 'para ella',
    'kid': 'para los pequeños de la casa',
    'unisex': 'para todos'
  }
   if(id === 'kid'){
     notFound()
   }

  return (
    < >
    <Tittle
      title={labels[id]}
      subtitle={`Productos ${subTitulo[id]}`}
      className="mb-2"
    />

    <ProductGrid
      products={products}
    />
  </>
  );
}