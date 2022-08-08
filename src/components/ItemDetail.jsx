import React from 'react'
import ItemCount from './ItemCount'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


const ItemDetail = ({producto}) => {

    const [contador, setContador] = useState (0)
    const [compra, setCompra] = useState (false)
    const navigate = useNavigate()

    const onAdd = () => {
        setCompra (true)
        console.log('Lo agregaste al carrito')
    }
    const volver = useNavigate()
    return(

        <div >
            <h2>Detalle del producto: {producto.nombre}</h2>
            <img src= {producto.imagen} alt= {producto.nombre} width={350}/>
            <p>{producto.descripcion}</p>
            <p className="card-text">disponibles: {producto.stock}</p>
            { compra ? <div>
            <button className='btn btn-info' onClick={()=> navigate('/productos')}>Volver a Productos</button>
            <button className='btn btn-warning' onClick={()=>{navigate('/carrito')}}>Ir al carrito</button>
            </div>
            : <ItemCount stock= {producto.stock} initial= {1} onAdd= {onAdd} contador={contador} setContador={setContador}/>}
            
        </div>
    )
}

    export default ItemDetail  


