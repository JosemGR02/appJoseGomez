
import React from 'react'
import { useCart } from '../context/CartContext'
import { FaTrashAlt } from 'react-icons/fa'
import { FaRegTimesCircle } from 'react-icons/fa'


export const Favorites = ({item}) => {
    const {removerProdFav} = useCart()

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '1.5rem', marginLeft: '-5rem'}}>
            <img src={item.imagen} alt={item.nombre} style={{width: '170px', height: '150px'}}/>
            <span>{item.nombre}</span>
            <span>${item.precio}</span>
            <span>{item.cantidad}</span>
            <button className='btn btn-dark' onClick={()=>removerProdFav(item.id)}><FaRegTimesCircle style={{ fontSize: '1.5em'}}/> </button>
        </div>
    )
}

export default Favorites

/*

<Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={item.imagen} alt={item.nombre} />
    <Card.Body>
        <Card.Title>{item.nombre}</Card.Title>
        <Card.Text>
            ${item.precio}
            {item.cantidad}
        </Card.Text>
        <button className='btn btn-dark' onClick={()=>removerProdFav(item.id)}> X </button>
    </Card.Body>
</Card>
*/