const Menu = () => {
  return (
    <div className="absolute lg:right-4 right-3">
      <ul className="border-2 border-black w-min lg:p-5 p-3 text-center lg:mt-2 mt-1 bg-gray-200">
        <li className="p-2 underline text-xs lg:text-sm">Menu</li>
        <li className="p-2 underline text-xs lg:text-sm">About</li>
        <li className="p-2 underline text-xs lg:text-sm">Members</li>
        <li className="p-2 underline text-xs lg:text-sm">Jobs</li>
        <li className="p-2 underline text-xs lg:text-sm">Portfolio</li>
        <li className="lg:px-4 px-2 lg:py-2 py-1 bg-black lg:text-md text-sm mt-3 text-gray-200">
          Reservations
        </li>
      </ul>
    </div>
  );
};

export default Menu;
