import React from 'react'
import { useNavigate } from 'react-router-dom';

const Checkout = () =>{
  const navigate = useNavigate()
  const getlocal = JSON.parse(localStorage.getItem("productosEnCart"));
  console.log(getlocal)


  const handleReturn =()=>{
    navigate(-1)
}
  
  return (
    <div>
        {getlocal.map((products, i)=>(
        <div className="card" key={products.id + i} style={{width: "18rem"}}>
          <img src={products.img} className="card-img-top" alt={products.name}/>
          <div className="card-body">
            <h5 className="card-title">{products.name}</h5>
            <span className="card-text">{products.price}/kg</span> -
            <span className="card-text">{products.price}/kg</span>
            {/* <button className="btn btn-primary" onClick={()=> addToCart(products)}>Agregar</button>
            <button className="btn btn-primary" onClick={()=> removeToCart(products)}>Eliminar</button> */}
            
          </div>
        </div>
      ))}
      <button onClick={handleReturn}>Atras</button>
    </div>
  )
}

export default Checkout;
