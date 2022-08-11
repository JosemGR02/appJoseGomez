
import {BsCart3} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartWidget = () => {
    const {cartCantidad} = useCart()

    return(
        <Link className="nav-link" to='/carrito'><BsCart3/>
        <span>{cartCantidad() || '' }</span>
        </Link>
    )
}

export default CartWidget;

