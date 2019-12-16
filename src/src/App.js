/*global chrome*/
import React, { useState } from 'react';
import Request from './Request';
import Cart from './Cart';
import { loadLoginInfo, logout } from './authlib';
import { tsPropertySignature } from '@babel/types';

function App() {

  const [page, setPage] = useState('cart');
  const [url, setUrl] = useState('');


  function openRequest() {
    setPage('request');
  }
  function openCart() {
    setPage('cart');
  }

  if (page === 'cart') {
    return (
      <div className="App">
        <Cart openRequest={openRequest}></Cart>
      </div>
    )
  } else if (page === 'request') {
    return (
      <div className="App">
        <Request openCart={openCart}></Request>
      </div>
    )
  }
}

export default App;
