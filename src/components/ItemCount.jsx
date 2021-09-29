import { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import { Link as RouterLink} from 'react-router-dom'

const ItemCount = ( {stock, initial, onAdd} ) => {
    const [stockCount, setStockCount] = useState(stock)
    const [cart, setCart] = useState(0)

    const [count, setCount] = useState(initial)
    const [changeBtn, setChangeBtn] = useState(true)

    const sum = () => {
        if (count < stock){
            setCount (count + 1)
        }
        
    }
    const sub = () => {
        if (count > 0){
        setCount (count - 1)
        }
    }

    const stockToPrint = () => {  
        if(stockCount - count >= 0){
        setStockCount(stockCount - count)
        setCart(cart + count)
        setCount(initial)
        }
    }

    const agregarCarrito = () => {
        stockToPrint()
        setChangeBtn(false)
        onAdd(count)
    }

    return (
        <Container className="bg-primary py-3 shadow">
                {changeBtn ?
                    <Form className="text-center d-inline-block">
                        <h3 className="text-white">Agregue Items</h3>
                        <Row className="align-items-center justify-content-center">
                            <Button className="p-0 bg-secondary text-dark shadow w-25" onClick={sub}>-</Button>
                            <Form.Control className="p-0 fs-1 w-25 text-center" value={count}/>
                            <Button className="p-0 bg-secondary text-dark shadow w-25" onClick={sum}>+</Button>
                        </Row>
                        <Button variant="secondary" className="my-3 shadow" onClick={agregarCarrito}>Agregar a carrito</Button>
                        {/* <h5 className="text-white">Stock: {stockCount}</h5> */}
                    </Form>
                    
                    : <Container>
                        <h3 className="text-white">¿Cómo seguimos?</h3>
                        <RouterLink to='/cart'>
                            <Button variant="secondary" className="my-1 shadow" >Terminar compra</Button>
                        </RouterLink>
                        <br/>
                        <RouterLink to='/'>
                            <Button variant="secondary" className="my-1 shadow">Comprár más</Button>
                        </RouterLink>
                        {/* <h5 className="text-white mt-2">Stock: {stockCount}</h5> */}
                        {/* <h2 className="text-white">Carrito: {cart}</h2> */}
                    </Container>
                }
        </Container>
    )
}

export default ItemCount
