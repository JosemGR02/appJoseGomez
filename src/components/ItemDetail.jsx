import React from 'react'
import ItemCount from './ItemCount'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { ContenItemD } from './Styled'
import { FaBookmark } from 'react-icons/fa'
import { FaRegBookmark } from 'react-icons/fa'




//const ItemDetail = ({producto}) => {
const ItemDetail = ({producto}) => {
    const {nombre, id, descripcion, stock, precio, imagen} = producto 
    
    const [contador, setContador] = useState (1)
    const [compra, setCompra] = useState (false)
    const [guardado, setGuardado] = useState (false)
    
    const navegar = useNavigate()
    const {agregarAlCart} = useCart()

    const onAdd = (cantidad) => {

        let prodAcomprar = {
            nombre, 
            id,
            stock, 
            precio, 
            imagen, 
            cantidad: contador
        }
        setCompra (true)
        agregarAlCart(prodAcomprar)
    }

    const volver = useNavigate()

    const onGuardar = () => {
        setGuardado (true)
    }

    return(

        <ContenItemD>
            <h2 style={{marginBottom: '30px'}}>Detalle del producto: {nombre}</h2>
            <img style={{marginBottom: '10px'}} src= {imagen} alt= {nombre} width={350}/>
            <p>id:{id}</p>
            <p>{descripcion}</p>
            <p>${precio}</p>
            { guardado ? 
            <button>
                <FaBookmark style={{ fontSize: '1.5em'}}/>
            </button>
            :
            <button onClick={onGuardar}>
                <FaRegBookmark style={{ fontSize: '1.5em'}}/>
            </button>
            }
            <p className="card-text">disponibles: {stock}</p>
            { compra ? <div style={{ gap: '30px'}}>
            <button className='btn btn-info' onClick={()=> volver('/')}>Volver a Productos</button>
            <button className='btn btn-warning' onClick={()=>{navegar('/carrito')}}>Ir al carrito</button>
            </div>
            : <ItemCount stock= {stock} initial= {1} onAdd= {onAdd} contador={contador} setContador={setContador}/>}
            
        </ContenItemD>
    )
}

    export default ItemDetail;

/*
ICONOS









eliminar/basura
<FaTrashAlt/>
<FaRegTimesCircle/>


<AiFillStar/>
<FiStar/>


<AiFillFacebook/>
<FaFacebook/>

<AiFillInstagram/>
<AiFillInstagram/>
<FaInstagram/>



telefono
<BsFillTelephoneFill/>


email
<FaEnvelope/>

carrito
<FaShoppingCart/>

favoritos
<FaRegBookmark/>
<FaBookmark/>
*/