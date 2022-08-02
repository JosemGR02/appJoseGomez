
import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { data } from '../mock/ApiFake'


const ItemDetailConteiner = () => {
    const [producto, setProducto] = useState ({})

    const [mensaje, setMensaje] = useState ('') 

    const [cargando, setCargando] = useState (true)

    
    useEffect(() => {
        data
        .then ((respuesta) => setProducto(respuesta.find((item) => item.id === "6")))
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


