
import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { data } from '../mock/ApiFake'


const ItemDetailConteiner = () => {
    const [productoA, setProductoA] = useState ({})

    const [mensaje, setMensaje] = useState ('') 

    const [cargando, setCargando] = useState (true)

    
    useEffect(() => {
        data
        .then ((respuesta) => setProductoA(respuesta.find((item) => item.id === "06")))
        .catch (() => setMensaje('hubo un error, intenta de nuevo mas tarde'))
        .finally(()=> setCargando(false))
        
    }, [])
    
    console.log('productoA',productoA)

    return(
        <div>
            {cargando ? <p>Cargando...</p> : <ItemDetail producto={productoA}/>}
            {mensaje && <p>{mensaje}</p>}
        </div>
    )
}

export default ItemDetailConteiner;


