import React from 'react'
import cart from '../assets/svg/shopping-cart.svg'

const CartWidget = () => {
    return (
        <>
        <a href="#" className="col-2 d-flex justify-content-center">
         <img src={cart} className="shoppingCart" alt="shopping cart" />
         </a>
        </>
    )
}

export default CartWidget
