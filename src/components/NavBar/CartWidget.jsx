import { UseCartContext } from "../../context/cartContext"

import cart from '../../assets/svg/shopping-cart.svg'

import Container from 'react-bootstrap/Container'

const CartWidget = () => {
    const { totalItemsQuntity } = UseCartContext()
    return (
        <Container className="cartWidget d-block text-center mt-3">
        
            <Container className="d-flex me-4">
                <img src={cart} className="shoppingCart" alt="shopping cart" />
                {totalItemsQuntity !== 0 && <p className="text-secondary cart-number ms-1 my-0">{totalItemsQuntity}</p>}
            </Container>
            
            <p className="texto-iconos text-secondary me-4">Carrito</p>
        
        </Container>
    )
}

export default CartWidget
