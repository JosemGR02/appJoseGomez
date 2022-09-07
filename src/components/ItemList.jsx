import React from 'react'
import Item from './Item'
import { ContenedorIL } from './Styled'



const ItemList = ({listaProductos}) => {

    return(
        <div>
            <ContenedorIL>
                {listaProductos.map ((producto)=> <Item key={producto.id} producto={producto}/>)}
            </ContenedorIL>
        </div>
    )
}

export default ItemList  


