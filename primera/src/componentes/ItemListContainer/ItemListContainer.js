import '../ItemListContainer/itemlist.css' 
const ItemListContainer = ({greeting}) => {
  return (
      <h1 className='saludo-item'>{greeting}</h1>
  )
}

export default ItemListContainer