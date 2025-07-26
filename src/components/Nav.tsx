// src/components/Navbar.tsx
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    
    <nav className="bg-white border-b border-gray-200 px-10 py-4 shadow-md sticky top-0 z-50">
        
      <div className={`${isOpen&&'flex-col w-full '}   flex items-center justify-between`}>
        
        <NavLink to="/" className="text-xl font-bold text-green-600">
          ShopStore
        </NavLink>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden absolute top-0 right-0 m-5 text-gray-700 focus:outline-none"
        >
            <i className="fa-solid fa-bars text-2xl"></i>
          
        </button>

        <div
          className={`${isOpen ? "block" : "hidden"} md:flex md:items-center `}>
          <ul className="flex flex-col md:flex-row md:space-x-10  mt-4 md:mt-0">
            <li>
              <NavLink
                to="/"
                className="block py-2 text-gray-700 hover:text-green-600 border-b-2 md:border-0 "
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="block py-2 text-gray-700 hover:text-green-600 border-b-2 md:border-0"
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="block py-2 text-gray-700 hover:text-green-600 border-b-2 md:border-0"
              >
                Categories
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="block py-2 text-gray-700 hover:text-green-600 border-b-2 md:border-0"
              >
                Brands
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
