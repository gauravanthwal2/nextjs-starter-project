import React from 'react'
import Link from 'next/link';
import Head from 'next/head';
import Navbar from '../../components/Navbar';

export default function index() {
    return (
        <div className='app'>
            <Head>
                <title>Ninja Page</title>
            </Head>
            <Navbar/>
                
            
            <h1>Ninjas</h1>
        </div>
    )
}
