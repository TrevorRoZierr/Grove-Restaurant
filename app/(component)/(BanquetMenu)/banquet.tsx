import { useState, useEffect } from "react";

const Banquet = () => {
  const [banquetMenu, setbanquetMenu] = useState([]);

  useEffect(() => {
    fetch("https://grove-restaurant.vercel.app/api/banquet")
      .then((response) => response.json())
      .then((data) => setbanquetMenu(data))
      .catch((err) => console.error("Failed to fetch banquet menu...", err));
  }, []);

  return (
    <div className="flex justify-center items-center flex-col text-center">
      <h1 className="lg:mt-20 mt-10 lg:text-3xl text-2xl font-semibold uppercase">
        banquet Menu
      </h1>
      <ul className="lg:p-8 p-5 border-2 border-black shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] rounded lg:mb-10 mb-8 lg:mt-5 mt-3 bg-[#e7e7e7]">
        {banquetMenu.map((item: any) => (
          <li key={item.id}>
            <p className="p-2 font-unbounded text-lg font-medium capitalize">
              {item.name}
            </p>
            <p className="text-md mb-4">₹ {item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Banquet;
