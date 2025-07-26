import { Link } from "react-router-dom";

import { useProducts } from "../hooks/useProducts";

export default function Products() {
    const {products}=useProducts()
  
  return (
    <>
      <div className="mt-5  md:mt-20 lg:mt-5">
          <div className="row py-2">
                {products
                  ?.map((p) => {
                    return (
                      <div
                        className=" w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 text-left"
                        key={p.id}
                      >
                        <div className="hover:border-2 hover:shadow-md border-[#0AAD0A] dark:border-[#0AAD0A] rounded-lg group p-2 dark:bg-[#030119] dark:hover:shadow-lg">
                          <Link
                            to={``}
                          
                          >
                            <div className="product">
                              <div className="">
                                
                                <img
                                  src={p.image}
                                  className="w-[220px] h-[220px] rounded-lg"
                                  alt=""
                                />
                              </div>
  
                              <h3 className="text-[#0AAD0A] dark:text-[#0AAD0A] text-xl capitalize">
                                 {p.title.split(" ").slice(0, 2).join(" ")}
                              </h3>
                             
                              <div className="flex justify-between py-2">
                                <p className="text-slate-600 dark:text-gray-400 text-base  dark:text-white">
                                  {p.price} EGP
                                </p>
                                <p className="text-slate-600 dark:text-gray-400 text-base  dark:text-white">
                                  <i className="fas fa-star text-yellow-300"></i>
                                  {p.rating.rate}
                                </p>
                              </div>
                            </div>
                          </Link>
                          <button
                            className="w-full p-2 rounded-xl bg-[#0AAD0A]  text-white font-bold  opacity-0 group-hover:opacity-100 dark:bg-[#0AAD0A] dark:text-white"
                            
                          >
                            add to cart
                          </button>
                        </div>
                      </div>
                    );
                  })}
              </div>
        
      </div>
    </>
  )
}
