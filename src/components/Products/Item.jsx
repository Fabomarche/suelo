import { Link as RouterLink } from "react-router-dom"

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Item = ({ producto }) => {
    return (
    <>
        <Card style={{ width: '18rem' }} className="m-2 text-center shadow border-4 fade-in p-0" border="dark">
                <div className="overflow border-bottom border-primary border-3">
                    <RouterLink to={`/item/${producto.id}`}>
                        <Card.Img variant="top" src={producto.pictureUrl} className="card-img-top"/>
                    </RouterLink>    
                </div>
                <Card.Body className="bg-secondary">
                    <Card.Title>{producto.title}</Card.Title>
                    <Card.Text>
                    Precio: $ {producto.price}
                    </Card.Text>
                    <RouterLink to={`/item/${producto.id}`}>
                        <Button variant="primary" className="shadow btn-primary w-100 mx-0">Ver detalles</Button>
                    </RouterLink>
                </Card.Body>
        </Card>
    </>
    )
}

export default Item
