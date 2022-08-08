import React from 'react'
import ItemCount from './ItemCount'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Item = ({ producto }) => {

    const { imagen, nombre, descripcion, precio, stock, } = producto

    const [mensaje, setMensaje] = useState ('') 
    
    const onAdd = (cantidad) => {
        setMensaje(`agregaste ${cantidad} productos al carrito`)
    }
    const navegar = useNavigate()

    return (

        <div className="card" style={{ width: '18rem', margin: '5rem' }}>
            <img src={imagen} className="card-img-top" alt={nombre} />
            <div className="card-body">
                <p className="card-text">{nombre}</p>
                <p className="card-text">{descripcion}</p>
                <p className="card-text">${precio}</p>
                <p className="card-text">disponibles: {stock}</p>
            </div>
            <button className='btn btn-primary' onClick={() => navegar(`/detalle/${producto.id}`)}>Ver mas</button>
        </div>

    )
}

export default Item 
