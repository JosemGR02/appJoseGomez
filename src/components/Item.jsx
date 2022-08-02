import React from 'react'
import ItemCount from './ItemCount'
import { useState } from 'react'

const Item = ({producto}) => {
    const [mensaje, setMensaje] = useState (false) 
    const {imagen, nombre, descripcion, precio, stock,} = producto

    const onAdd = (cantidad) => {
        setMensaje (`agregaste ${cantidad} productos al carrito`)
    }

    return(

        <div className="card" style={{width: '18rem', margin:'5rem'}}>
            <img src={imagen} className="card-img-top" alt={nombre} />
            <div className="card-body">
                <p className="card-text">{nombre}</p>
                <p className="card-text">{descripcion}</p>
                <p className="card-text">${precio}</p>
                <p className="card-text">disponibles: {stock}</p>
            </div>
            {mensaje && <p>{mensaje}</p>}
            <ItemCount initial= {1} stock= {stock} onAdd= {onAdd}/>
            <button className='btn btn-primary'>Ver mas</button>
        </div>

    )
}

export default Item 
