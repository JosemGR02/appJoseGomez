import logo from '../img/Dynamyte.png'

const NavBar = () => {
    return(

        <nav className="navbar">
            <img src="{logo}" alt="logo" />
            <a href="links">Inicio</a>
            <a href="links">Categorias</a>
            <a href="links">Contactanos</a>
            <a href="links">Registrarse</a>
        </nav>
    )
}

export default NavBar;


