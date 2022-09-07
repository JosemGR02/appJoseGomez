import { useForm } from "react-hook-form";



const Formulario = ( ) => {
    const { handleSubmit, formState: {errors}, watch, register } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return(
        <div>
            <h2>
                Formulario
            </h2>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label for="inputAddress" class="form-label">Nombre</label>
                    <input type="text" placeholder='pepito' name='nombre' onChange={datosDelComprador} {...register('nombre', {
                        required: true,
                        maxLength: 30
                    })} />
                    {errors.nombre?.type === 'required' && <h4>El campo nombre es requerido</h4>}
                    {errors.nombre?.type === 'max length' && <h4>El campo nombre debe tener menos de 30 carateres</h4>}
                </div>
                    <label for="inputPassword" class="form-label">Apellido</label>
                    <input type="text" placeholder='gonzalez' name='apellido' {...register('apellido')} onChange={datosDelComprador}/>
                <div>
                    <label for="inputEmail4" id="inputPrimero" class="form-label">Correo electronico</label>
                    <input type="email" name='email' onChange={datosDelComprador} {...register('correo', {
                        pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2})+$/
                    })}/>
                    {errors.email?.type === 'pattern' && <h5>El formato del email es incorrecto </h5>}
                </div>
                    <label for="inputEmail4" id="inputRepetir" class="form-label">Repetir correo</label>
                    <input type="email" name='repetirEmail' onChange={datosDelComprador} {...register('repetircorreo', {
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                    })}
                    {errors.email?.type === 'pattern' && <h5>El formato del email es incorrecto </h5>}
                <div>
                    <label for="inputAddress2" class="form-label">Telefono</label>
                    <input type="number" name='number' {...register('telefono')} onChange={datosDelComprador}/>
                </div>
                <button type='submit'>Finalizar Compra</button>
            </form>
        </div>
    )
}

export default Formulario;


/*<Form>
                <Form.Group className="mb-3" controlId="inputName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text"/>
                    <Form.Text className="text-muted">
                        nombre.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="inputSurname">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text"/>
                    <Form.Text className="text-muted">
                        apellido.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="inputEmail">
                    <Form.Label>Correo electronico</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                    <Form.Text className="text-muted">
                        Hola como andas.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="inputPhone">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control type="text"/>
                    <Form.Text className="text-muted">
                        telefono.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Dejanos tu comentario/consulta</Form.Label>
                    <Form.Control as="textarea" rows={4} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    ENVIAR
                </Button>
            </Form> */

/*//REGISTRARSE JAVASCRIPT 

let input_nombre = document.getElementById("inputNombre");
let input_apellido = document.getElementById("inputApellido");
let input_usuario = document.getElementById("inputUsuario");
let input_email = document.getElementById("inputEmail");
let input_telefono = document.getElementById("inputTel");
let input_contra = document.getElementById("inputContra");
let input_contraConfirm = document.getElementById("contraConfirm");
let botonEnviar = document.getElementById("submit");
let parrafo = document.getElementById("warning");



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
    if (inputUsuario.value.lenght < 6){

        swal.fire({
            icon:'error',
            title:'Oops',
            text:'El usuario que ingresate no es valido'
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

    if (inputContra.value.lenght < 8){

        swal.fire({
            icon:'error',
            title:'Oops',
            text:'La contraseña que ingresaste no es valida'
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
//crear persona

function registroPersona(){

    let nuevaPersona = [],
        nombre = '',
        apellido = '',
        usuario = '',
        email = '',
        telefono = '',
        contra = '';

    nombre = document.querySelector('#inputNombre').value
    apellido = document.querySelector('#inputApellido').value
    usuario = document.querySelector('#inputUsuario').value
    email = document.querySelector('#inputEmail').value
    telefono = document.querySelector('#inputTel').value
    contra = document.querySelector('#inputContra').value

    nuevaPersona.push(nombre, apellido, usuario, email, telefono, contra);
    
    guardar_usuarios_localS(nuevaPersona)
}


//guardar personas local storage

let listaPersonas = [
    ['fabian','martinez', 'fabian_03', 'fabianmartinez03@gmail.com','242539251259825', 'pamons242']
];


function guardar_usuarios_localS(nuevaPersona){

    listaPersonas.push(nuevaPersona);
    localStorage.setItem(lista_personasLS,JSON.stringify(listaPersonas));
}

*/