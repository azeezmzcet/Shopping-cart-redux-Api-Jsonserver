
import React, { useEffect } from 'react';
import  {connect}  from 'react-redux';
import  {fetchProducts,addToCart } from './actions';
import { CiHeart } from "react-icons/ci";
import { PiCurrencyInrBold } from "react-icons/pi";







const ProductList = ({ products, error, fetchProducts,addToCart }) => {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (!products) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      <h2 style={{textDecoration: 'underline'}}>Products:</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
          <img src={product.image} alt={product.image} className='aa' />
            <div className='dd'>{product.name}</div> 
            <div className='ff'> <PiCurrencyInrBold /> :{product.price}</div>
            <div className='gg'><button onClick={() => addToCart(product)}> <CiHeart />Add to Cart</button></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products
});

export default connect(mapStateToProps, { fetchProducts,addToCart })(ProductList);
