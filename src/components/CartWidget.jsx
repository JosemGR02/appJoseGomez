import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartWidget = () => {
    const {cartCantidad} = useCart()

    return(
        <Link className="nav-link" to='/carrito'><FaShoppingCart style={{  fontSize: '1.5em'}}/>
            <span>{cartCantidad() || '' }</span>
        </Link>
    )
}

export default CartWidget;

