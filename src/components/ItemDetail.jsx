import React from 'react'
import ItemCount from './ItemCount'


const ItemDetail = ({producto}) => {


    const onAdd = () => {
        console.log('Lo agregaste al carrito')
    }

    return(

        <div>
            <h2>Detalle del producto: {producto.nombre}</h2>
            <img src= {producto.imagen} alt= {producto.nombre} width={300}/>
            <p>{producto.descripcion}</p>
            <p className="card-text">disponibles: {producto.stock}</p>
            <ItemCount stock= {producto.stock} initial= {1} onAdd= {onAdd}/>
            
        </div>
    )
}

    export default ItemDetail  


