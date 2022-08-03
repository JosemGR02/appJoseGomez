
import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { data } from '../mock/ApiFake'
import { useParams } from 'react-router-dom'


const ItemDetailConteiner = () => {
    const [producto, setProducto] = useState ({})

    const [mensaje, setMensaje] = useState ('') 

    const [cargando, setCargando] = useState (true)
    const { id } = useParams()
    
    useEffect(() => {
        data
        .then ((respuesta) => setProducto(respuesta.find((item) => item.id === id)))
        .catch (() => setMensaje('hubo un error, intenta de nuevo mas tarde'))
        .finally(()=> setCargando(false))
        
    }, [])
    
    console.log('producto',producto)

    return(
        <div>
            {cargando ? <p>Cargando...</p> : <ItemDetail producto={producto}/>}
            {mensaje && <p>{mensaje}</p>}
        </div>
    )
}

export default ItemDetailConteiner;


