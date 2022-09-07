
import React from 'react'
import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from "firebase/firestore";


const ItemDetailConteiner = () => {
    const [producto, setProducto] = useState ({})

    const [mensaje, setMensaje] = useState ('') 

    const [cargando, setCargando] = useState (true)
    const { id } = useParams()
    


    useEffect(() => {
        const db = getFirestore();

        const productRef = doc( db, 'productos', id)
        setCargando(true)
        getDoc(productRef)
        .then((snapshot) => {
            if (snapshot.exists()){
                const data = {
                    id: snapshot.id,
                    ...snapshot.data()
                }
                setProducto(data)
            }
        })
        .catch (() => setMensaje('hubo un error, intenta de nuevo mas tarde'))
        .catch((error)=> console.error(error))
        .finally(()=> setCargando(false))
    }, [id])
    

    return(
        <div>
            {cargando ? <p>Cargando...</p> : <ItemDetail producto={producto}/>}
            {mensaje && <p>{mensaje}</p>}
        </div>
    )
}

export default ItemDetailConteiner;




