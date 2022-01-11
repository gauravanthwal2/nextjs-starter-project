import React from "react";
import Link from 'next/link';
import Navbar from "../../components/Navbar";


export async function getStaticProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function Blog({data}) {
  return (
    <div className="app">
      <Navbar />
      {data.slice(0,5).map(item=>{
          return(
              <div key={item.id} className="ssr-data">
                  <p><b> {item.id}</b></p>
                 <Link href={`/blog/${item.id}`}><h3>{item.title}</h3></Link>
              </div>
          )
      })}
    </div>
  );
}
