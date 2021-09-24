import React from 'react'

import { UseCartContext } from '../../context/cartContext'

const Cart = () => {
    const { cartList } = UseCartContext()
    return (
        <div className="text-center mt-5">
            {cartList.map(detalle => <h2>{detalle.detalle.title}</h2>)}
        </div>
    )
}

export default Cart
