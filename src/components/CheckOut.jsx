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
                <h2>Comprar</h2>
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
                <h2>Gracias por su compra!!</h2>
                <h3>Tu pedido: {orderId}, ya ha sido registrado</h3>
                <button style={{ fontFamily: 'Bebas Neue'}} type='submit' className='btn btn-primary' onClick={()=> navegar('/')}>Volver a la Home</button>
            </div>
            }
        </>
        
    )
}
export default CheckOut


/*
            <Form onSubmit={finalizarCompra} style={{display: 'flex', flexDirection: 'column', justifyContent:'center', textAlign: 'center'}}>
                <Form.Group className="mb-3" controlId="inputName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" onChange={datosDelComprador}/>
                    <Form.Text className="text-muted">
                        nombre.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="inputSurname">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" onChange={datosDelComprador}/>
                    <Form.Text className="text-muted">
                        apellido.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="inputEmail">
                    <Form.Label>Correo electronico</Form.Label>
                    <Form.Control type="email" onChange={datosDelComprador} placeholder="name@example.com" />
                    <Form.Text className="text-muted">
                        Hola como andas.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="inputPhone">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control type="text" onChange={datosDelComprador}/>
                    <Form.Text className="text-muted">
                        telefono.
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Finalizar Compra
                </Button>
            </Form> */






/* <label for="inputEmail4" id="inputRepetir" class="form-label">Repetir correo</label>
    <input type="email" name='repetirEmail' onChange={datosDelComprador}/> */



/*
//validacion formulario

let input_nombre = document.getElementById("inputNombre");
let input_apellido = document.getElementById("inputApellido");
let input_email = document.getElementById("inputEmail");
let input_telefono = document.getElementById("inputTel");
let input_contra = document.getElementById("inputContra");
let input_contraConfirm = document.getElementById("contraConfirm");




form.addEventListener("submit"), f=> {
    f.preventDefault()
    warning = "no completaste con todos los campos"
    parrafo.innerHTML = ""
    let entrar = false
    let validarEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2})+$/

    if (inputNombre.value.lenght <6){

        swal.fire({
            icon:'error',
            title:'Oops',
            text:'El nombre que ingresate no es valido'
        })
        entrar = true
    }
    if (inputApellido.value.lenght <6){

        swal.fire({
            icon:'error',
            title:'Oops',
            text:'El nombre que ingresate no es valido'
        })
        entrar = true
    }
    
    if (!validarEmail.test(email.value)){

        swal.fire({
            icon:'error',
            title:'Oops',
            text:'El email que ingresate no es valido'
        })
        entrar = true
    }
    if (inputTel.value.lenght  < 15){

        swal.fire({
            icon:'error',
            title:'Oops',
            text:'El numero de telefono que ingresate no es valido'
        })
        entrar = true
    }
    if (contraConfirm !== inputContra){

        swal.fire({
            icon:'error',
            title:'Oops',
            text:'La contraseñas que ingresaste son distintas'
        })
        entrar = true
    }
    if (entrar){
        parrafo.innerHTML = "warning"
    }else {
        parrafo.innerHTML = "Enviado"
    }
    registroPersona()
}
 */