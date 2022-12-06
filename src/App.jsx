import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar';
import TituloPrincipal from "./components/Titulo/Titulo.jsx";

function App() {
  return (
    <div className="App">
      <TituloPrincipal/>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos a la tienda"}/>
    </div>
  )
}

export default App;