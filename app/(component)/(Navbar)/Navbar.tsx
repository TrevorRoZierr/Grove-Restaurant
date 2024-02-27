import Link from "next/link";
import Button from "./Button";
import Links from "./Links";
import Name from "./Name";

const Navbar = () => {
  return (
    <div className="lg:flex md:flex hidden justify-center items-center flex-col">
      <div className="flex justify-center items-center flex-row text-center mt-8">
        <Links linkName="Menu" link="#dinnerTouch" />
        <Links linkName="About" link="#about" />
        <Links linkName="Members" link="#members" />
        <Links linkName="Portfolio" link="https://sayyedsaad.vercel.app" />
        <Links linkName="Job" link="#job" />
        <Link
          href="/reservations"
          className="border-[1px] border-black px-6 py-3 tracking-wider ml-3 hover:bg-black hover:text-gray-200 duration-300"
        >
          Reservations
        </Link>
      </div>
      <div className="flex justify-center items-center text-center">
        <Name />
      </div>
      {/* <div className="flex justify-center items-center flex-row mt-8">
        <Button
          style="border-[1px] border-black px-6 py-3 tracking-wider ml-6 hover:bg-black hover:text-gray-200 duration-300 hover:rounded-lg"
          buttName="Banquet"
        />
        <Button
          style="border-[1px] border-black px-6 py-3 tracking-wider ml-6 hover:bg-black hover:text-gray-200 duration-300 hover:rounded-lg"
          buttName="Lunch"
        />
        <Button
          style="border-[1px] border-black px-6 py-3 tracking-wider ml-6 hover:bg-black hover:text-gray-200 duration-300 hover:rounded-lg"
          buttName="Dinner"
        />
      </div> */}
    </div>
  );
};

export default Navbar;
