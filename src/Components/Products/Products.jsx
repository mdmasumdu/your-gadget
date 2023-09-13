/* eslint-disable react/prop-types */

import Product from "./product";



const Products = ({products,buyHandler}) => {
    return (
        <div className="w-2/3">
            <h1 className="text-center bg-slate-400 text-black p-4 font-bold text-2xl">Total products:{products.length}</h1>
           <div className="grid grid-cols-3 gap-5 mt-5">

        {
            products.map(product=><Product key={product.id} product={product} buyHandler={buyHandler}></Product>)
        }
           </div>
        </div>
    );
};

export default Products