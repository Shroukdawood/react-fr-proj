import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MainApi } from '../../Api/Api';

export default function Products() {
 console.log("Mount1") ;
  const [products , setProducts] = useState(null);
  const [testState , setTestState] = useState (true);

 useEffect(() => {
    MainApi.get('/products')
    .then((data) => setProducts(data.products));
 } , [testState ]);
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
