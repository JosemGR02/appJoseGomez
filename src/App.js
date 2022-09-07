
import React from 'react'
import './App.css'
import NavBarBoots from './components/NavbarBoots'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListConteiner from './components/ItemListConteiner'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailConteiner from './components/ItemDetailConteiner'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart'
import CheckOut from './components/CheckOut'
import CartWidget from './components/CartWidget'
import Footer from './components/Footer'
import Contactanos from './components/Contactanos'
import Favorites from './components/Favorites'
import PagError from './components/PagError'
import Favoritos from './components/Favoritos'
import productos from './mock/ApiFake'

import { db } from './firebase/Firebase'
import { collection, addDoc } from 'firebase/firestore'
import { useEffect} from 'react'



const App = () => {
/*
  useEffect(() => {

    const subirProds = collection(db, "productos")
    productos.map((item)=> addDoc(subirProds, item))
    
  }, [])
  */

  return (
    <BrowserRouter>
      <CartProvider>
        <NavBarBoots/>
        <Routes>
          <Route path='/' element={<ItemListConteiner name="Dynamyte" />} />
          <Route path='/categoria/:id' element={<ItemListConteiner name="Dynamyte" />} />
          <Route path='/detalle/:id' element={<ItemDetailConteiner/>} />
          <Route path='/carrito' element={<Cart/>}/>
          <Route path='/carrito' element={<CartWidget/>}/>
          <Route path='/favoritos' element={<Favoritos/>}/>
          <Route path='/checkout' element={<CheckOut/>}/>
          <Route path='/contactanos' element={<Contactanos/>}/>
          <Route path='/404' element={<PagError/>}/>
        </Routes>
        <Footer/>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

/*
import { Cuadrado, Rectangulo, Component, Input, RedText, BlueText} from './components/Styled'<Cuadrado classname="Cuadrado"/>
        <Rectangulo classname="Rectangulo"/>
        <Component isRigth={true}>aaaaa</Component>
        <RedText>ggggg</RedText>
        <BlueText>fffff</BlueText>
        <Input maxLength={50}/> */