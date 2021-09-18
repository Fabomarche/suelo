import React from 'react'

import ItemCount from '../ItemCount'

import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const ItemDetail = ({ detalle }) => {
    return (
        <>
            <Card key={detalle.id} style={{ width: '25rem' }} className="m-2 text-center shadow border-4 fade-in" border="dark">
                <div className="overflow">
                    <Card.Img variant="top" src={detalle.pictureUrl} className="card-img-top"/>
                </div>
                <Card.Body className="bg-secondary pt-4 pb-0 px-0">
                    <Card.Title>{detalle.title}</Card.Title>
                    <Card.Text className="detalles-texto">{detalle.description}</Card.Text>
                    <Card.Text>
                    Precio: $ {detalle.price}
                    </Card.Text>

                    <ItemCount stock={detalle.stock} initial={1}/>

                </Card.Body>
        </Card>
        </>
    )
}

export default ItemDetail
