import React from 'react'
import { useCart } from '../context/CartContext'
import { FaTrashAlt } from 'react-icons/fa'

export const CartItem = ({item}) => {
    const {removerItem} = useCart()
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '1.5rem', marginLeft: '-5rem'}}>
            <img src={item.imagen} alt={item.nombre} style={{width: '170px', height: '140px'}}/>
            <span>{item.nombre}</span>
            <span>${item.precio}</span>
            <span>{item.cantidad}</span>
            <button className='btn btn-dark' onClick={()=>removerItem(item.id)}><FaTrashAlt style={{ fontSize: '1.5em'}}/></button>
        </div>
    )
}

export default CartItem


/*
    
*/




/*
//prueba mescla anterior + tabla 

import { Table } from 'react-bootstrap'

const CartItem = ({ items }) => {
    const {removerItem} = useCart()

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '1.5rem', marginLeft: '-5rem'}}>
                {items.map((item)=> {
                    <tr key={item.id}>
                        <td>{item.nombre}</td>
                        <td>{item.precio} $</td>
                        <td alt={item.nombre} style={{width: '170px', height: '150px'}}>{item.imagen}</td>
                        <td>{item.cantidad}</td>
                        <td>{item.precio * item.cantidad} $</td>
                        <td>
                            <button className='btn btn-dark' onClick={()=>removerItem(item.id)}> X </button>
                        </td>
                    </tr>
                })
                }
            </tbody>
        </Table>
    )
}
*/






/*const cart = ({items, onDelete }) => {
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th>Eliminar</th>
            </tr>
        </thead>
        <tbody>
            {items.map((item)=> {
                <tr key={item.id}>
                    <td>{item.nombre}</td>
                    <td>{item.imagen}</td>
                    <td>{item.cantidad}</td>
                    <td>{item.precio} $</td>
                    <td>{item.precio * item.cantidad} $</td>
                    <td>
                        <button className='btn btn-danger' onClick={()=>onDelete(item.id)}> X </button>
                    </td>
                </tr>
            })
            }
        </tbody>
    </Table>
} */