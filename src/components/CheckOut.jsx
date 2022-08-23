import React from 'react'
import {collection, addDoc, serverTimestamp} from 'firebase/firestore'
import { db } from '../firebase/Firebase'
import { useCart } from '../context/CartContext'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { useState} from 'react'

export const CheckOut = () => {
    const [comprador, setComprador] = useState({})
    const [orderId, setOrderId] = useState('')
    const [cart, cartCantTotal, vaciarCart] = useCart()
    const navegar = useNavigate()

    const datosDelComprador = (evento) => {
        setComprador({
            ...comprador,
            [evento.target.name]: evento.target.value
        })
    }

    const finalizarCompra = (evento) => {
        evento.preventDefaul() 
        if(Object.values(comprador).length !== 3){
            Swal.fire({ title: "Por favor complete todos los campos antes de enviar"})
        }else{
            const coleccionVentas = collection( db, "ventas")
            addDoc(coleccionVentas, {
                comprador,
                items: cart,
                total: cartCantTotal(),
                date: serverTimestamp()
            })
            .then((resp)=> {
                setOrderId(resp.id)
                vaciarCart()
            })
            .catch((error)=> console.log(error))
            }
        }


    return (
        <>
            { !orderId 
                ?
                <div>
                <h2>Comprar</h2>
                <form onSubmit={finalizarCompra}>
                    <label for="inputAddress" class="form-label">Nombre</label>
                    <input type="text" placeholder='pepito' name='nombre' onChange={datosDelComprador}/>
                    <label for="inputPassword" class="form-label">Apellido</label>
                    <input type="text" placeholder='gonzalez' name='apellido' onChange={datosDelComprador}/>
                    <label for="inputEmail4" class="form-label">Correo electronico</label>
                    <input type="email" name='email' onChange={datosDelComprador}/>
                    <label for="inputAddress2" class="form-label">Telefono</label>
                    <input type="number" name='number' onChange={datosDelComprador}/>
                    <button type='submit'>Finalizar Compra</button>
                </form>
            </div>
                :
            <div>
                <h2>Gracias por su compra!!</h2>
                <h3>El ID del pedido de su compra es: {orderId}</h3>
                <button type='submit' className='btn btn-primary' onClick={()=> navegar('/')}>Volver a la Home</button>
            </div>
            }
        </>
        
    )
}
export default CheckOut

