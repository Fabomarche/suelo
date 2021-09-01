import React from 'react'
import cart from '../assets/svg/shopping-cart.svg'

const CartWidget = () => {
    return (
        <>
        <a href="#">
         <img src={cart} className="shoppingCart" alt="shopping cart" />
         </a>
        </>
    )
}

export default CartWidget
