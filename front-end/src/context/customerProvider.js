import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CustomerContext from './customerContext';

export default function CustomerProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const context = {
    cartProducts,
    setCartProducts,
    totalPrice,
    setTotalPrice,
  };

  return (
    <CustomerContext.Provider value={ context }>
      { children }
    </CustomerContext.Provider>
  );
}

CustomerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
