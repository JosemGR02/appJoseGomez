import React from 'react'
import ItemCount from './ItemCount'
import { useNavigate } from 'react-router-dom'


const ItemDetail = ({producto}) => {

    const onAdd = () => {
        console.log('Lo agregaste al carrito')
    }
    const volver = useNavigate()
    return(

        <div >
            <h2>Detalle del producto: {producto.nombre}</h2>
            <img src= {producto.imagen} alt= {producto.nombre} width={350}/>
            <p>{producto.descripcion}</p>
            <p className="card-text">disponibles: {producto.stock}</p>
            <ItemCount stock= {producto.stock} initial= {1} onAdd= {onAdd}/>
            <button className='btn btn-info' onClick={()=> volver('/productos')}>Volver a Productos</button>
        </div>
    )
}

    export default ItemDetail  


