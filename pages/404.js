import React,{useEffect} from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'; 

export default function ErrorPage() {
    const router = useRouter();
    useEffect(()=>{
        setTimeout(() => {
            router.push('/')
        }, 5000);
    },[])
    return (
        <div className='app'>
            <Head>
                <title>404</title>
            </Head>
            <h1>404</h1>
            <h2>This Page is not Found</h2>
            
            <button onClick={()=> router.push("/")}>Go to Home Page</button>
        </div>
    )
}
