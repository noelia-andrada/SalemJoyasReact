import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar';
import TituloPrincipal from "./components/Titulo/Titulo.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <TituloPrincipal/>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a la tienda"}/>}/>
        <Route path="/categoria/:categoriaId" element={<ItemListContainer/>}/>
        <Route path="/detalles/:productId" element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;