import React from 'react'
import { useNavigate } from 'react-router-dom'
import CartItem from './CartItem'
import { useCart } from '../context/CartContext'
import cartEmpty from '../assets/imagenes/cartEmpty.webp'
import images from '../assets/imagenes/images.png'

const Cart = () => {
    const navegar = useNavigate()
    const {cart, vaciarCart, cartCantTotal} = useCart()

    return (
        <div>
            {!cart.length 
            ?
            <>
                <div style={{display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center', height: '100vh'}}>
                    <h2 style={{marginBottom: '20px'}}>El carrito esta vacio!!</h2>
                    <img src= {cartEmpty} alt="" style={{width: '100'}}/>
                    <h4>Te invitamos a ver nuestros productos</h4>
                    <button style={{ padding: '15px 35px', borderRadius: '15px', border: 'none', color: 'rgb(4, 5, 48)', background: 'rgb(27, 134, 184)', fontFamily: 'Bebas Neue', fontSize: '20px'}} className='btn btn-primary' onClick={()=> navegar('/')}>Ir a Productos</button>
                </div>
            </>
            :
            <>
                <h2 style={{display: 'flex', justifyContent: 'center'}}>Carrito de Compras</h2>
                {cart.map((item)=> <CartItem key={item.id} item={item}/>)}
                <span style={{display: 'flex', justifyContent: 'center'}}>Total a pagar: $ {cartCantTotal()}</span>

            <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', gap: '30px', marginBottom: '20px', marginTop: '30px'}}>
                <button className='btn btn-warning' onClick={()=> navegar('/checkout')}>Finalizar compra</button>
                <button className='btn btn-danger' onClick={vaciarCart}>Vaciar Productos del carrito</button>
            </div>

            <div>
                <h3 style={{display: 'flex', justifyContent: 'center'}}>Metodos de Pago</h3>
            </div>
            
            <div style={{display: 'flex', justifyContent: 'center', marginBottom: '40px'}}>
                <img src= {images} alt="" style={{width: '100'}}/>
            </div>
            </>
            }
        </div>
    )
}

export default Cart


/* 
TABLAAA

import Table from 'react-bootstrap/Table';

function BasicExample() {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default BasicExample;



*/