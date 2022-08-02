import React from 'react'
import ItemCount from './ItemCount'


const ItemDetail = ({productoA}) => {


    const onAdd = () => {
        console.log('Lo agregaste al carrito')
    }

    return(

        <div>
            <h2>Detalle del producto: {productoA.nombre}</h2>
            <img src= {productoA.imagen} alt= {productoA.nombre}/>
            <p>{productoA.descripcion}</p>
            <p className="card-text">disponibles: {stock}</p>
            <ItemCount stock= {productoA.stock} initial= {1} onAdd= {onAdd}/>
            
        </div>
    )
}

    export default ItemDetail  


