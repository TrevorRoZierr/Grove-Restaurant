"use client";

import { useState } from "react";
import Lunch from "../(Lunch)/Lunch";
import Button from "../(Navbar)/Button";

const UpperBody = () => {
  const [lunchBut, setLunchBut] = useState(false);
  return (
    <>
      <div className="flex justify-center items-center flex-row mt-8">
        <Button
          style="border-[1px] border-black lg:px-6 lg:py-3 px-2 py-1 tracking-wide lg:tracking-wider lg:ml-6 ml-2  hover:bg-black hover:text-gray-200 duration-300 hover:rounded-lg"
          buttName="Banquet"
          onClick={() => {
            console.log("Clicked");
            setLunchBut(false);
          }}
        />
        <Button
          style="border-[1px] border-black lg:px-6 lg:py-3 px-2 py-1 tracking-wide lg:tracking-wider lg:ml-6 ml-2  hover:bg-black hover:text-gray-200 duration-300 hover:rounded-lg"
          buttName="Lunch"
          onClick={() => {
            setLunchBut(true);
          }}
        />
        <Button
          style="border-[1px] border-black lg:px-6 lg:py-3 px-2 py-1 tracking-wide lg:tracking-wider lg:ml-6 ml-2  hover:bg-black hover:text-gray-200 duration-300 hover:rounded-lg"
          buttName="Dinner"
          onClick={() => {
            console.log("Clicked");
            setLunchBut(false);
          }}
        />
      </div>
      {lunchBut && <Lunch />}
    </>
  );
};

export default UpperBody;
