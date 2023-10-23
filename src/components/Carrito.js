import React from 'react'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react';

const Carrito = () => {

    const {carrito, precioTotal,vaciarCarrito} = useContext(CartContext);
    
    const handleVaciar = () => {

        vaciarCarrito(); 
    
    }

  return (
    <div className='container'>
        <h1 className='main-title'>Carrito</h1>
    
    {carrito.map((prod)=>(
        <div className='contenedor' key={prod.id}>
            <img className='imagen-carrito' src={prod.imagen}/>
            
            <h4 className='text'>{prod.titulo}</h4>
            <p className='text'>Unidades: {prod.cantidad}</p>
            <p className='text'>Precio unit: ${prod.precio}</p>
            <p className='text'>Precio total: ${prod.precio * prod.cantidad}</p>
        </div>
    ))
    }

    {   
    
        <>      <h2>Precio total a pagar: ${precioTotal()}</h2>
        <button onClick={handleVaciar}>Vaciar carrito</button></>
  
    }
   

    </div>
  )
}

export default Carrito