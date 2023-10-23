import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'


export const CartWidget = () => {

  const {cantidadEnCarrito} = useContext(CartContext);

  return (

    <div className><Link className="menu-link nav-link" to="/carrito"><h3><i className="bi bi-cart2">
      </i><span className='numerito'>{cantidadEnCarrito()} </span> </h3></Link></div>
  )
}
