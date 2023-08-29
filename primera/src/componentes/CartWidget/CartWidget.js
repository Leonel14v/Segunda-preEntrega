import '../CartWidget/cart.css'
import imagen from '../../imagen.png'
const CartWidget = () => {
  return ( <div>
     <img className='carrito-img' src={imagen} alt="carrito" />
     <span className='numero-estatico'>0</span>
     </div>
  )
}

export default CartWidget