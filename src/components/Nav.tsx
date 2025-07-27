import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const {products}=useCart()  
  return (
    
    <nav className="bg-white  px-10 py-2 shadow-md sticky top-0 z-50 dark:bg-[#1F2937]">
        
      <div className={`${isOpen&&'flex-col w-full '}   flex items-center justify-between`}>
        <div className=" flex gap-x-3 items-center">
          <Link to="/" className="text-2xl font-bold text-primary mx-2">
          <i className="fa-solid fa-store text-primary"> </i>ShopStore
        </Link>
        <DarkModeToggle/>

        </div>
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden absolute top-0 right-0 m-5 text-gray-700 focus:outline-none"
        >
            <i className="fa-solid fa-bars text-2xl dark:text-white"></i>
          
        </button>

        <div
          className={`${isOpen ? "block" : "hidden"} md:flex md:items-center `}>
          <ul className="flex flex-col md:flex-row md:space-x-10  mt-4 md:mt-0">
            <li>
              <NavLink
                to="/"
                className={` block p-3 py-2 text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white border-b-2 md:border-0 `}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className="block p-3 py-2 text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white  border-b-2 md:border-0"
              >
                Products
              </NavLink>
            </li>
            <li className="relative bg-red">
              <NavLink
                to="/cart"
                className="block p-3 py-2 text-gray-700 dark:text-gray-200 hover:text-primary border-b-2 md:border-0 "
              >
                <div className="">
                 <i className="fa-solid fa-cart-shopping mx-1"></i>
                Cart 
                </div>
                {products.length>0&&<span className="absolute top-0 left-0  bg-black dark:bg-white text-white dark:text-black w-[18px] h-[18px] rounded-full flex justify-center items-center">
                          {products.length}
                        </span>}
                
              </NavLink>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}
