import React from 'react'
import cart from '../../assets/svg/shopping-cart.svg'

const CartWidget = () => {
    return (
        <>
        <a href="#" className="d-block text-center mt-3">
         <img src={cart} className="shoppingCart me-2" alt="shopping cart" />
         <p className="texto-iconos text-secondary">Carrito</p>
         </a>
        </>
    )
}

export default CartWidget
