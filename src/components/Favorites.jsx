import React from 'react'
import { useNavigate } from 'react-router-dom'
import CartItem from './CartItem'
import { useCart } from '../context/CartContext'
import cartEmpty from '../assets/imagenes/cartEmpty.webp'
import images from '../assets/imagenes/images.png'
import { AiFillStar } from 'react-icons/ai'
import { FiStar } from 'react-icons/fi'


const Cart = () => {
    const navegar = useNavigate()
    const {favoritos, vaciarFav, favCantTotal} = useCart()

    return (
        <div>
            {!favoritos.length 
            ?
            <>
                <div style={{display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center', height: '100vh'}}>
                    <h1 style={{marginBottom: '20px', fontFamily: 'Tiro Devanagari Hindi' }}>Favoritos esta vacio!!</h1>
                    <FiStar style={{ fontSize: '5em'}}/>
                    <h5>Te invitamos a ver nuestros productos</h5>
                    <button style={{ padding: '15px 35px', borderRadius: '15px', border: 'none', color: 'rgb(4, 5, 48)', background: 'rgb(27, 134, 184)', fontFamily: 'Bebas Neue', fontSize: '18px'}} className='btn btn-primary' onClick={()=> navegar('/')}>Ir a Productos</button>
                </div>
            </>
            :
            <>
            <div>
                <h1 style={{display: 'flex', justifyContent: 'center', fontFamily: 'Tiro Devanagari Hindi'}}>Favoritos 
                <AiFillStar style={{ fontSize: '1.5em'}}/>
                </h1>
                {favoritos.map((item)=> <CartItem key={item.id} item={item}/>)}
                <button className='btn btn-danger' onClick={vaciarFav}>Vaciar Productos de Favoritos</button>
            </div>
            </>
            }
        </div>
    )
}

export default Cart