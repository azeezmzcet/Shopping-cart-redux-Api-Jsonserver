
import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import ShoppingCart from './ShoppingCart';
import ProductList from './ProductList'; 

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1 style={{textDecoration: 'underline'}}>Shopping Cart App:-</h1>
        </header>
        <ProductList />                                                                                                                                       {/* Render ProductList */}
        <ShoppingCart />
      </div>
    </Provider>
  );
};


export default App;
