import { useParams } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import { useEffect } from "react";
import Loading from "../components/Loading";
import { useCart } from "../hooks/useCart";

export default function ProductDetails() {
  const { id } = useParams();
  const { getSpecificProduct, product } = useProducts();
  const {AddtoCart}=useCart()
  useEffect(() => {
    id && getSpecificProduct(id);
  }, []);
  return (
    <>
      {product ? (
        <div className="mt-10">
          <div className="row md:flex-row flex-col justify-center items-center   ">
            <div className="md:w-1/2 ">
              <img src={product.image} className="  w-[450px]  " />
            </div>

            <div className="details md:w-1/2 w-full p-5  ">
              <div className="bg-primary text-white p-2 rounded-3xl w-fit">
                <p className="text-sm">{product.category}</p>
              </div>
              <p className="mt-10 mb-5 md:text-3xl text-2xl  font-bold">{product.title}</p>
              <div className="rating">
                <div className="flex items-center">
                              <div className="flex">
                                {[1, 2, 3, 4, 5].map((star) => {
                                  const fillPercentage =
                                    Math.max(
                                      0,
                                      Math.min(1, product.rating.rate - star + 1)
                                    ) * 100;

                                  return (
                                    <div
                                      key={star}
                                      className="relative inline-block text-yellow-400 w-4 h-4 leading-none"
                                    >
                                      <i className="far fa-star absolute left-0 top-0 w-full h-full" />

                                      <div
                                        className="absolute left-0 top-0 overflow-hidden h-full"
                                        style={{ width: `${fillPercentage}%` }}
                                      >
                                        <i className="fas fa-star w-full h-full" />
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                              <span className="ml-2 text-gray-600 text">
                                {`(${product.rating.rate.toFixed(1)})`}
                              </span>
                            </div>
              </div>
              <p className="md:text-4xl text-2xl text-primary font-bold my-5">$ {product.price}</p>
              <p className="text-xl font-semibold capitalize my-2">description:</p>
              <p className="text-gray-400 my-3">{product.description}</p>
              <button className="w-full bg-primary text-white my-5 p-3 rounded-2xl font-bold sm:text-xl   " onClick={()=>AddtoCart(product)}>
                
                <i className="fa-solid fa-cart-shopping mx-1  "></i>Add to Cart</button>
            </div>
          </div>
        </div>
      ):<>
      <Loading/>
      
      </>}
    </>
  );
}
