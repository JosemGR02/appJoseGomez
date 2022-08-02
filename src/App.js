
import React from 'react'
import './App.css'
import NavBarBoots from './components/NavbarBoots'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListConteiner from './components/ItemListConteiner'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailConteiner from './components/ItemDetailConteiner'



function App() {
  return (
    <BrowserRouter>
    <NavBarBoots/>
      <Routes>
        <Route exact path='/' element={<ItemListConteiner name="Dynamyte" />} />
        
      </Routes>
      <ItemDetailConteiner/>
    </BrowserRouter>

  );
}

export default App;
