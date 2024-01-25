import { TopMenu } from '@/components';
import React, { Component } from 'react'

export default function Shoplayout( { children }:{
    children: React.ReactNode;
}) {
    return(
        <main className='min-h-screen '>
            <TopMenu/>
            {children}
        </main>
    );
}