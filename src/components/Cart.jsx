import React from 'react'
import { useNavigate } from 'react-router-dom'
import CartItem from './CartItem'
import { useCart } from '../context/CartContext'
import cartEmpty from '../assets/imagenes/cartEmpty.webp'
import images from '../assets/imagenes/images.png'
import { ContenBotonCart } from './Styled'
import { ContenVacio } from './Styled'

const Cart = () => {
    const navegar = useNavigate()
    const {cart, vaciarCart, cartCantTotal} = useCart()

    return (
        <div>
            {!cart.length 
            ?
            <>
                <ContenVacio style={{display: 'flex', flexDirection: 'column'}}>
                    <h1 style={{marginBottom: '60px', marginTop: '40px', fontFamily: 'Tiro Devanagari Hindi'}}>El carrito esta vacio!!</h1>
                    <img src= {cartEmpty} alt="" style={{width: '100', marginBottom: '20px'}}/>
                    <h4 style={{marginBottom: '10px', marginTop: '10px', fontFamily: 'Tiro Devanagari Hindi'}}>Te invitamos a ver nuestros productos</h4>
                    <button style={{ padding: '15px 35px', borderRadius: '15px', border: 'none', color: 'rgb(4, 5, 48)', background: 'rgb(27, 134, 184)', fontFamily: 'Bebas Neue', fontSize: '20px'}} className='btn btn-primary' onClick={()=> navegar('/')}>Ir a Productos</button>
                </ContenVacio>
            </>
            :
            <>
                <h1 style={{display: 'flex', justifyContent: 'center', fontFamily: 'Tiro Devanagari Hindi'}}>Carrito de Compras</h1>
                {cart.map((item)=> <CartItem key={item.id} item={item}/>)}
                <h4 style={{display: 'flex', justifyContent: 'center', fontFamily: 'Roboto Condensed'}}>Total a pagar: $ {cartCantTotal()}</h4>

            <ContenBotonCart>
                <button className='btn btn-warning' onClick={()=> navegar('/checkout')}>Finalizar compra</button>
                <button className='btn btn-danger' onClick={vaciarCart}>Vaciar Productos del carrito</button>
            </ContenBotonCart>

            <div>
                <h3 style={{display: 'flex', justifyContent: 'center', fontFamily: 'Tiro Devanagari Hindi'}}>Metodos de Pago</h3>
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




<div style={{display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center', height: '100vh', marginBottom: '100px'}}>
                    <h1 style={{marginBottom: '60px', marginTop: '40px'}}>El carrito esta vacio!!</h1>
                    <img src= {cartEmpty} alt="" style={{width: '100', marginBottom: '20px'}}/>
                    <h4 style={{marginBottom: '10px', marginTop: '10px'}}>Te invitamos a ver nuestros productos</h4>
                    <button style={{ padding: '15px 35px', borderRadius: '15px', border: 'none', color: 'rgb(4, 5, 48)', background: 'rgb(27, 134, 184)', fontFamily: 'Bebas Neue', fontSize: '20px'}} className='btn btn-primary' onClick={()=> navegar('/')}>Ir a Productos</button>
                </div>













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