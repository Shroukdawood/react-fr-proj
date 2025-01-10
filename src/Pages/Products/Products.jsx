import React, { useEffect, useState } from 'react'
import { useProductContext } from '../../contexts/ProductContext';

export default function Products() {
 console.log("Mount1") ;
//   const [products , setProducts] = useState(null);
  const [testState , setTestState] = useState (true);
const {products , getProducts ,getSingleproduct}= useProductContext();
const [ singleProduct , setSingleProduct ] = useState(null);
 useEffect(() => {
 getProducts() } , [testState ]);
 console.log("Mount2") ;
   
const handelShowSingleproduct = () => {
    getSingleproduct(5, (data) => {
        setSingleProduct(data)
    });
}
 return (
    <div>
     <button onClick={() => setTestState((prev) => !prev)}> Change State</button>
<button onClick={handelShowSingleproduct}>SingleProduct</button>
{singleProduct && <div>
    <h2>{setSingleProduct.title}</h2>
    
    </div>}
        {console.log("Render")}
        {!products && <div>loading......</div>}
        {products && products.map((product,i) => <div key={i}>{product.title}</div>)}
     </div>
  )
}
