import { UseCartContext } from "../../context/cartContext"

import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import CloseButton from 'react-bootstrap/CloseButton'
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

import { Link as RouterLink} from 'react-router-dom'


const Cart = () => {
    const { cartList, totalToPay, removeItem } = UseCartContext()

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Quitar item
        </Tooltip>
    );

    return (
        <div className="text-center mt-5 py-5">
            {cartList.length == 0 
            ? <div>
                <h3>No hay items en el carrito</h3>
                <RouterLink to='/'>
                    <Button variant="primary" className="m-1 shadow">Ir a Comprar</Button>
                </RouterLink>
            </div>    

            :<Table striped bordered hover size="sm">
                <thead className="bg-primary text-secondary">
                    <tr>
                    <th>Cantidad</th>
                    <th>Producto</th>
                    <th>Precio unitario</th>
                    <th>Final</th>
                    </tr>
                </thead>
                <tbody>
                {cartList.map(itemInCart => 
                    <tr >
                        <td>{itemInCart.quantity}</td>
                        <td>{itemInCart.title}</td>
                        <td>$ {itemInCart.price}</td>
                        <td>$ {itemInCart.quantity * itemInCart.price}</td>
                        <OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
                            <td className="bg-dark" ><CloseButton onClick={(e) => removeItem(itemInCart, e)} aria-label="Hide" variant="white"/></td>
                        </OverlayTrigger>
                    </tr>
                )}
                    <tr>
                        <td colSpan="3" className="text-end text-danger bg-secondary">Total</td>
                        <td className="text-danger bg-secondary">$ {totalToPay}</td>
                    </tr>
                </tbody>
            </Table>       
        }
        </div>

    )
}

export default Cart
