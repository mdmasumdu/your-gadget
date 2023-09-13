/* eslint-disable react/prop-types */


const Product = ({product,buyHandler}) => {
    const{price,title,image_url} =product;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
  <figure className="h-64"><img src={image_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>Price:{price}</p>
    <div className="card-actions justify-start">
      <button className="btn btn-primary" onClick={()=>buyHandler(product)}>Buy Now</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Product;