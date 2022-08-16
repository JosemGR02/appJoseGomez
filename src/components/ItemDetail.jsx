import React from 'react'
import ItemCount from './ItemCount'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../context/CartContext'


//const ItemDetail = ({producto}) => {
const ItemDetail = ({producto}) => {
    const {nombre, id, descripcion, stock, precio, imagen} = producto 
    
    const [contador, setContador] = useState (0)
    const [compra, setCompra] = useState (false)
    
    const navegar = useNavigate()
    const {aÑadirAlCart} = useCart()

    const onAdd = (cantidad) => {

        let prodAcomprar = {
            nombre, 
            id,
            stock, 
            precio, 
            imagen, 
            cantidad: contador
        }
        setCompra (true)
        aÑadirAlCart(prodAcomprar)
    }

    const volver = useNavigate()

    return(

        <div >
            <h2>Detalle del producto: {nombre}</h2>
            <img src= {imagen} alt= {nombre} width={350}/>
            <p>id:{id}</p>
            <p>{descripcion}</p>
            <p>${precio}</p>
            <p className="card-text">disponibles: {stock}</p>
            { compra ? <div>
            <button className='btn btn-info' onClick={()=> volver('/productos')}>Volver a Productos</button>
            <button className='btn btn-warning' onClick={()=>{navegar('/carrito')}}>Ir al carrito</button>
            </div>
            : <ItemCount stock= {stock} initial= {1} onAdd= {onAdd} contador={contador} setContador={setContador}/>}
            
        </div>
    )
}

    export default ItemDetail  


