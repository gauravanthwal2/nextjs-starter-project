import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="container">
      <div className="nav">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/blog">
          <a>Blogs</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/ninjas">
          <a>Ninjas</a>
        </Link>
      </div>
    </div>
  );
}
