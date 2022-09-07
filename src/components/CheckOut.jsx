import React from 'react'
import {collection, addDoc, serverTimestamp} from 'firebase/firestore'
import { db } from '../firebase/Firebase'
import { useCart } from '../context/CartContext'
import Swal from 'sweetalert2'
import { useState} from 'react'
import { useNavigate } from 'react-router-dom'



const CheckOut = () => {
    const [comprador, setComprador] = useState({})
    const [orderId, setOrderId] = useState('')
    const {cart, cartCantTotal, vaciarCart} = useCart()
    const navegar = useNavigate()

    const datosDelComprador = (evento) => {
        setComprador({
            ...comprador,
            [evento.target.name]: evento.target.value
        })
    }

    const finalizarCompra = (evento) => {
        evento.preventDefault() 
        
        if(Object.values(comprador).length !== 4){

            Swal.fire({ title: "Por favor complete todos los campos antes de enviar"})

        }else{
            const coleccionVentas = collection( db , "ventas")
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
                <h2 style={{ textAlign: 'center', marginTop: '40px', marginBottom: '50px', fontFamily: 'Tiro Devanagari Hindi'}}>Ingrese sus datos para finalizar la compra</h2>
                <form onSubmit={finalizarCompra} style={{display: 'flex', flexDirection: 'column', justifyContent:'center', textAlign: 'center'}}>
                    <label for="inputAddress" class="form-label">Nombre</label>
                    <input type="text" placeholder='pepito' name='nombre' onChange={datosDelComprador}/>
                    <label for="inputPassword" class="form-label">Apellido</label>
                    <input type="text" placeholder='gonzalez' name='apellido' onChange={datosDelComprador}/>
                    <label for="inputEmail4" id="inputPrimero" class="form-label">Correo electronico</label>
                    <input type="email" name='primerEmail' onChange={datosDelComprador}/>
                    <label for="inputAddress2" class="form-label">Telefono</label>
                    <input type="number" name='number' onChange={datosDelComprador}/>
                    <button type='submit'>Finalizar Compra</button>
                </form> 
            </div>
                :
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginBottom: '40px'}}>
                <h2 style={{ textAlign: 'center', marginTop: '40px', marginBottom: '50px', fontFamily: 'Tiro Devanagari Hindi'}}>Gracias por su compra!!</h2>
                <h3 style={{ textAlign: 'center', marginTop: '40px', marginBottom: '50px', fontFamily: 'Tiro Devanagari Hindi'}}>Tu pedido: {orderId}, ya ha sido registrado</h3>
                <button style={{ fontFamily: 'Bebas Neue'}} type='submit' className='btn btn-primary' onClick={()=> navegar('/')}>Volver a la Home</button>
            </div>
            }
        </>
        
    )
}
export default CheckOut


/*
    no lo puse porque se me desconocio (y mucho tiempo no tenia)

    import Button from 'react-bootstrap/Button'
    import Form from 'react-bootstrap/Form'

    <Form onSubmit={finalizarCompra} style={{display: 'flex', flexDirection: 'column', justifyContent:'center', textAlign: 'center'}}>
                    <Form.Group className="mb-3" controlId="inputName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" onChange={datosDelComprador}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="inputSurname">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control type="text" onChange={datosDelComprador}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="inputEmail">
                        <Form.Label>Correo electronico</Form.Label>
                        <Form.Control type="email" onChange={datosDelComprador} placeholder="name@example.com" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="inputPhone">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control type="number" onChange={datosDelComprador}/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Finalizar Compra
                    </Button>
                </Form>
*/