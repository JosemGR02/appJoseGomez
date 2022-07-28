import React from 'react'
import Item from './Item'

const ItemList = ({listaProductos}) => {

    return(

        <div style= {{display:'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap'}}>
            {listaProductos.map ((producto)=> <Item key={producto.id} producto={producto}/>)}
            
        </div>

    )
}

export default ItemList  


