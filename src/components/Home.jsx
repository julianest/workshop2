import React, { useContext } from 'react';
import { AppContext } from '../hooks/AppContext';
import { Link } from 'react-router-dom';

const Home = () =>{

const {products, setProducts}= useContext(AppContext);

const discountshow = (artPrice, porcentDiscount)=>{
    const saldo = (artPrice - ((artPrice * porcentDiscount)/100)).toFixed(2); 
    return saldo
}
const porcentDisc = 10;

console.log(products)

  return (
    <>
      <div>
        {products.map((products, i)=>(
              <div className="card" key={products.id + i} style={{width: "18rem"}}>
                <img src={products.img} className="card-img-top" alt={products.name}/>
                <div className="card-body">
                  <h5 className="card-title">{products.name}</h5>
                  <span className="card-text">{discountshow(products.price, porcentDisc)}</span> /
                  <span className="card-text">{products.price}</span>
                  <Link to="#" className="btn btn-primary">Agregar</Link>
                </div>
              </div>
            ))}
      </div>
    </>
  )
}

export default Home;



