import './App.css';
import "./main.css";
import Navbar from './components/Navbar';
import { Route, Routes ,BrowserRouter} from "react-router-dom"
import { ItemListContainer } from './paginas/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { useState } from 'react';
import { CartContext } from './context/CartContext';
import Carrito from './components/Carrito';



function App() {

const [carrito, setCarrito] = useState([]);

const agregarAlCarrito = (item, cantidad) => {

  const itemAgregado = {...item, cantidad}

  const nuevoCarrito = [...carrito]

  const estaEnElCarrito = nuevoCarrito.find((producto)=> producto.id === itemAgregado.id);

  if (estaEnElCarrito){
    estaEnElCarrito.cantidad += cantidad;
  }else{
    nuevoCarrito.push(itemAgregado);
  }
  setCarrito(nuevoCarrito);
  
}

  const cantidadEnCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  }

  const precioTotal = () => {

    return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
  }

  const vaciarCarrito = () => {

    setCarrito([])

  }

 

  return (
    <div className="App">

      <CartContext.Provider value={ {carrito, agregarAlCarrito, cantidadEnCarrito, precioTotal, vaciarCarrito} }>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/ItemListContainer" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="/productos" element={<ItemListContainer/>}/>
        <Route path="/productos/:categoria" element={<ItemListContainer/>}/>
        <Route path="/carrito" element={<Carrito/>}/>
      </Routes>
    </BrowserRouter>
    </CartContext.Provider>
    </div>
  );
}

export default App;
