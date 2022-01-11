import React from "react";
import Link from "next/link";
import Head from 'next/head';
import Navbar from "../components/Navbar";

export default function about() {
  return (
    <div className="app">
      <Head>
        <title>About Page</title>
      </Head>
      <Navbar/>
      <h1>About</h1>
      <p>
        Lorem Ipsum is simply dummy text of
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the
      </p>
    </div>
  );
}
