import { useEffect, useState } from "react"
import type { productType } from "../lib/types"
import axios from "axios"

export function useProducts() {

    const [products, setproducts] = useState<productType[]>([])
    async function getProducts(){
    const res=await axios.get('https://fakestoreapi.com/products')
    console.log(res.data);
    
       setproducts(res.data);
    }
    useEffect(()=>{
        getProducts();
    },[])
    
  return {products}
}
