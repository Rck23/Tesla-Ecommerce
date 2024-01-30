import { QuantitySelector, Tittle } from "@/components";
import Link from "next/link";
import { initialData } from '../../../seed/seed';
import Image from "next/image";


const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
  initialData.products[3],
]

export default function() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000]">

        <Tittle title="Verificar orden"/>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">

            {/* Carrito */}
            <div className="flex mt-5 flex-col">
              <span className="text-xl">Ajuestar elementos</span>

              <Link href='/cart' className="mb-5 underline">
                 Editar carrito
              </Link>


            {/* Items */}

            {
              productsInCart.map(product => (

                <div key={product.slug} className="flex">

                  <Image
                    src={`/products/${product.images[0]}`}
                    width={100}
                    height={100}
                    alt={product.title}
                    className="mr-5 rounded"
                    style={{
                      width: '100px',
                      height:' 90px'
                    }}
                    />

                  <div>
                    <p>{ product.title}</p>
                    <p>${ product.price}</p>
                    <p className="font-bold">Subtotal: ${ product.price}</p>

                  </div>
                </div>
              ))
              
              
            }

            </div>

            {/* Checkout - resumen de orden */}

              <div className="bg-white rounded-xl p-7 shadow-xl">

                <h2 className="text-2xl mb-2">Dirección de entrega</h2>
                <div className="mb-10">
                  <p className="text-xl">Ulises Martínez</p>
                  <p>Av. las palmas</p>
                  <p>Col. Centro</p>
                  <p>Alcaldia Huertas</p>
                  <p>Ciudad de México</p>
                  <p>CP 03054</p>
                  <p>5512302548</p>
                </div>

                {/* Divider */}
                <div className="w-full h-0.5 rounded bg-gray-200 mb-10"/>

                <h2 className="text-2xl mb-2">Resumen de orden</h2>

                <div className="grid grid-cols-2">
                    <span>No. Productos</span>
                    <span className="text-right">1 artículo</span>

                    <span>Subtotal</span>
                    <span className="text-right">$ 100</span>

                    <span>Impuestos (15%)</span>
                    <span className="text-right">$ 100</span>

                    <span className="mt-5 text-2xl">Total:</span>
                    <span className="mt-5 text-2xl text-right">$ 100</span>
                </div>

                 <div className="mt-5 mb-2 w-full">

                  <p className="mb-5">
                    {/* disclainer */}
                    <span className="text-xs">
                      Al hacer click en "Colocar orden", aceptas nuestros <a href="#" className="underline">términos y condiciones</a> y <a href="#" className="underline">política de privacidad</a>
                    </span>

                  </p>
                  <Link href='/orders/123' className="flex btn-primary justify-center">
                    Colocar orden
                  </Link>
                 </div>
              </div>

        </div>
      </div>
    </div>
  );
}