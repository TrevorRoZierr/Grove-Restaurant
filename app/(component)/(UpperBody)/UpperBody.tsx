"use client";

import { useState } from "react";
import Button from "../(Navbar)/Button";
import Lunch from "../(LunchMenu)/lunch";
import Dinner from "../(DinnerMenu)/dinner";
import Banquet from "../(BanquetMenu)/banquet";
import About from "./About";
import SecAbout from "./SecAbout";
import Link from "next/link";

const UpperBody = () => {
  const [lunchBut, setLunchBut] = useState(false);
  const [dinnerBut, setDinnerBut] = useState(true);
  const [banquetBut, setBanquetBut] = useState(false);
  return (
    <>
      <Link
        href="/"
        className="text-center tracking-wider lg:hidden text-[3.5rem] uppercase font-bold mt-32 font-unbounded"
      >
        Grove
      </Link>
      <div className="flex justify-center items-center flex-row mt-8">
        <Button
          style="border-[1px] border-black lg:px-6 lg:py-3 px-2 py-1 tracking-wide lg:tracking-wider lg:ml-6 ml-2  hover:bg-black hover:text-gray-200 duration-300 hover:rounded-lg"
          buttName="Lunch"
          onClick={() => {
            setLunchBut(true);
            setDinnerBut(false);
            setBanquetBut(false);
          }}
        />
        <Button
          style="border-[1px] border-black lg:px-6 lg:py-3 px-2 py-1 tracking-wide lg:tracking-wider lg:ml-6 ml-2  hover:bg-black hover:text-gray-200 duration-300 hover:rounded-lg"
          buttName="Dinner"
          onClick={() => {
            setDinnerBut(true);
            setLunchBut(false);
            setBanquetBut(false);
          }}
        />
        <Button
          style="border-[1px] border-black lg:px-6 lg:py-3 px-2 py-1 tracking-wide lg:tracking-wider lg:ml-6 ml-2  hover:bg-black hover:text-gray-200 duration-300 hover:rounded-lg"
          buttName="Banquet"
          onClick={() => {
            setBanquetBut(true);
            setLunchBut(false);
            setDinnerBut(false);
          }}
        />
      </div>
      <div>
        <About />
      </div>
      <div>
        {lunchBut && <Lunch />}
        {dinnerBut && <Dinner />}
        {banquetBut && <Banquet />}
      </div>
      <div>
        <SecAbout />
      </div>
    </>
  );
};

export default UpperBody;
