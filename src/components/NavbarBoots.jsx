
import CardWidget from './CardWidget';

const NavBarBoots = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light  bg-secondary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src= "/img/Dynamyte.png" width="200px" alt="logo Dynamyte"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"     data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/home.html">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"         data-bs-toggle="dropdown" aria-expanded="false">Categorias</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">de invierno</a></li>
                            <li><a className="dropdown-item" href="#">de verano</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">deportes</a></li>
                            <li><a className="dropdown-item" href="#">moda</a></li>
                            <li><a className="dropdown-item" href="#">material</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./registrarse.html">registrarse</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./contactanos.html">Contactanos</a>
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