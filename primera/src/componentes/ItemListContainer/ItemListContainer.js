import React, { useEffect, useState } from 'react';
import { getProductos, getProductosByCategoria } from '../../productos/arrayProductos';
import Itemlist from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [producto, setProductos] = useState([]);
  const { categoryID } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await (categoryID
          ? getProductosByCategoria(categoryID)
          : getProductos()); 
        setProductos(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [categoryID]);

  return (
    <div>
      <Itemlist producto={producto} />
    </div>
  );
};

export default ItemListContainer;
