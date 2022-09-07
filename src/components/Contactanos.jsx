
import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import tienda1 from '../assets/imagenes/tienda1.jpg'
import tienda2 from '../assets/imagenes/tienda2.jpg'



export function Contactanos(){
    return (
        <>
            <div>
                <h1 class="text-center h2 mt-6" style={{marginTop: '40px', marginBottom: '60px', fontFamily: 'Tiro Devanagari Hindi'}}>Formulario contacto</h1>
            </div>
            <Form>
                <Form.Group className="mb-3" controlId="inputName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="inputSurname">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="inputEmail">
                    <Form.Label>Correo electronico</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="inputPhone">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Dejanos tu comentario/consulta</Form.Label>
                    <Form.Control as="textarea" rows={4} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    ENVIAR
                </Button>
            </Form>
            <div>
                <h2 class="text-center h2 mt-6" style={{fontFamily: 'Tiro Devanagari Hindi'}}>Encontranos en nuestra sucursal</h2>
            </div> 
            <div style={{display: 'flex', flexDirection: 'wrap', justifyContent: 'center', marginTop: '40px', marginBottom: '30px'}}>
                <iframe  style={{alignItems: 'center', justifyContent: 'center', height: '1000', width: '850' }} src="https://www.google.de/maps/place/Monumento+hist%C3%B3rico+nacional+a+la+Bandera/@-32.948224,-60.6797824,14z/data=!4m5!3m4!1s0x95b7ab1dc9b6d36f:0x97b9e9584d94d851!8m2!3d-32.9477132!4d-60.6304658?hl=de">
                </iframe>
            </div>
            <div style={{marginBottom: '60px'}}>
                <h5 class="text-center h5 mt-6">DIRECCIÓN: Pepito Moreno 1234, Rosario, Santa fe.<br/>
                    HORARIO DE ATENCIÓN: Lunes a Viernes de 8 hs a 13 hs  <br/>
                    y de 15 hs a 19 hs - Sábados de 9 hs a 13 hs.
                </h5>
            </div>
            
            <div>
                <h2 class="text-center h2 mt-6" style={{marginTop: '40px', marginBottom: '60px', fontFamily: 'Tiro Devanagari Hindi'}}>Sobre nosotros</h2>
            </div>
            <div>
                <div style={{display: 'flex', justifyContent: 'center',marginTop: '40px', marginBottom: '60px'}}>
                    <img src= {tienda1} alt="" style={{width: '100'}}/>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', marginBottom: '40px'}}>
                    <img src= {tienda2} alt="" style={{width: '130'}}/>
                </div>
            </div>
            <div>
                <h5 style={{display: 'flex', textAlign: 'center', marginTop: '40px', marginBottom: '60px'}}>Dynamyte Fashion es una joven empresa que día a día trabaja para estar cada vez mas cerca tuyo, y así brindarte una cómoda experiencia de compra, con buenos precios y excelente calidad de productos para renovar tu forma de vestirte, queremos ser parte del color que llevás. <br/>
                    Nos apasiona seguir innovando y cubrir las necesidades que se presentan.
                </h5>
            </div>
        </>
    );
}

export default Contactanos



/*                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"/>
                </Form.Group> */