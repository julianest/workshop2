import React from 'react';
import { Link } from 'react-router-dom';

const Nabvar = () =>{
  return (
    <div>
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img src="https://res.cloudinary.com/docutv7ug/image/upload/v1651250626/Tiendita_f3llsk.svg" alt=""/></Link>
                <Link to="/checkout" > <button className="btn btn-outline-success" type="submit">Checkout</button></Link>
             </div>
        </nav>
    </div>
  )
}

export default Nabvar;