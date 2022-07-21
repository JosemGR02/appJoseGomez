
import './NavBar.css'
import LogoTienda from '../img/Dynamyte.png'
import CardWidget from './CardWidget';
import ItemListConteiner from './ItemListConteiner';



const NavBar = () => {
    return(
        <div>
            <div>
                <nav className="navbar">
                    <img src= {LogoTienda} alt="logo" />
                    <a href="links">Inicio</a>
                    <a href="links">Categorias</a>
                    <a href="links">Contactanos</a>
                    <a href="links">Registrarse</a>
                </nav>
            </div>
            <CardWidget/>
        </div>
    )
}

export default NavBar;


