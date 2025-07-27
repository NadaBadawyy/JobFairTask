import { useEffect, useState } from "react"
import type { productType } from "../lib/types"
import axios from "axios"

export function useProducts() {
  const [product, setproduct] = useState<productType|null>(null)
  const [FilteredProducts, setFilteredProducts] = useState<productType[]|null>(null)
  const [products, setproducts] = useState<productType[]>([])
  const [topProducts, settopProducts] = useState<productType[]>([])
  
    async function getProducts(){
    const res=await axios.get('https://fakestoreapi.com/products')    
       setFilteredProducts(res.data);
       setproducts(res.data)
       HomeFiltering(res.data)
    }
    async function getSpecificProduct(id:string){
      const res=await axios.get(`https://fakestoreapi.com/products/${id}`)
      setproduct(res.data)
    }
      
  const sortByPriceAsc = () => {
        const sorted = [...products].sort((a, b) => a.price - b.price);
        setFilteredProducts(sorted);
    };

    const sortByPriceDesc = () => {
        const sorted = [...products].sort((a, b) => b.price - a.price);
        setFilteredProducts(sorted);
    };
    const sortByRating = () => {
        const sorted = [...products].sort((a, b) => b.rating.rate - a.rating.rate);
        setFilteredProducts(sorted);
    };
    const sortByNameAsc=()=>{
      const sorted = [...products].sort((a,b)=>
      a.title.localeCompare(b.title)
      );
      setFilteredProducts(sorted)
    }
    const sortByNameDesc=()=>{
      const sorted = [...products].sort((a,b)=>
      b.title.localeCompare(a.title)
      );
      setFilteredProducts(sorted)
    }
    const HomeFiltering=(producttofilter:productType[])=>{
      
     const sorted = [...producttofilter].sort((a, b) => b.rating.rate - a.rating.rate);
    const top4= sorted.slice(0,4);

    
    settopProducts(top4);
    }
    function filtering(param:string){
      if(param=='h') sortByPriceAsc();
      else if(param=='l') sortByPriceDesc();
      else if(param=='t') sortByRating();
      else if(param=='a') sortByNameAsc();
      else if(param=='z') sortByNameDesc();
     
    }
    function handleSearch(val: string) {
      const value= val.toLowerCase()
      
      
    setFilteredProducts(products.filter((p) => {
      const title=p.title.split(" ").slice(0, 2).join(" ")

      return title.includes(value)

    }));
  }
    useEffect(()=>{
      getProducts();
     
      
    },[])
    
    
  return {FilteredProducts,filtering,getSpecificProduct,product,topProducts,handleSearch}
}
