import { createContext, useContext, useState } from "react";
import { MainApi } from "../Api/Api";

const ProductContext = createContext ({
    products:null,
    getProducts:() => {},
    getSingleproduct : () => {},
});
export const ProductProvider = ({children}) => {
   
  const [products , setProducts] = useState(null);
 

  const getProducts = (limit=20) => {
    MainApi.get(`/products?limit=${limit}`)
       .then(({data}) => setProducts(data.products));
};
   const getSingleproduct = (id=1 , cb) => {
    MainApi.get(`/products/${id}`).then(({data}) => {
        cb(data)
    });
   };
   return <ProductContext.Provider value={{products , getProducts , getSingleproduct}}>
        {children}
    </ProductContext.Provider>
};
export const useProductContext = () => useContext(ProductContext);