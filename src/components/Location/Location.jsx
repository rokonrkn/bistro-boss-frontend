import React, { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa"; 
import contactData from "../../../public/location.json"; 

const Location = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(contactData); // load JSON
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-6 mt-12">
      {items.map((item) => {
        const Icon = FaIcons[item.icon]; 
        return (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden text-center"
          >
            <div className="bg-amber-600 p-4 flex justify-center items-center">
              <Icon className="text-white text-2xl" />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-700 whitespace-pre-line">{item.value}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Location;
