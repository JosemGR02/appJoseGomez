import React from 'react'
import { FaRegEnvelope } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaInstagram } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { FooterSt, Redes } from './styled/Styled'
//import { Link } from 'react-router-dom';


const Footer = () => {

    return(
        <div>
            <FooterSt style={{width: '100%', height: '100px', display: 'flex', justifyContent: 'center',
                backgroundColor: 'black', color: 'white', fontFamily: 'arial'}}>
                <Redes>
                    <div className='rotate'>
                        <a href="https://www.facebook.com/" target="_blank"><FaFacebook style={{ color: 'blue', fontSize: '2em'}}/></a>
                    </div>
                    <div className='rotate'>
                        <a href="https://www.instagram.com/" target="_blank"><FaInstagram style={{ color: 'violet', fontSize: '2em'}}/></a>
                    </div>
                    <div className='rotate' style={{transition: 'all 1s ease'}}>
                        <a href="https://www.whatsapp.com/" target="_blank"><FaWhatsapp style={{ color: 'green', fontSize: '2em'}}/> </a>
                    </div>
                    <a href=""><BsFillTelephoneFill style={{ fontSize: '1.5em', color: 'black'}}/>6833936727</a> <br/>
                    <a href="https://mail.google.com/" target="_blank"><FaRegEnvelope style={{fontSize: '1.8em', color: 'red'}}/>email:tiendaDynamyte04@gmail.com</a>
                </Redes> <br/> <br/> <br/>
                <div>
                    <h4>
                        Nosotros - Quiénes somos - Contacto - Sucursales - Trabajá con nosotros <br/>
                        Productos - ¿Cómo comprar? - Ernesto Moreno 4321, Rosario, Santa fe.
                    </h4>
                </div>
                <div>
                    <h6>© Tienda Dynamyte.com 2022 - all rights reserved</h6>
                </div>
            </FooterSt>
        </div>
    )
}

export default Footer;

            

/*
style={{textAlign: 'center', marginLeft: '5px', marginRight: '5px',color: 'white'}}redes




footer{
    .redes{
        .bi-facebook{
            
            &:hover{
                color: blue;
            }
        }
        .bi-instagram{
            &:hover{
                color: rgb(121, 23, 121);
            }
        }
        .bi-whatsapp{
            &:hover{
                color: green;
            }
        }
    }
}
label{
    color: black;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.imcaru{
    width: 1800px;
    height: 650px;
}
@mixin redes ($hover) {
    font-size: 30px;
    text-align: center;
    margin-left: 5px;
    margin-right: 5px;
    color: $blanco;
    &:hover {
        color: $hover;
    }
}
.bi-facebook{
    @include redes($fb);
}
.bi-instagram{
    @include redes($wp);
}
.bi-whatsapp{
    @include redes($insta);
}
/* !--animaciones--! 
.caja{

    &:hover{
        transform: rotate(30deg);
    }
}

.aninav{
    
}
.tran1{
    transition: all 1s ease;
    &:hover{
        width: 200px;
    }
}

*/


/*
    INTENTO FOOTER 1


<div>
            <footer className='footer' style={{width: '100%', height: '100px', display: 'flex', justifyContent: 'center',
                backgroundColor: 'blue', color: 'white', fontFamily: 'arial'}}>
                <div className='redes' style={{display: 'inlineBlock', fontSize: '30px', textAlign: 'center', marginLeft: '5px', marginRight: '5px', color: 'white'}}>
                    <div className='caja anim1 rotate' style={{width: '60px', height: '60px', margin: '5px auto', display: 'inlineBlock', fontSize: '30px', textAlign: 'center', marginLeft: '5px', marginRight: '5px', color: 'white'}}>
                        <a href="https://www.facebook.com/" target="_blank"><i className='bi bi-facebook fs-2' style={{textAlign: 'center', marginLeft: '5px', marginRight: '5px', color: 'white'}}></i></a>
                    </div>
                    <div className='caja anim2 rotate' style={{width: '60px', height: '60px', margin: '5px auto', display: 'inlineBlock', fontSize: '30px', textAlign: 'center', marginLeft: '5px', marginRight: '5px', color: 'white'}}>
                        <a href="https://www.instagram.com/" target="_blank"><i className='bi bi-instagram fs-2' style={{textAlign: 'center', marginLeft: '5px', marginRight: '5px', color: 'white'}}></i></a>
                    </div>
                    <div className='caja anim3 rotate' style={{width: '60px', height: '60px', margin: '5px auto', display: 'inlineBlock', fontSize: '30px', textAlign: 'center', marginLeft: '5px', marginRight: '5px', color: 'white'}}>
                        <a href="https://www.whatsapp.com/" target="_blank"><i className='bi bi-whatsapp fs-2' style={{textAlign: 'center', marginLeft: '5px', marginRight: '5px', color: 'white'}}></i></a>
                    </div>
                    <a href=""><i className='bi bi-telephone-fill fs-4'></i>293874773747</a> <br/>
                    <a href="https://mail.google.com/" target="_blank"><i className='bi bi-envelope-fill fs-4'></i>email:tiendabuzoz202@gmail.com</a>
                </div> <br/> <br/> <br/>
                <div>
                    <h4>
                        Nosotros - Quiénes somos - Contacto - Sucursales - Trabajá con nosotros <br/>
                        Productos - ¿Cómo comprar? - Ernesto Moreno 4321, Rosario, Santa fe.
                    </h4>
                </div>
                <div>
                    <h6>© Tienda Buzoz.com 2022 - all rights reserved</h6>
                </div>
            </footer>
        </div> */