import React from 'react'

import { UseCartContext } from "../../context/cartContext";


const Cart = () => {
    const { cartList } = UseCartContext()

    return (
        <div className="text-center mt-5">
            {cartList.map(itemInCart => <h5>{itemInCart.product.title} x {itemInCart.count} Unidades</h5> )}
        </div>
    )
}

export default Cart
