export const LocalStoragejson = (name) =>{
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

export const database = new LocalStoragejson("carrito");

// export const InstanceLocalStorage = (name) =>{
//     return new  LocalStoragejson (name)
// }
