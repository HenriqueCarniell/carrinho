import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/header';
import Ofertas from './components/ofertas/ofertas';
import Itens from './components/itens/itens';
import Carrinho from './components/carrinho/carrinho';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <div>
            <Header />
            <Ofertas />
            <Itens />
          </div>} />
        <Route path='/carrinho' element={
          <div>
            <Header />
            <Carrinho />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
