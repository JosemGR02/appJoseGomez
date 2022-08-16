
import React from 'react'
import './App.css'
import NavBarBoots from './components/NavbarBoots'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListConteiner from './components/ItemListConteiner'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailConteiner from './components/ItemDetailConteiner'
import Home from './paginas/Home'
import CartWidget from './components/CartWidget'
import { CartProvider } from './context/CartContext'
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useState, useEffect } from 'react'
import Cart from './components/Cart'




const App = () => {
  const [value, setValue] = useState('')

  
  useEffect(() => {
    const db = getFirestore();
  
    const docRef = doc( db, 'productos', 'KrNNe3UFhjuKZrtiC6Gm')
    getDoc(docRef)
    .then((snapshot) => {
        if (snapshot.exists()){
            const data = {
              id: snapshot.id,
              ...snapshot.data()
            }
            console.log(data)
            setValue(data)
        }
    })
    .catch((error)=> console.error(error))
  }, [])


  return (
    <BrowserRouter>
      <CartProvider>
        <NavBarBoots/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route exact path='/productos' element={<ItemListConteiner name="Dynamyte" />} />
          <Route path='/categoria/:tipocategoria' element={<ItemListConteiner name="Dynamyte" />} />
          <Route path='/detalle/:id' element={<ItemDetailConteiner/>} />
          <Route path='/carrito' element={<Cart/>}/>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

