"use client";
import Link from "next/link";
import { ImCross } from "react-icons/im";

const Reservations = () => {
  return (
    <main className="flex justify-center items-center flex-col lg:p-32 w-full">
      <div className="w-[75%] border-black border-2 flex justify-center items-center flex-col lg:p-20 lg:rounded-xl">
        <Link
          href="/"
          className="absolute lg:right-10 lg:top-[320px] lg:text-2xl"
        >
          <ImCross />
        </Link>
        <h1 className="lg:text-[4rem] font-bold uppercase tracking-wider font-unbounded">
          Reserve A Table
        </h1>
        <div className="mt-10">
          <form>
            <label className="p-5 text-md lg:text-lg">
              Select Number of People
            </label>
            <select className="bg-transparent rounded-full border-[1px] border-black p-1">
              <option className="text-center">3</option>
              <option className="text-center">4</option>
              <option className="text-center">5</option>
              <option className="text-center">6</option>
            </select>
            <br />
            <br />
            <label className="p-5 text-md lg:text-lg">Pick a date</label>
            <input
              type="date"
              className="rounded-full border-[1px] border-black p-1"
            />
            <br />
            <br />
            <div className="flex w-full justify-center items-center text-center">
              <input
                type="submit"
                className="bg-black text-amber-200 lg:px-5 lg:py-2 rounded-full text-md lg:text-lg lg:mt-5 mt-2 cursor-pointer"
                onClick={() => {
                  alert("Your Table has been successfully reserved");
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Reservations;
