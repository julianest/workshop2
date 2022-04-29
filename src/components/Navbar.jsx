import React from 'react';
import { Link } from 'react-router-dom';

const Nabvar = () =>{
  return (
    <div>
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="btn btn-outline-success" type="submit">Checkout</button>
             </div>
        </nav>
    </div>
  )
}

export default Nabvar;