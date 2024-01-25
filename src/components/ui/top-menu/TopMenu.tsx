import { titleFont } from "@/config/fonts";
import Link from "next/link";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";

export const TopMenu = () => {
  return (
    <nav className="flex px-5 items-center w-full justify-between">
      {/* logo */}
      <div>
        <Link href="/">
          <span className={`${titleFont.className} antialiased font-bold`}>
            Teslo
          </span>

          <span> | Tienda</span>
        </Link>
      </div>

      {/* centro Menu */}

      <div className="hidden sm:block">
        <Link
          className="p-2 m-2 rounded-md  transition-all hover:bg-gray-200"
          href="/category/men"
        >
          Hombres
        </Link>

        <Link
          className="p-2 m-2 rounded-md  transition-all hover:bg-gray-200"
          href="/category/woman"
        >
          Mujeres
        </Link>

        <Link
          className="p-2 m-2 rounded-md  transition-all hover:bg-gray-200"
          href="/category/kids"
        >
          Niños
        </Link>
      </div>

      {/* buscador, carrito, Menu */}
      <div className="flex items-center">
        <Link href="/search"  className="mx-2">
          <IoSearchOutline className="w-5 h-5" />
        </Link>

        <Link href="/cart" className="mx-2">
          <div className="relative">
            <span className="absolute text-xs rounded-full px-1 font-bold text-white bg-blue-700 -top-2 -right-2">
                2
            </span>
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>

        <button className="p-2 m-2 rounded-md transition-all hover:bg-gray-200">
            Menú
        </button>
      </div>
    </nav>
  );
};
