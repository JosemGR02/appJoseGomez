import React from 'react'
import pagenotfoud from '../assets/imagenes/pagenotfoud.png'
import { NotFound, ContenPE, ImagenPE, TituloPE, BotonPE, } from './Styled'
import { useNavigate } from 'react-router-dom'


export const PagError = () => {

    const navegar = useNavigate()

    return (
        <NotFound>
            <ContenPE>
                <ImagenPE src= {pagenotfoud} alt=""/>

                <TituloPE>La pagina que ha solicitado no se encuentra disponible</TituloPE>

                <BotonPE type='submit' className='btn btn-primary' onClick={()=> navegar('/')}>Volver a la Home</BotonPE>
            </ContenPE>
        </NotFound>
    )
}


export default PagError;