
import React from 'react';
import { connect } from 'react-redux';
import { deleteFromCart } from './actions';
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { PiCurrencyInrBold } from "react-icons/pi";


const ShoppingCart = ({ cart, totalAmount, deleteFromCart }) => {
  return(
  <div className='hh'>
    <h2 style={{textDecoration: 'underline'}}>Shopping Cart:-</h2>
    <ul>
    { cart && cart.map(item => (
        <li key={item.id}>
          {item.name} - <PiCurrencyInrBold />{item.price}
          <div className='mm'><button onClick={() => deleteFromCart(item.id)}>
          <MdOutlineRemoveShoppingCart />Remove</button> </div>
        </li>
        
      ))}
    </ul>
    <div className='bb'>Total Amount: <PiCurrencyInrBold />{totalAmount}</div>
  </div>
);
}; 

const mapStateToProps = (state) => ({
  cart: state.cart,
  totalAmount: state.totalAmount
});

export default connect(mapStateToProps,  { deleteFromCart })(ShoppingCart);
