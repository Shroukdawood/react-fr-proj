import { createContext, useContext, useState } from "react";
import { MainApi } from "../Api/Api";

const ProductContext = createContext ({
    products:null,
    getProducts:() => {},
});
export const ProductProvider = ({children}) => {
   
  const [products , setProducts] = useState(null);
 

  const getProducts = (limit=20) => {
    MainApi.get(`/products?limit=${limit}`)
       .then(({data}) => setProducts(data.products));
};
   
   return <ProductContext.Provider value={{products , getProducts}}>
        {children}
    </ProductContext.Provider>
};
export const useProductContext = () => useContext(ProductContext);