/* eslint-disable react/prop-types */


const Cart1 = ({cart}) => {
    return (
        <div>
           <li>{cart.title} <span>{cart.price}</span></li> 
        </div>
    );
};

export default Cart1;