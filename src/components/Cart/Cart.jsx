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
            <Table responsive striped bordered hover size="sm" className="m-0 ">
                <thead className="bg-primary text-secondary">
                    <tr>
                    <th>Cantidad</th>
                    <th>Producto</th>
                    <th className="tableHide">Stock</th>  
                    <th className="tableHide">Precio unitario</th>
                    <th>Final</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                {cartList.map(itemInCart => 
                    <tr key={itemInCart.id} >
                        <td className="h5">
                            <Button variant="secondary" className="me-2 py-0 border-primary tableHide" onClick={(e) => subItem(itemInCart, e)}>-</Button>
                                {itemInCart.quantity}
                            <Button variant="secondary" className=" ms-2 py-0 border-primary tableHide" onClick={(e) => sumItem(itemInCart, e)}>+</Button></td>
                        <td><RouterLink to={`/detalle/${itemInCart.id}`}>{itemInCart.title}</RouterLink></td>
                        <td className="tableHide">{itemInCart.stock}</td>
                        <td className="tableHide">$ {itemInCart.price}</td>
                        <td>$ {itemInCart.quantity * itemInCart.price}</td>
                        <OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
                            <td className="bg-dark" ><CloseButton onClick={(e) => removeItem(itemInCart, e)} aria-label="Hide" variant="white"/></td>
                        </OverlayTrigger>
                    </tr>
                )}
                    <tr>
                        {window.screen.width <= 576 ?
                        <td colSpan="1" className="text-end text-danger bg-secondary h4">Total</td>
                        : <td colSpan="4" className="text-end text-danger bg-secondary h4">Total</td>
                    }
                        <td className="text-danger bg-secondary h4">$ {totalToPay}</td>
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
