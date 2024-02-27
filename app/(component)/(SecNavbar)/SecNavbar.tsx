"use client";

import { useState } from "react";
import Menu from "./Menu";
import { RiMenuFoldLine } from "react-icons/ri";
import Link from "next/link";

const SecNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuFunc = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="fixed flex border-b-2 shadow-[0.1rem_0.25rem_10px_0px_rgba(0,0,0,1)] border-black top-0 w-full bg-[#e7e7e7] lg:hidden md:hidden sm:flex justify-between items-center">
        <Link href="/" className="p-5 lg:text-4xl sm:text-3xl md:text-3xl text-2xl uppercase font-josefin font-semibold">
          Bonjour
        </Link>
        <nav className="flex flex-row">
          <h1
            className="px-6 py-5 lg:mr-8 mr-2 cursor-pointer text-2xl"
            onClick={menuFunc}
          >
            <RiMenuFoldLine />
          </h1>
        </nav>
      </div>
      {menuOpen && <Menu />}
    </>
  );
};

export default SecNavbar;
