import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id,imagen,marca,descripcion,precio,stock,nombre}) => {
  return (
    <div>
        <article className='CardItem'>
          <header className='Header'>
            <h2 className='ItemHeader'>
                {nombre}
            </h2>
          </header>
        <picture>
            <img src={imagen} alt={nombre} className='ItemImg'></img>
        </picture>
        <section>
            <p className='Info'>
                Marca: {marca}
            </p>
            <p className='Info'>
               Descripcion: {descripcion}
            </p>
            <p className='Info'>
                Precio: ${precio}
            </p>
        </section>
        <footer className='InfoFooter'>
          <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('cantidad agrega', quantity)}/>
        </footer>
        </article>
    </div>
  )
}

export default ItemDetail