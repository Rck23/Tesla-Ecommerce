import { titleFont } from '@/config/fonts'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <div className='w-full flex justify-center text-xs mb-10'>

        <Link href='/'>

            <span className={`antialiased font-bold ${titleFont.className}`}>Tesla </span>
            <span>| ecommerce</span>
            <span>© {new Date().getFullYear()}</span>
        </Link>


        <Link href='/'>Privacidad & legal</Link>

    </div>
  )
}
