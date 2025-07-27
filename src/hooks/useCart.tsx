import { toast } from "react-toastify";
import type { productType } from "../lib/types";
import { useState } from "react";

export function useCart() {
    const [products, setproducts] = useState<productType[]>(JSON.parse(localStorage.getItem('items')||'[]'))
   
    function AddtoCart(p:productType){
        products.push(p);
        localStorage.setItem('items',JSON.stringify(products))
        toast.success('Product added Successfully',{position:'top-center'});
    }
    function deleteProduct(i:number){
        products.splice(i,1);
        localStorage.setItem('items',JSON.stringify(products))
        toast.success('Product deleted Successfully',{position:'top-center'});

    }
  return {AddtoCart,deleteProduct,products}
}
