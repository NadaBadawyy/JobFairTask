import { Link } from "react-router-dom";
import type { productType } from "../lib/types";
import { useCart } from "../hooks/useCart";
import { useState } from "react";

export default function CartDetails() {
  const products:productType[] = JSON.parse(localStorage.getItem("items") || "[]");
  const {deleteProduct}=useCart()
  const [reload, setreload] = useState<boolean>(false)
  return (
    <>
      {products.length > 0 ? (
        <>
          <div className="p-5 my-5 font-mono">
            <h2 className="my-10 text-3xl font-mono text-center dark:text-white">
              My Cart
            </h2>
            {products.map((p,i) => {
              return (
                
                <div
                  key={i}
                  className=" flex justify-center items-center md:flex-row flex-col p-3  border-y-2 border-gray-200"
                >
                  <div className="flex items-center justify-between  ">
                    <div className="item w-1/3 md:w-1/4 m-auto md:m-0">
                      <img
                        src={p.image}
                        className="w-full"
                        alt=""
                      />
                    </div>
                    <div className="p-3 text-left">
                      <h5 className="text-xl mb-2 dark:text-white">
                        {p.title.split(" ").slice(0, 2).join(" ")}
                      </h5>
                      <p className="text-lg text-primary my-5 ">
                        $ {p.price } 
                      </p>
                      
                      <button
                        className="bg-red-600 rounded-lg text-white p-2 w-full"
                        onClick={()=>{deleteProduct(i)
                          setreload(!reload)

                        }}

                      >
                        Remove <i className="fa-solid fa-trash-can"> </i> 
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <div className="mt-20 flex justify-center  dark:text-gray-100  ">
          <div className="">
            <i className="fa-solid fa-box-open text-9xl text-gray-500 dark:text-gray-100 text-center my-5"></i>
            <p className="text-3xl font-bold capitalize ">Your cart is empty</p>
            <p className="text-gray-400 my-5">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link to={"/"}>
              <button className="bg-primary shadow-2xl shadow-purple-300 text-white text-xl p-3 rounded-xl">
                <i className="fa-solid fa-arrow-left"></i> Start Shopping
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
