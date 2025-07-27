import { Link } from "react-router-dom";
import { useProducts } from "../hooks/useProducts"
import Loading from "./Loading";
import { useCart } from "../hooks/useCart";

export default function HomeProducts() {
    const {topProducts}=useProducts()
    const {AddtoCart}=useCart()
  return (
     <div>
      {topProducts.length > 0 ? (
        <>
          <div className=" ">

            <div className="row p-2 md:gap-5  items-center justify-center">
              {topProducts.map((p) => {
                return (
                  <div
                    className=" w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/6 text-left "
                    key={p.id}
                  >
                    <div className="p-2 md:p-0">
                      <div className="border-2 hover:scale-[1.02] hover:shadow-md border-primary dark:border-primary rounded-lg group p-2 dark:bg-[#030119] dark:hover:shadow-xl hover:shadow-primary ">
                        <Link to={`/products/${p.id}`}>
                          <div className="product">
                            <div className="">
                              <img
                                src={p.image}
                                className=" aspect-square rounded-lg"
                                alt=""
                              />
                            </div>

                            <h3 className="text-primary dark:text-primary text-xl capitalize">
                              {p.title.split(" ").slice(0, 2).join(" ")}
                            </h3>

                            <div className="flex justify-between py-2">
                              <div className="flex items-center">
                                <div className="flex">
                                  {[1, 2, 3, 4, 5].map((star) => {
                                    const fillPercentage =
                                      Math.max(
                                        0,
                                        Math.min(1, p.rating.rate - star + 1)
                                      ) * 100;

                                    return (
                                      <div
                                        key={star}
                                        className="relative inline-block text-yellow-400 w-4 h-4 leading-none"
                                      >
                                        <i className="far fa-star absolute left-0 top-0 w-full h-full" />

                                        <div
                                          className="absolute left-0 top-0 overflow-hidden h-full"
                                          style={{
                                            width: `${fillPercentage}%`,
                                          }}
                                        >
                                          <i className="fas fa-star w-full h-full" />
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                                <span className="ml-2 text-gray-600 text">
                                  {`(${p.rating.rate.toFixed(1)})`}
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button
                          className="w-full p-2 rounded-xl bg-primary  text-white font-bold    dark:bg-primary dark:text-white"
                          onClick={() => AddtoCart(p)}
                        >
                          <i className="fa-solid fa-cart-shopping mx-1  "></i>
                          add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  )
}
