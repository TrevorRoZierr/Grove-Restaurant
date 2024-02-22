"use client";

import { useState } from "react";
import Menu from "./Menu";
import { RiMenuFoldLine } from "react-icons/ri";

const SecNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuFunc = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="flex lg:hidden md:hidden sm:flex justify-between items-center">
        <h1 className="p-5 lg:text-4xl sm:text-3xl md:text-3xl text-2xl tracking-wide uppercase font-semibold">
          Grove
        </h1>
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
