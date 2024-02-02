import { getPaginatedProductsWithImages } from "@/actions";
import { ProductGrid, Tittle, Pagination } from "@/components";
import { redirect } from "next/navigation";


interface Props{ 
  searchParams:{ 
    page?: string
  }
}

export default async function Home({ searchParams }: Props) {

  const page = searchParams.page ? parseInt(searchParams.page) : 1; 

  const {products, currentPage, totalPages} = await getPaginatedProductsWithImages({page});

  //validar que la pagina tenga productos
  if( products.length === 0 ){
    redirect('/');
  }


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

      <Pagination totalPages={totalPages}/>
    </>
  );
}
