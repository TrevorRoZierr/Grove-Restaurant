import Link from "next/link";

const Menu = () => {
  return (
    <div className="fixed lg:right-4 right-3">
      <ul className="border-2 flex flex-col border-black w-min lg:p-5 p-3 text-center lg:mt-2 mt-1 bg-gray-200">
        <Link href="#dinnerTouch" className="p-2 underline text-xs lg:text-sm">
          Menu
        </Link>
        <Link href="#about" className="p-2 underline text-xs lg:text-sm">
          About
        </Link>
        <Link href="#members" className="p-2 underline text-xs lg:text-sm">
          Members
        </Link>
        <Link href="#jobs" className="p-2 underline text-xs lg:text-sm">
          Jobs
        </Link>
        <Link
          href="https://sayyedsaad.vercel.app"
          className="p-2 underline text-xs lg:text-sm"
        >
          Portfolio
        </Link>
        <Link
          href="/reservations"
          className="lg:px-4 px-2 lg:py-2 py-1 bg-black lg:text-md text-sm mt-3 text-gray-200"
        >
          Reservations
        </Link>
      </ul>
    </div>
  );
};

export default Menu;
