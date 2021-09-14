import React, { useState } from 'react'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Item = ({ producto }) => {
    return (
    <>
        <Card key={producto.id} style={{ width: '18rem' }} className="m-2 text-center shadow border-5 fade-in" border="primary">
                <div className="overflow">
                    <Card.Img variant="top" src={producto.pictureUrl} className="card-img-top"/>
                </div>
                <Card.Body className="bg-secondary">
                    <Card.Title>{producto.title}</Card.Title>
                    <Card.Text>
                    Precio: $ {producto.price}
                    </Card.Text>
                    <Button variant="primary" className="shadow btn-primary w-100 mx-0">Ver detalles</Button>
                </Card.Body>
        </Card>
    </>
    )
}

export default Item
