import React, { useContext} from 'react';
import { AppContext } from '../hooks/AppContext';


const Home = () =>{
const {products}= useContext(AppContext);
const porcentDisc = 10;


const discountshow = (artPrice, porcentDiscount)=>{
    const saldo = (artPrice - ((artPrice * porcentDiscount)/100)).toFixed(2); 
    return saldo
}


let database = new local2json("productosEnCart")
function local2json(name){
  // asignamos un valor o recuperamos datos almacenados
  let DB = (localStorage.getItem(name))?JSON.parse(localStorage.getItem(name)):[];

  /* metodos */
  return{
    // obtener todos los datos de la coleccion
    get : ()=>{
      return DB;
    },
    // ingresar nuevos datos
    push  : (obj)=>{
      DB.push(obj);
      localStorage.setItem(name,JSON.stringify(DB));
    },
    // ingresar una nueva coleccion
    set : (colection)=>{
      DB = colection;
      localStorage.setItem(name,JSON.stringify(DB));
    },
    // eliminar todos los datos de la coleccion
    delete  : ()=>{
      DB = [];
      localStorage.setItem(name,JSON.stringify(DB));
    }
  }
}

const addToCart = (idProduct)=>{
  database.push(idProduct)
  console.log(database.get())
}
const removeToCart = (idProduct)=>{
  database.delete(idProduct)
  console.log(idProduct)
}



  return (
    <>
      <div>
        {products.map((products, i)=>(
              <div className="card" key={products.id + i} style={{width: "18rem"}}>
                <img src={products.img} className="card-img-top" alt={products.name}/>
                <div className="card-body">
                  <h5 className="card-title">{products.name}</h5>
                  <span className="card-text">{discountshow(products.price, porcentDisc)}/kg</span> -
                  <span className="card-text">{products.price}/kg</span>
                  <button className="btn btn-primary" onClick={()=> addToCart(products)}>Agregar</button>
                  <button className="btn btn-primary" onClick={()=> removeToCart(products)}>Eliminar</button>
                </div>
              </div>
            ))}
      </div>
      
    </>
  )
}

export default Home;



