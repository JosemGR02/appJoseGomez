
import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import Favoritos from "./Favoritos"
import { HiSearch } from "react-icons/hi"


const NavBarBoots = () => {

    const {cart} = useCart()
    console.log({cart})

    return (

        <nav className="navbar navbar-expand-lg navbar-light  bg-secondary">
            <div className="container-fluid">
                <Link className="nav-link" to='/'><img src= "/img/Dynamyte.png" width="200px" alt="logo Dynamyte"/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"     data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to='/'>Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <p className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorias</p>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item" to='/'>Busos</Link></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><Link className="dropdown-item" to='/'>Remeras</Link></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><Link className="dropdown-item" to='/'>Pantalones</Link></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><Link className="dropdown-item" to='/'>Shorts</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/categoria/para-mujer'>para Mujer</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/categoria/para-hombre'>para Hombre</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/paginas/registrarse'>Registrarse</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/contactanos'>Contactanos</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginLeft: '15px', marginRight: '10px'}}>
                            <input className="form-control me-2" type="search" placeholder="Buscar productos..."         aria-label="Search"/>
                            <HiSearch style={{ fontSize: '1.8em'}}/>
                        </div>
                        
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginLeft: '15px', marginRight: '10px'}}>
                            <Favoritos/>
                            <CartWidget/>
                        </div>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default NavBarBoots;

