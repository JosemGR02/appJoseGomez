import React from 'react'
import { useNavigate } from 'react-router-dom'


const Item = ({ producto }) => {

    const { imagen, nombre, descripcion, precio } = producto
    const navegar = useNavigate()

    return (

        <div className="card" style={{ width: '16rem', margin: '2rem', marginTop: '12rem', marginBottom: '-2rem'}}>
            <img style={{ width: '16rem', height: '18rem'}} src={imagen} className="card-img-top" alt={nombre} />
            <div className="card-body">
                <p className="card-text">{nombre}</p>
                <p className="card-text">{descripcion}</p>
                <p className="card-text">${precio}</p>
            </div>
            <button className='btn btn-primary' onClick={() => navegar(`/detalle/${producto.id}`)}>Ver mas</button>
        </div>

    )
}

export default Item 
