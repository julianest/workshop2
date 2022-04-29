import axios from "axios";

export const getData = (url) =>{
    const api = axios.get(url)
    return api

}

// export const updateData = async (api, body) => {
//     const dataRequest = {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(body)
//     };
//     const respuesta = await fetch(api, dataRequest);
//     const data = await respuesta.json();
//     return data;
// }