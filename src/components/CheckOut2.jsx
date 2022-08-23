import React from 'react'
import { useState } from 'react'

export const CheckOut2 = () => {
    const [comprador, setComprador] = useState({})


    const datosDelComprador = (evento) => {
        setComprador({
            ...comprador,
            [evento.target.name]: evento.target.value
        })
    }

    console.log(comprador)

    return (
        
            <div>
                <h2>Comprar</h2>
                <form>
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
    )
}
export default CheckOut2

