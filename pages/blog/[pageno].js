import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";

export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  const paths = data.map((item) => {
    return {
      params: {
        pageno: item.id.toString(),
      },
    };
  });
  
  return {
    paths,
    fallback: false,    
  };
}
export async function getStaticProps(context) {
  const id = context.params.pageno;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function SingleBlog({ data }) {
  return (
    <div className="app">
      <Navbar />
      <div className="ssr-data">
        <p>
          <b> {data.id}</b>
        </p>
        <h4>{data.title}</h4>
      </div>
    </div>
  );
}
