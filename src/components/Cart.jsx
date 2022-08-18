import React from 'react'
import { useNavigate } from 'react-router-dom'
import CartItem from './CartItem'
import { useCart } from '../context/CartContext'

const Cart = () => {
    const navegar = useNavigate()
    const {cart, vaciarCart, cartCantTotal} = useCart()

    return (
        <div>
            {!cart.length 
            ?
            <>
                <h3>El carrito esta vacio!!</h3>
                <h5>Te invitamos a ver nuestros productos</h5>
                <button className='btn btn-secondary' onClick={()=> navegar('/')}>Ir a Productos</button>
            </>
            :
            <>
                <h3>El carrito de Compras</h3>
                {cart.map((item)=> <CartItem key={item.id} item={item}/>)}
                <span>Total a pagar: $ {cartCantTotal()}</span>
            <div>
                <button className='btn btn-warning'>Finalizar compra</button>
                <button className='btn btn-danger' onClick={vaciarCart}>Vaciar Productos del carrito</button>
            </div>
            </>
            }
        </div>
    )
}

export default Cart