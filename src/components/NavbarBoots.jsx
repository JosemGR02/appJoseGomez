
import CardWidget from './CardWidget';
import { Link } from 'react-router-dom';

const NavBarBoots = () => {
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
                            <Link className="nav-link active" to='/'>home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <p className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorias</p>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item" to='/productos'>Todos los productos</Link></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><Link className="dropdown-item" to='/categoria/para-mujer'>para mujer</Link></li>
                            <li><Link className="dropdown-item" to='/categoria/para-hombre'>para hombre</Link></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><Link className="dropdown-item" to='/'>deportes</Link></li>
                            <li><Link className="dropdown-item" to='/'>material</Link></li>
                            <li><Link className="dropdown-item" to='/'>marca</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/paginas/registrarse'>registrarse</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/paginas/registrarse'>Contactanos</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <div>
                            <input className="form-control me-2" type="search" placeholder="Buscar productos..."         aria-label="Search"/>
                        </div>
                        <div>
                        <button className="btn btn-outline-secondary" type="submit"><a href="lupa"><i className="bi bi-search fs-4"></i></a></button>
                        </div>
                        <div>
                            <button id="botonregistrar" className= "btn-outline-secondary" type="submit"><a className="nav-link" href="./registrarse.html"><i className="bi bi-person-fill fs-4"></i></a></button>
                        </div>
                        <div>
                            <button id="botoncarrito" className="btn-outline-secondary" type="submit"><a className="nav-link" href="./carritocompras.html"><CardWidget/></a></button>
                        </div>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default NavBarBoots;