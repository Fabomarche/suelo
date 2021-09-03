import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const ItemCount = ( {stock, initial} ) => {
    const [stockCount, setStockCount] = useState(stock)
    const [count, setCount] = useState(initial)
    const [cart, setCart] = useState(0)

    const sum = () => {
        if (count < stockCount){
            setCount (count + 1)
        }
        
    }
    const sub = () => {
        if (count > 0){
        setCount (count - 1)
        }
    }

    const onAdd = () => {  
        if(stockCount - count >= 0){
        setStockCount(stockCount - count)
        setCart(cart + count)
        setCount(initial)
        }
    }


    return (
        <Container className="bg-secondary w-25 mt-5 py-3 shadow">
            <h3>Agregue Items</h3>
            <Form className="text-center d-inline-block">
                <Row className="align-items-center justify-content-center">
                    <Button className="p-0 bg-primary text-white shadow w-25" onClick={sub}>-</Button>
                    <Form.Control className="p-0 fs-1 w-25 text-center" value={count}/>
                    <Button className="p-0 bg-primary text-white shadow w-25" onClick={sum}>+</Button>
                </Row>
                <Button variant="primary" className="my-3 shadow" onClick={onAdd}>Agregar a carrito</Button>
            </Form>
            <h5>Stock: {stockCount}</h5>
            <h2>Carrito: {cart}</h2>
        </Container>
    )
}

export default ItemCount
