import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Checkout from '../components/Checkout';
import Nabvar from '../components/Navbar';
import { useState, useEffect } from 'react';
import Constants from '../helpers/Constants';
import {getData} from "../helpers/ApiConsume";
import { AppContext } from '../hooks/AppContext';




function AppRoutes() {

  const [products, setProducts] = useState([]);
  // const {product, setProduct}=useContext(AppContext)
  

  useEffect(() => {
    async function obtenerDatos(){
      const response = await getData(Constants.urlAPI);
      setProducts(response.data);
    }
    obtenerDatos();
  }, [setProducts])

  return (
      <>
        <div className='container'>
            <AppContext.Provider value={{products, setProducts}}>
                <BrowserRouter>
                <Nabvar/>
                    <Routes>
                    <Route path='/' element={<Home/>} />  
                    <Route path='/checkout' element={<Checkout/>} />
                    <Route path='/*' element={<Navigate to="/" />} />
                  </Routes>
                </BrowserRouter>  
              </AppContext.Provider>
        </div>
      </>
  );
}

export default AppRoutes;
