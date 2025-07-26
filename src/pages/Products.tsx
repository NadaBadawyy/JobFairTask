import { Link } from "react-router-dom";

import { useProducts } from "../hooks/useProducts";
import Loading from "../components/Loading";
import { useCart } from "../hooks/useCart";

export default function Products() {
  const { products } = useProducts();
  const { AddtoCart } = useCart();
  return (
    <>
      {products.length > 0 ? (
        <>
          <div className="mt-5  md:mt-20 lg:mt-5">
            <div className="row p-2 gap-5  items-center justify-center">
              {products.map((p) => {
                return (
                  <div
                    className=" w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 text-left "
                    key={p.id}
                  >
                    <div className="border hover:scale-105 hover:shadow-md border-primary dark:border-primary rounded-lg group p-2 dark:bg-[#030119] dark:hover:shadow-xl hover:shadow-primary ">
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
                        className="w-full p-2 rounded-xl bg-primary  text-white font-bold    dark:bg-primary dark:text-white"
                        onClick={() => AddtoCart(p)}
                      >
                        <i className="fa-solid fa-cart-shopping mx-1  "></i>
                        add to cart
                      </button>
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
    </>
  );
}
