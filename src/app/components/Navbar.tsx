import Link from "next/link";

import React from 'react'
import Search from "./Search";

export default function Navbar() {
  return (
    <header className="bg-teal-400 sticky top-0 z-10">
      <nav className="flex flex-col gap-4 sm:flex-row sm:justify-between 
        items-center p-4 font-bold max-w-6xl mx-auto text-white"
      >
          <div className="flex lg:flex-row max-sm:flex-col
           text-2xl sm:text-3xl text-center
            whitespace-nowrap">
            <Link href="/" className="">Image Gallery</Link>
            <a className="pl-5 pt-3 text-sm font-thin" href="http://www.pexels.com">Photos provided by Pexels</a>
          </div>
      

        <Search></Search>
      </nav>
    </header>
  )
}
