import React from "react";
import { FaBullseye, FaBurger, FaChevronRight, FaCloud } from "react-icons/fa6"; // Import icons from react-icons

const MenuList = () => {
  const items = [
    {
      title: "Goals",
      icon: <FaBullseye className="h-14 w-14 p-2 fill-red-700"/>, 
      color: "bg-red-900/55", 
    },
    {
      title: "Popular Dishes",
      icon: <FaBurger className="h-14 w-14 p-2 fill-blue-700"/>, 
      color: "bg-blue-900/55", 
    },
    {
      title: "Menus",
      icon: <FaCloud className="h-14 w-14 p-2 fill-teal-700"/>, 
      color: "bg-teal-900/55", 
    },
  ];

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-4 hover:bg-gray-700 rounded-md cursor-pointer"
        >
          <div className="flex items-center">
            <div
              className={`flex items-center justify-center w-10 h-10 ${item.color} text-white rounded-full`}
            >
              {item.icon}
            </div>
            <span className="ml-4 text-lg">{item.title}</span>
          </div>
          <div>
          <FaChevronRight className="bg-slate-700 p-2 h-7 w-7 rounded-full stroke-white" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuList;
