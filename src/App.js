
import React from 'react'
import './App.css'
import NavBarBoots from './components/NavbarBoots'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListConteiner from './components/ItemListConteiner'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailConteiner from './components/ItemDetailConteiner'
import CartWidget from './components/CartWidget'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart'
import CheckOut from './components/CheckOut'



const App = () => {

  /*useEffect(() => {
    const subirProds = collection(db, "productos")
    productos.map((item)=> addDoc(subirProds, item))
    
  }, [])*/


  return (
    <BrowserRouter>
      <CartProvider>
        <NavBarBoots/>
        <Routes>
          <Route path='/' element={<ItemListConteiner name="Dynamyte" />} />
          <Route path='/categoria/:id' element={<ItemListConteiner name="Dynamyte" />} />
          <Route path='/detalle/:id' element={<ItemDetailConteiner/>} />
          <Route path='/carrito' element={<Cart/>}/>
          <Route path='/checkout' element={<CheckOut/>}/>

        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

