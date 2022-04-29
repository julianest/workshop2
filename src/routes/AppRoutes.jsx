import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import React, { useContext } from 'react';
import { AppContext } from '../hooks/AppContext';
import Home from '../components/Home';
import Checkout from '../components/Checkout';
import Nabvar from '../components/Navbar';


function AppRoutes() {

  const {product, setProduct}=useContext(AppRoutes)
  const isEmpty = Object.keys(product).length;

  return (
      <>
        <div className='container'>
            {isEmpty>0 ? (
            <AppContext.Provider value={{product, setProduct}}>
              <Nabvar/>
                <BrowserRouter>
                    <Routes>
                    <Route path='/' element={<Home/>} />  
                    <Route path='/checkout' element={<Checkout/>} />
                    <Route path='/*' element={<Navigate to="/" />} />
                  </Routes>
                </BrowserRouter>  
              </AppContext.Provider>) 
              : <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
              }
        </div>
      </>
  );
}

export default AppRoutes;
