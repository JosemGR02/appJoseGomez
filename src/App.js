
import './App.css'
import NavBarBoots from './components/NavbarBoots';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListConteiner from './components/ItemListConteiner';




function App() {
  return (
    <div className="App">
      
      <NavBarBoots/>
      <ItemListConteiner name="como andas?" />
    </div>
  );
}

export default App;
