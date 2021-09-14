import React from 'react'

import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const ItemDetail = ({ detalle }) => {
    return (
        <>
            <Card key={detalle.id} style={{ width: '25rem' }} className="m-2 text-center shadow border-5 fade-in" border="primary">
                <div className="overflow">
                    <Card.Img variant="top" src={detalle.pictureUrl} className="card-img-top"/>
                </div>
                <Card.Body className="bg-secondary">
                    <Card.Title>{detalle.title}</Card.Title>
                    <Card.Text className="detalles-texto">{detalle.description}</Card.Text>
                    <Card.Text>
                    Precio: $ {detalle.price}
                    </Card.Text>

                    <Form className="text-center d-inline-block">
                        <Row className="align-items-center justify-content-center">
                            <Button className="p-0 bg-primary text-white shadow w-25">-</Button>
                            <Form.Control className="p-0 fs-1 w-25 text-center"/>
                            <Button className="p-0 bg-primary text-white shadow w-25">+</Button>
                        </Row>
                        <Button variant="primary" className="my-3 shadow">Agregar a carrito</Button>
                        <br />
                        <Form.Text className="text-muted">{detalle.stock} unidades en stock</Form.Text>
                    </Form>

                </Card.Body>
        </Card>
        </>
    )
}

export default ItemDetail
