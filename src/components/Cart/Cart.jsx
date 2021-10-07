import { UseCartContext } from "../../context/cartContext"

import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import CloseButton from 'react-bootstrap/CloseButton'
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

import { Link as RouterLink} from 'react-router-dom'


const Cart = () => {

    const { cartList, totalToPay, removeItem, eraseList, subItem, sumItem} = UseCartContext()

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Quitar item
        </Tooltip>
    );
    
    

    return (
        <div className="text-center mt-4">
            {cartList.length === 0 
            ? <div className="container mt-3 pt-3">
                <h3 className="mt-5">No hay items en el carrito</h3>
                <RouterLink to='/'>
                    <Button variant="primary" className="m-1 shadow">Ir a Comprar</Button>
                </RouterLink>
            </div>    

            :<>
            <h2 className="text-dark my-4">Produtos en Carrito</h2>
            <Table striped bordered hover size="sm" className="m-0">
                <thead className="bg-primary text-secondary">
                    <tr>
                    <th>Cantidad</th>
                    <th>Producto</th>
                    <th>Stock</th>  
                    <th>Precio unitario</th>
                    <th>Final</th>
                    </tr>
                </thead>
                <tbody>
                {cartList.map(itemInCart => 
                    <tr key={itemInCart.id} >
                        <td className="h5">
                            <Button variant="secondary" className="me-2" onClick={(e) => subItem(itemInCart, e)}>-</Button>
                                {itemInCart.quantity}
                            <Button variant="secondary" className=" ms-2" onClick={(e) => sumItem(itemInCart, e)}>+</Button></td>
                        <td><RouterLink to={`/detalle/${itemInCart.id}`}>{itemInCart.title}</RouterLink></td>
                        <td>{itemInCart.stock}</td>
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

            <Button variant="danger" className="m-3 shadow" onClick={eraseList}>Borrar carrito</Button>    

            <RouterLink to={`/cartForm`}>        
                <Button variant="primary" className="m-3 shadow" type="submit">Pagar</Button> 
            </RouterLink>   
            </>     
            }
        </div>
    )
}

export default Cart
