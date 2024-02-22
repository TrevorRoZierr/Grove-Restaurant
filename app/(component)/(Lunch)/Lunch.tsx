"use client";

import { useEffect, useState } from "react";

const Lunch = () => {
  const [lunchItems, setLunchItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/lunch")
      .then((res) => res.json())
      .then((data) => setLunchItems(data))
      .catch((err) => console.error("Error fetching lunch menu...", err));
  }, []);
  return (
    <div className="flex justify-center items-center flex-col mt-16 text-center">
      <h1 className="lg:text-[2.5rem] text-xl md:text-2xl uppercase font-semibold animate-pulse">
        Lunch
      </h1>
      <ul className="w-min px-16 py-2 shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] rounded-md border-2 border-black">
        {lunchItems.map((item: any) => (
          <li className="p-3" key={item.id}>
            <p className="font-unbounded font-medium">{item.name}</p>
            <p className="font-normal mt-2">{item.price} ₹</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lunch;
