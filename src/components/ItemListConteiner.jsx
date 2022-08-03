import ItemCount from './ItemCount'
import { useEffect, useState } from 'react'
import ItemList from './ItemList'
import {data} from '../mock/ApiFake'
import { useParams } from 'react-router-dom'
const { tipocategoria } = useParams

const ItemListConteiner = (props) => {
    const [listaProductos, setListaProductos] = useState ([])
    const [mensaje, setMensaje] = useState ('') //

    const [cargando, setCargando] = useState (true)

    const { tipocategoria } = useParams()
    
    useEffect(() => {
        data
        .then ((respuesta) => {
            if (!tipocategoria){
                setListaProductos(respuesta)
            }else {
                setListaProductos(respuesta.filter((producto)=> producto.categoria === tipocategoria))
            }
        })
        .catch (() => setMensaje('hubo un error, intenta de nuevo mas tarde'))
        .finally(()=>setCargando(false))
        
    }, [tipocategoria])

    return(
        <div>
            <h1>Tienda de ropa {props.name}</h1>

            {cargando ? <p>Cargando...</p> : <ItemList listaProductos={listaProductos}/>}

            {mensaje && <p>{mensaje}</p>}
        </div>
    )
}

export default ItemListConteiner;


