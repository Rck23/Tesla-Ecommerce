'use client'
import { useUIStore } from '@/store';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react'
import { IoCloseOutline, IoLogInOutline, IoLogOutOutline, IoPeopleOutline, IoPersonOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline } from 'react-icons/io5';

export const Sidebar = () => {

    const isSideMenuOpen = useUIStore(state => state.isSideMenuOpen);
    const closeSideMenu = useUIStore(state => state.closeSideMenu);

    return (
        <div>

            {/* background negro */}

            {
                isSideMenuOpen && (

                    <div
                        className='flex top-0 left-0 w-screen h-screen z-10 bg-black opacity-30'
                    />
                )
            }

            {/* blur */}

            {
                isSideMenuOpen && (

                    <div onClick={closeSideMenu} className='fixed fade-in backdrop-filter top-0 left-0 w-screen h-screen z-10 backdrop-blur-sm'>

                    </div>
                )
            }

            {/* Nav menú */}

            <nav className={
                clsx(
                    'fixed p-5 right-0 top-0 h-screen bg-white w-[500px] z-20 shadow-2xl transform duration-300 transition-all',
                    {
                        'translate-x-full': !isSideMenuOpen
                    }
                )
            }>

                <IoCloseOutline
                    className='absolute top-5 right-5 cursor-pointer'
                    size={50}
                    onClick={() => closeSideMenu()}
                />

                <div className='relative mt-14'>
                    <IoSearchOutline size={20} className='absolute top-2 left-2' />

                    <input
                        type='text'
                        className='bg-gray-50 w-full pl-10 rounded py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline focus:border-blue-500'
                        placeholder='Buscar...'
                    />


                </div>

                {/* Menú */}
                <Link href='/' className='flex items-center mt-10 p-10 hover:bg-gray-100 rounded transition-all'>
                    <IoPersonOutline size={30} />
                    <span className='text-xl ml-3'>Perfil</span>
                </Link>

                <Link href='/' className='flex items-center mt-10 p-10 hover:bg-gray-100 rounded transition-all'>
                    <IoTicketOutline size={30} />
                    <span className='text-xl ml-3'>Ordenes</span>
                </Link>

                <Link href='/' className='flex items-center mt-10 p-10 hover:bg-gray-100 rounded transition-all'>
                    <IoLogInOutline size={30} />
                    <span className='text-xl ml-3'>Ingresar</span>
                </Link>

                <Link href='/' className='flex items-center mt-10 p-10 hover:bg-gray-100 rounded transition-all'>
                    <IoLogOutOutline size={30} />
                    <span className='text-xl ml-3'>Salir</span>
                </Link>


                {/* Seprarador linea */}
                <div className='w-full h-px bg-gray-200 my-10' />

                <Link href='/' className='flex items-center mt-10 p-10 hover:bg-gray-100 rounded transition-all'>
                    <IoShirtOutline size={30} />
                    <span className='text-xl ml-3'>Productos</span>
                </Link>

                <Link href='/' className='flex items-center mt-10 p-10 hover:bg-gray-100 rounded transition-all'>
                    <IoTicketOutline size={30} />
                    <span className='text-xl ml-3'>Ordenes</span>
                </Link>

                <Link href='/' className='flex items-center mt-10 p-10 hover:bg-gray-100 rounded transition-all'>
                    <IoPeopleOutline size={30} />
                    <span className='text-xl ml-3'>Usuarios</span>
                </Link>

            </nav>


        </div>
    )
}
