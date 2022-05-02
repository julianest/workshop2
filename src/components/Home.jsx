import React, { useContext, useState } from 'react';
import { AppContext } from '../hooks/AppContext';
import { Link } from 'react-router-dom';
import {Detalle} from '../components/Detalle';

const Home = () =>{
  const [isOpenDetail, setIsOpenDetail] = useState(false);
 
const {products}= useContext(AppContext);

const discountshow = (artPrice, porcentDiscount)=>{
    const saldo = (artPrice - ((artPrice * porcentDiscount)/100)).toFixed(2); 
    return saldo
}
const porcentDisc = 10;

console.log(products)

  const openDetail = (id) =>{
    setIsOpenDetail(true);
  }

  const closeDetail = (id) =>{
    setIsOpenDetail(false);
  }

  return (
    <>
      <div>
        {products.map((products, i)=>(
              <div className="card" key={products.id + i} style={{width: "18rem"}}>
                <img src={products.img} className="card-img-top" alt={products.name}/>
                <div className="card-body">
                  <h5 className="card-title">{products.name}</h5>
                  <span className="card-text">{discountshow(products.price, porcentDisc)}/kg</span> /
                  <span className="card-text">{products.price}/kg</span>
                  <Link id={products.id} onClick={openDetail}  to="#" className="btn btn-primary">Agregar</Link>
                  <Detalle isOpen={isOpenDetail}  id={products.id} closeDetail={closeDetail} products={products} />
                </div>
              </div>
            ))}
      </div>
    </>
  )
}

export default Home;



