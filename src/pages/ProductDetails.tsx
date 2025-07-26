import { useParams } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import { useEffect } from "react";

export default function ProductDetails() {
  const { id } = useParams();
  const { getSpecificProduct, product } = useProducts();
  useEffect(() => {
    id && getSpecificProduct(id);
  }, []);
  return (
    <>
      {product && (
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
                <p className="text-slate-600 dark:text-gray-400 text-base  dark:text-white">
                  <i className="fas fa-star text-yellow-300"></i>
                  {product.rating.rate}
                </p>
              </div>
              <p className="md:text-4xl text-2xl text-primary font-bold my-5">$ {product.price}</p>
              <p className="text-xl font-semibold capitalize my-2">description:</p>
              <p className="text-gray-400 my-3">{product.description}</p>
              <button className="w-full bg-primary text-white my-5 p-3 rounded-2xl font-bold sm:text-xl   ">Add to Cart</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
