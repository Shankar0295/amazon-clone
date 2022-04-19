import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CartProvider } from './cartContext';
import reducer, { initialState } from './reducer';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
//Create a root
const root = ReactDOM.createRoot(container)
//Initial render
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider initialState={initialState} reducer={reducer}>
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);

