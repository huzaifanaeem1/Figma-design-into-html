import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full flex justify-end items-center mt-10 lg:mt-0">
      <nav className="flex flex-col lg:flex-row justify-center items-center gap-5 font-bold p-4 lg:pr-16">
        <Link href="/" className="hover:underline text-lg md:text-xl lg:text-base">Works</Link>
        <Link href="/" className="hover:underline text-lg md:text-xl lg:text-base">Blog</Link>
        <Link href="/" className="hover:underline text-lg md:text-xl lg:text-base">Contact</Link>
      </nav>
    </div>
  );
};

export default Navbar;
