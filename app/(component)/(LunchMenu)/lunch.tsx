import { useState, useEffect } from "react";

const Lunch = () => {
  const [lunchMenu, setLunchMenu] = useState([]);

  useEffect(() => {
    fetch("https://grove-restaurant.vercel.app/api/lunch")
      .then((response) => response.json())
      .then((data) => setLunchMenu(data))
      .catch((err) => console.error("Failed to fetch lunch menu...", err));
  }, []);

  return (
    <div className="flex justify-center items-center flex-col text-center">
      <h1 className="mt-20 text-3xl font-semibold uppercase">Lunch</h1>
      <ul className="p-8 border-2 border-black shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] rounded mb-10 mt-5 bg-[#e7e7e7]">
        {lunchMenu.map((item: any) => (
          <li key={item.id}>
            <p className="p-2 font-unbounded text-lg font-medium capitalize">{item.name}</p>
            <p className="text-md">₹ {item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lunch;
