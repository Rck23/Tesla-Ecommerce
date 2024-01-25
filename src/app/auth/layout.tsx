import React, { Component } from 'react'

export default function Shoplayout( { children }:{
    children: React.ReactNode;
}) {
    return(
        <main className='min-h-screen bg-gray-500'>
            {children}
        </main>
    );
}