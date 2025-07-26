// src/components/Navbar.tsx
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../hooks/useCart";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const {products}=useCart()  
  return (
    
    <nav className="bg-white border-b border-gray-200 px-10 py-4 shadow-md sticky top-0 z-50">
        
      <div className={`${isOpen&&'flex-col w-full '}   flex items-center justify-between`}>
        
        <Link to="/" className="text-2xl font-bold text-primary mx-2">
          <i className="fa-solid fa-store text-primary"> </i>ShopStore
        </Link>

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
                className="block py-2 text-gray-700 hover:text-primary border-b-2 md:border-0 "
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="block py-2 text-gray-700 hover:text-primary border-b-2 md:border-0"
              >
                Products
              </NavLink>
            </li>
            <li className="relative bg-red">
              <NavLink
                to="/cart"
                className="block py-2 text-gray-700 hover:text-primary border-b-2 md:border-0 "
              >
                <div className="">
                 <i className="fa-solid fa-cart-shopping mx-1"></i>
                Cart 
                </div>
                
                <span className="absolute top-0 left-0  bg-primary text-white w-[18px] h-[18px] rounded-full flex justify-center items-center">
                          {products.length>0&&products.length}
                        </span>
              </NavLink>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}
