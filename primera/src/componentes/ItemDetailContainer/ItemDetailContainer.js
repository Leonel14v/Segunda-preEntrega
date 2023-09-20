import React, { useState, useEffect } from 'react';
import { getProductosById } from '../../productos/arrayProductos';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const { itemId } = useParams(); // Llamar a useParams como función para obtener los parámetros

    useEffect(() => {
        getProductosById(itemId)
            .then(response => {
                setProducto(response);
            })
            .catch(error => {
                console.error(error);
            });
    }, [itemId]); // Agregar itemId como dependencia

    return (
        <div className='ItemDetailContainer'>
            {producto && <ItemDetail {...producto} />}
        </div>
    );
};

export default ItemDetailContainer;
