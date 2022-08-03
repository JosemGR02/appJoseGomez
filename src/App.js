
import React from 'react'
import './App.css'
import NavBarBoots from './components/NavbarBoots'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListConteiner from './components/ItemListConteiner'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailConteiner from './components/ItemDetailConteiner'
import Home from './paginas/Home'



function App() {
  return (
    <BrowserRouter>
    <NavBarBoots/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route exact path='/productos' element={<ItemListConteiner name="Dynamyte" />} />
        <Route path='/categoria/:tipocategoria' element={<ItemListConteiner name="Dynamyte" />} />
        <Route path='/detalle/:id' element={<ItemDetailConteiner/>} />
        
      </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;

