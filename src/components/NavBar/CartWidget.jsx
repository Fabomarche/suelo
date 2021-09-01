import React from 'react'
import cart from '../../assets/svg/shopping-cart.svg'

const CartWidget = () => {
    return (
        <>
        <a href="#" className="order-md-0 order-first  d-block text-center mt-3 ms-3 ms-md-0">
         <img src={cart} className="shoppingCart me-2" alt="shopping cart" />
         <p className="texto-iconos text-secondary">Carrito</p>
         </a>
        </>
    )
}

export default CartWidget
