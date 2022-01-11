import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from 'next/head';
import Navbar from "../components/Navbar";

export default function Index() {
  return (
    <div className="app">
      <Head>
        <title>Home Page</title>
      </Head>
      <Navbar />
      <h1>Home</h1>
      <p>This is Home Page</p>
      <Image src="/img1.jpg" width={350} height={200} />
    </div>
  );
}
