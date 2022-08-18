import React from 'react'
import { useCart } from '../context/CartContext'

export const CartItem = ({item}) => {
    const {removerItem} = useCart()
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '1.5rem', marginLeft: '-5rem'}}>
            <img src={item.imagen} alt={item.nombre} style={{width: '170px', height: '150px'}}/>
            <span>{item.nombre}</span>
            <span>${item.precio}</span>
            <span>{item.cantidad}</span>
            <button className='btn btn-dark' onClick={()=>removerItem(item.id)}> X </button>
        </div>
    )
}
export default CartItem
