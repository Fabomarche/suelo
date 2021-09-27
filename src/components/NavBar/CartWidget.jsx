import { UseCartContext } from "../../context/cartContext"

import cart from '../../assets/svg/shopping-cart.svg'

import Container from 'react-bootstrap/Container'

const CartWidget = () => {
    const { totalItemsQuntity } = UseCartContext()
    return (
        <Container className="cartWidget order-md-0 order-first d-block text-center mt-3 ms-3 ms-md-0">
        
            <Container className="d-flex">
                <img src={cart} className="shoppingCart" alt="shopping cart" />
                <p className="text-secondary cart-number ms-1 my-0">{totalItemsQuntity}</p>
            </Container>
            
            <p className="texto-iconos text-secondary">Carrito</p>
        
        </Container>
    )
}

export default CartWidget
