import React from 'react'
import '../Item/Item.css'
import { Link } from 'react-router-dom'
const Item = ({id,nombre,imagen,precio,stock}) => {
  return (
    <div className='container'>
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={imagen} alt={nombre} className='Item-imagen'></img>
            </picture>
            <section>
                <p className='Info'>
                    Precio: ${precio}
                </p>
                <p className='Info'>
                    stock disponible: {stock}
                </p>
            </section>
            <footer className='ItemFooter'>
                <Link to={`/segunda-entrega/primera/item/${id}`} className='Option'>Ver Detalle</Link>
            </footer>
        </article>
        </div>
  )
}

export default Item