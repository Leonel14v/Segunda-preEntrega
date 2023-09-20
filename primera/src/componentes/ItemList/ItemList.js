import React from 'react'
import Item from '../Item/Item'

export const Itemlist = ({producto}) => {
  return (
    <div className='ListGroup'>
     {producto.map(prod => <Item key={prod.id} {...prod}/>)}
    </div>
  )
}
export default Itemlist