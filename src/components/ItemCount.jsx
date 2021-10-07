import { useState } from 'react'
import { UseCartContext } from "../context/cartContext"

import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import { Link as RouterLink} from 'react-router-dom'

const ItemCount = ( {stock, initial, onAdd} ) => {
    const [count, setCount] = useState(initial)
    const [changeBtn, setChangeBtn] = useState(true)

    const {setCountQuantity} = UseCartContext()

    

    const sum = () => {
        if (count < stock){
            setCount (count + 1)
        }else{
            alert('Su pedido supera el stock disponible')
        }
        
    }
    const sub = () => {
        if (count > 0){
        setCount (count - 1)
        }
    }

    const agregarCarrito = () => {
        setCountQuantity(count)
        setChangeBtn(false)
        onAdd(count)
    }

    return (
        <Container className="bg-primary py-3  shadow text-center">
                {changeBtn ?
                    <Form className="text-center d-inline-block">
                        <h3 className="text-white">Agregue Items</h3>
                        <Row className="align-items-center justify-content-center">
                            <Button className="p-0 bg-secondary text-dark shadow w-25" onClick={sub}>-</Button>
                            <Form.Text className="bg-white text-dark p-0 fs-1 w-25 text-center rounded">{count}</Form.Text>
                            <Button className="p-0 bg-secondary text-dark shadow w-25" onClick={sum}>+</Button>
                        </Row>
                        <Button variant="secondary" className="my-3 shadow" onClick={agregarCarrito}>Agregar a carrito</Button>
                    </Form>
                    
                    : <Container>
                        <h3 className="text-white py-3">¿Cómo seguimos?</h3>
                        <RouterLink to='/cart'>
                            <Button variant="secondary" className="my-1 shadow">Ir al carrito</Button>
                        </RouterLink>
                        <br/>
                        <RouterLink to='/'>
                            <Button variant="secondary" className="my-1 shadow">Comprár más</Button>
                        </RouterLink>
                    </Container>
                }
        </Container>
    )
}

export default ItemCount
