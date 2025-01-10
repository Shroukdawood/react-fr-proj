import React, { useEffect, useState } from 'react'
import { MainApi } from '../../Api/Api';
import { useProductContext } from '../../contexts/ProductContext';

export default function Products() {
 console.log("Mount1") ;
//   const [products , setProducts] = useState(null);
  const [testState , setTestState] = useState (true);
const {products , getProducts}= useProductContext();
 useEffect(() => {
 getProducts() } , [testState ]);
 console.log("Mount2") ;
    return (
    <div>
     <button onClick={() => setTestState((prev) => !prev)}> Change State</button>

        {console.log("Render")}
        {!products && <div>loading......</div>}
        {products && products.map((product,i) => <div key={i}>{product.title}</div>)}
     </div>
  )
}
