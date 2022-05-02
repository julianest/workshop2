import React from 'react';
import { AppContext } from '../hooks/AppContext';
import './Detalle.css';
import {Home} from '../components/Home';

export const Detalle = ({ isOpen, closeDetail, products, }) => {

    const handleModalDialogClick = (e) =>{
        e.stopPropagation();
    }

    return (
        console.log(products),
        <div className={`detalle ${isOpen && 'detalle-open'}`} onClick={closeDetail}>
            <div className="detalle-content" onClick={handleModalDialogClick}>
                <h1>Detalle {products.id}</h1>
                <p>Aquí va una descripción {console.log()}</p>
                <button onClick={closeDetail}>
                    Close Detail
                </button>
            </div>
        </div>
    );
}

export default Detalle