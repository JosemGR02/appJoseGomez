
import React from 'react'
import { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import Carrucel from './Carrucel'
import { Cargando } from './Cargando'
import { Paginación } from './Paginación'


const ItemListConteiner = (props) => {
    const [listaProductos, setListaProductos] = useState ([])
    const [mensaje, setMensaje] = useState ('') //
    const [cargando, setCargando] = useState (true)
    const { id } = useParams()
    
    


    useEffect(() => {
        const db = getFirestore();
    
        const coleccionProds = collection( db, 'productos')
        setCargando(true)
        getDocs(coleccionProds)
        .then((snapshot) => {
            const data = snapshot.docs.map((doc)=> ({id: doc.id, ...doc.data() }))
            console.log(data)
            console.log(snapshot)
            setListaProductos(data)
        })
        .catch((error)=> console.error(error))
        .catch (() => setMensaje('hubo un error, intenta de nuevo mas tarde'))
        .finally(()=> setCargando(false))
    }, [])


    useEffect(() => {
        if ( id ){
            const db = getFirestore();
    
            const coleccionQuery = query(collection( db, 'productos'), where('categoria', '==', id))
            setCargando(true)
            getDocs(coleccionQuery)
            .then((snapshot) => {
                const data = snapshot.docs.map((doc)=> ({id: doc.id, ...doc.data() }))
                console.log(data)
                setListaProductos(data)
            })
            .catch((error)=> console.error(error))
            .finally(()=> setCargando(false))
        }
    }, [ id ])
    

    return(
        <div>
            <h1>Tienda de ropa {props.name}</h1>
            <Carrucel/>

            {cargando ? <Cargando/> : <ItemList listaProductos={listaProductos}/>}
            {mensaje && <p>{mensaje}</p>}
            <Paginación/>
        </div>
    )
}

export default ItemListConteiner;

//<p>Cargando...</p>

