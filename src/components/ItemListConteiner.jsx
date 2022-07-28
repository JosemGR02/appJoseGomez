import ItemCount from './ItemCount'
import { useEffect, useState } from 'react'
import ItemList from './ItemList'
import {data} from '../mock/ApiFake'

const ItemListConteiner = (props) => {
    const [listaProductos, setListaProductos] = useState ([])
    const [mensaje, setMensaje] = useState ('') //

    const [cargando, setCargando] = useState (true)

    
    useEffect(() => {
        data
        .then ((respuesta) => setListaProductos(respuesta))
        .catch (() => setMensaje('hubo un error, intenta de nuevo mas tarde'))
        .finally(()=>setCargando(false))
        
    }, [])

    return(
        <div>
            <h1>buenass, {props.name}</h1>

            {cargando ? <p>Cargando...</p> : <ItemList listaProductos={listaProductos}/>}

            {mensaje && <p>{mensaje}</p>}
        </div>
    )
}

export default ItemListConteiner;


