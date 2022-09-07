import React from 'react'
import pagenotfoud from '../assets/imagenes/pagenotfoud.png'
import { NotFound, contenedor, imagen, titulo, boton, } from '../components/Styled'
import { useNavigate } from 'react-router-dom'


export const PagError = () => {

    const navegar = useNavigate()

    return (
        <body style={{backgroundColor: '#ebecea', height: '100'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center', height: '100'}}>
                <img src= {pagenotfoud} alt="" style={{width: '50', marginBottom: '15px'}}/>

                <h1 style={{color: 'rgb(4, 5, 48)', fontSize: '25px', fontFamily: 'Bebas Neue', padding: '20px', marginBlockEnd: '-3rem', marginBottom: '10px'}}>La pagina que ha solicitado no se encuentra disponible</h1>

                <button style={{ padding: '15px 35px', borderRadius: '15px', border: 'none', color: 'rgb(4, 5, 48)', background: 'rgb(27, 134, 184)', fontFamily: 'Bebas Neue', fontSize: '18px', marginBottom: '30px'}} type='submit' className='btn btn-primary' onClick={()=> navegar('/')}>Volver a la Home</button>
            </div>
        </body>
    )
}


export default PagError