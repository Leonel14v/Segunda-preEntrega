import React, { useState, useEffect } from 'react';
import { getProductosById } from '../../productos/arrayProductos';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const { itemId } = useParams();
    const itemIdAsNumber = parseInt(itemId, 10);      

    useEffect(() => {
        getProductosById(itemIdAsNumber)
            .then(response => {
                setProducto(response);
                console.log("Producto obtenido:", response);
            }) 
            .catch(error => {
                console.error(error);
                console.error("Error al obtener el producto:", error);
            });
    }, [itemIdAsNumber]); // Agregar itemId como dependencia

    return (
        <div className='ItemDetailContainer'>
            {producto && <ItemDetail {...producto} />}
        </div>
    );
};

export default ItemDetailContainer;
