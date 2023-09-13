/* eslint-disable react/prop-types */

import Cart1 from "./Cart1";
import Total from "./Total";


const Cart = ({carts,total}) => {
    return (
        <div className="w-1/3">
            <h1 className="text-center bg-slate-400 text-black p-4 font-bold text-2xl">Cart item:{carts.length}</h1>
        {
            carts.map(cart=><Cart1 key={cart.id} cart={cart}></Cart1>)
        }
        <Total total={total}></Total>
        </div>
    );
};

export default Cart;